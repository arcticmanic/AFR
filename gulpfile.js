const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev

const path = require('path'),
  del = require('del'),
  fs = require('fs')

const browserSync = require('browser-sync').create(),
  reload = browserSync.reload,
  merge = require('merge-stream')

const gulp = require('gulp'),
  watch = require('gulp-watch'),
  sourcemaps = require('gulp-sourcemaps'),
  plumber = require('gulp-plumber'),
  concat = require('gulp-concat'),
  size = require('gulp-size')

const rollup = require('gulp-better-rollup'),
  babel = require('rollup-plugin-babel'),
  resolve = require('rollup-plugin-node-resolve'),
  uglify = require('gulp-uglify-es').default,
  nodeResolve = require('rollup-plugin-node-resolve'),
  globals = require('rollup-plugin-node-globals')

const postcss = require('gulp-postcss'),
  postcssPresetEnv = require('postcss-preset-env'),
  cssDeclarationSorter = require('css-declaration-sorter'),
  // stylelint = require('stylelint'),
  atImport = require('postcss-import'),
  autoprefixer = require('autoprefixer'),
  cssnano = require('cssnano'),
  nested = require('postcss-nested'),
  tailwindcss = require('tailwindcss')

const sass = require('gulp-sass')
sass.compiler = require('node-sass')

const templateEngine = require('gulp-twig'),
  data = require('gulp-data')

const paths = {
  src: {
    root: path.join(__dirname, 'src'),
    templates: path.join(__dirname, 'src', 'templates'),
    data: path.join(__dirname, 'src', 'data'),
    js: path.join(__dirname, 'src', 'js'),
    css: path.join(__dirname, 'src', 'css'),
    scss: path.join(__dirname, 'src', 'scss'),
    images: path.join(__dirname, 'src', 'images'),
  },
  dist: {
    root: path.join(__dirname, 'dist'),
    js: path.join(__dirname, 'dist', 'assets', 'js'),
    css: path.join(__dirname, 'dist', 'assets', 'css'),
    images: path.join(__dirname, 'dist', 'assets', 'images'),
  },
}

const postcssPlugins = [
  atImport(),
  nested(),
  postcssPresetEnv({ stage: 1, autoprefixer: false }),
  cssDeclarationSorter({ order: 'smacss' }),
  tailwindcss(),
]

if (isProd) {
  postcssPlugins.push(
    cssnano({
      presets: [
        'default',
        {
          discardComments: {
            removeAll: true,
          },
        },
      ],
    }),
    autoprefixer({ grid: true })
  )
}

const templating = () => {
  return gulp
    .src(path.join(paths.src.templates, 'pages', '*.twig'))
    .pipe(
      plumber({
        handleError: function (err) {
          console.log(err)
          this.emit('end')
        },
      })
    )
    .pipe(
      data(function (file) {
        return JSON.parse(
          fs.readFileSync(
            path.join(
              paths.src.data,
              `${path.basename(file.path).replace(/\.[^/.]+$/, '')}.json`
            )
          )
        )
      })
    )
    .pipe(
      templateEngine().on('error', function (err) {
        process.stderr.write(err.message + '\n')
        this.emit('end')
        console.log(path.basename(file.path))
      })
    )
    .pipe(gulp.dest(paths.dist.root))
    .pipe(browserSync.stream())
}

const styles = () => {
  const scssStream = gulp
    .src(path.join(paths.src.scss, 'style.scss'))
    .pipe(sourcemaps.init())
    .pipe(sass().on('error', sass.logError))
    .pipe(postcss(postcssPlugins))

  const cssStream = gulp
    .src(path.join(paths.src.css, 'base.css'))
    .pipe(sourcemaps.init())
    .pipe(postcss(postcssPlugins))

  const mergedStream = merge(cssStream, scssStream)
    .pipe(concat('base.css'))
    .pipe(size({ title: 'css' }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.css))
    .pipe(browserSync.stream())

  return mergedStream
}

const js = () => {
  const js = gulp
    .src(path.join(paths.src.js, 'core.js'))
    .pipe(
      plumber({
        handleError: function (err) {
          console.log(err)
          this.emit('end')
        },
      })
    )
    .pipe(sourcemaps.init())
    .pipe(
      rollup(
        {
          plugins: [
            nodeResolve({ preferBuiltins: false }),
            globals(),
            babel({
              presets: ['@babel/preset-env'],
            }),
            resolve(),
          ],
        },
        'umd'
      )
    )
    .pipe(uglify({ compress: isProd }))
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest(paths.dist.js))
    .pipe(browserSync.stream())

  return js
}

const clean = () => {
  const files = [
    path.join(paths.dist.js, 'core.js'),
    path.join(paths.dist.js, 'core.js.map'),
    path.join(paths.dist.css, 'style.css'),
    path.join(paths.dist.css, 'style.css.map'),
    path.join(paths.dist.root, '*.html'),
  ]

  return del(files)
}

const selectedClean = files => {
  return del(files)
}

const watchFiles = () => {
  browserSync.init({
    server: {
      baseDir: './dist',
      index: 'index.html',
      injectChanges: false,
    },
    open: false,
    ghostMode: false,
  })

  watch('./dist/assets/js/common.js', gulp.series(reload))

  watch(
    './src/js/**/*',
    gulp.series(
      selectedClean.bind(this, [
        path.join(paths.dist.js, 'core.js'),
        path.join(paths.dist.js, 'core.js.map'),
      ]),
      js
    )
  )

  watch(
    [
      './src/css/**/*',
      './src/scss/**/*',
      './tailwind.config.js',
      './.stylelintrc.json',
    ],
    gulp.series(
      selectedClean.bind(this, [
        path.join(paths.dist.css, 'style.css'),
        path.join(paths.dist.css, 'style.css.map'),
      ]),
      styles
    )
  )

  watch(
    ['./src/templates/**/*', './src/data/**/*'],
    gulp.series(
      selectedClean.bind(this, [path.join(paths.dist.root, '*.html')]),
      templating
    )
  )
}

const liveReload = () => {
  watch(
    ['./dist/**/.html', './dist/assets/js/*.js', './dist/assets/images/*'],
    gulp.series(reload)
  )
}

const baseTask = gulp.series(clean, gulp.parallel(styles, js, templating))

const dev = gulp.series(baseTask, watchFiles, liveReload)

const build = gulp.series(baseTask)

exports.dev = dev
exports.build = build
