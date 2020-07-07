module.exports = {
  purge: false,
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',

      black: '#000',
      white: '#fff',

      gray: {
        100: '#f0f3ff', //custom
        200: '#d6d6d9',
        // 300: '#e2e8f0',
        // 400: '#cbd5e0',
        500: '#a0aec0',
        // 600: '#718096',
        700: '#4a5568',
        // 800: '#2d3748',
        900: '#282c39',
      },
      red: {
        // 100: '#fff5f5',
        // 200: '#fed7d7',
        // 300: '#feb2b2',
        400: '#ec5247', // custom
        500: '#f56565',
        // 600: '#e53e3e',
        // 700: '#c53030',
        // 800: '#9b2c2c',
        // 900: '#742a2a',
      },
      // orange: {
      //   100: '#fffaf0',
      //   200: '#feebc8',
      //   300: '#fbd38d',
      //   400: '#f6ad55',
      //   500: '#ed8936',
      //   600: '#dd6b20',
      //   700: '#c05621',
      //   800: '#9c4221',
      //   900: '#7b341e',
      // },
      // yellow: {
      //   100: '#fffff0',
      //   200: '#fefcbf',
      //   300: '#faf089',
      //   400: '#f6e05e',
      //   500: '#ecc94b',
      //   600: '#d69e2e',
      //   700: '#b7791f',
      //   800: '#975a16',
      //   900: '#744210',
      // },
      // green: {
      //   100: '#f0fff4',
      //   200: '#c6f6d5',
      //   300: '#9ae6b4',
      //   400: '#68d391',
      //   500: '#48bb78',
      //   600: '#38a169',
      //   700: '#2f855a',
      //   800: '#276749',
      //   900: '#22543d',
      // },
      // teal: {
      //   100: '#e6fffa',
      //   200: '#b2f5ea',
      //   300: '#81e6d9',
      //   400: '#4fd1c5',
      //   500: '#38b2ac',
      //   600: '#319795',
      //   700: '#2c7a7b',
      //   800: '#285e61',
      //   900: '#234e52',
      // },
      blue: {
        100: '#f7f9ff', //custom
        // 200: '#bee3f8',
        300: '#43c0ff', //custom
        400: '#63b3ed',
        // 500: '#4299e1',
        600: '#343846', //custom
        700: '#324456', //custom
        800: '#363a47', //custom
        900: '#303441', // custom
      },
      // indigo: {
      //   100: '#ebf4ff',
      //   200: '#c3dafe',
      //   300: '#a3bffa',
      //   400: '#7f9cf5',
      //   500: '#667eea',
      //   600: '#5a67d8',
      //   700: '#4c51bf',
      //   800: '#434190',
      //   900: '#3c366b',
      // },
      purple: {
        // 100: '#faf5ff',
        200: '#6a8eff', // custom
        300: '#507bff', // custom
        // 400: '#b794f4',
        // 500: '#9f7aea',
        // 600: '#805ad5',
        // 700: '#6b46c1',
        // 800: '#553c9a',
        // 900: '#44337a',
      },
      // pink: {
      //   100: '#fff5f7',
      //   200: '#fed7e2',
      //   300: '#fbb6ce',
      //   400: '#f687b3',
      //   500: '#ed64a6',
      //   600: '#d53f8c',
      //   700: '#b83280',
      //   800: '#97266d',
      //   900: '#702459',
      // },
    },
    spacing: {
      px: '1px',
      '0': '0',
      '1': '0.25rem',
      '2': '0.5rem',
      '3': '0.75rem',
      '4': '1rem',
      '5': '1.25rem',
      '6': '1.5rem',
      '7': '1.75rem',
      '8': '2rem',
      '10': '2.5rem',
      '12': '3rem',
      '16': '4rem',
      '20': '5rem',
      '24': '6rem',
      '26': '6.75rem',
      '30': '7.5rem',
      '32': '8rem',
      '36': '9.375rem',
      '40': '10rem',
      '48': '12rem',
      '52': '11rem',
      '56': '14rem',
      '64': '16rem',
    },
    fontFamily: {
      sans: [
        'IBM Plex Sans',
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        '"Noto Sans"',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
        '"Noto Color Emoji"',
      ],
      serif: [
        'IBM Plex Serif',
        'Cambria',
        '"Times New Roman"',
        'Times',
        'serif',
      ],
      // mono: [
      //   'Menlo',
      //   'Monaco',
      //   'Consolas',
      //   '"Liberation Mono"',
      //   '"Courier New"',
      //   'monospace',
      // ],
    },
    fontSize: {
      xxs: '0.6875rem', // 11px
      xs: '0.75rem', // 12px
      tiny: '0.8125rem', // 13px
      sm: '0.875rem', // 14px
      base: '0.9375rem', // 15px
      md: '1.0625rem', // 17px
      lg: '1.125rem', // 18px
      xl: '1.25rem', // 20px
      '1-5xl': '1.375rem', // 22px,
      '2xl': '1.5rem', // 24px
      '3xl': '1.75rem', // 28px
      '3-5xl': '1.875rem', // 30px
      '4xl': '2.25rem', // 36px
      '4-5xl': '2.8125rem', // 45px
      '5xl': '3rem', // 48px
      '6xl': '3.75rem', // 60px
    },
    fontWeight: {
      // hairline: '100',
      thin: '200',
      light: '300',
      regular: '400',
      medium: '500',
      // semibold: '600',
      bold: '700',
      // extrabold: '800',
      // black: '900',
    },
    inset: {
      '0': 0,
      auto: 'auto',
      '1': '1rem',
      '2-5': '2.666rem',
      '3': '3rem',
      '50': '50%',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      snug: '1.47',
      // normal: '1.5',
      relaxed: '1.875',
      loose: '2',
      // '3': '.75rem',
      // '4': '1rem',
      // '5': '1.25rem',
      // '6': '1.5rem',
      // '7': '1.75rem',
      // '8': '2rem',
      // '9': '2.25rem',
      // '10': '2.5rem',
    },
    borderWidth: {
      default: '1px',
      sm: '2px',
    },
    borderRadius: {
      sm: '0.125rem',
      // default: '0.25rem',
      md: '0.375rem',
      lg: '0.6rem',
      full: '9999px',
    },
    opacity: {
      '0': '0',
      '10': '0.1',
      '20': '0.2',
      '25': '0.25',
      '50': '0.5',
    },
    fill: {
      current: 'currentColor',
    },
    fill: theme => ({
      current: 'currentColor',
      'blue-300': theme('colors.blue.300'),
      'blue-900': theme('colors.blue.900'),
    }),
    transitionDuration: {
      // '75': '75ms',
      // '100': '100ms',
      // '150': '150ms',
      // '200': '200ms',
      '300': '300ms',
      // '500': '500ms',
      // '700': '700ms',
      // '1000': '1000ms',
    },
  },
  variants: {
    backgroundColor: ['hover'],
    borderColor: ['hover'],
    borderRadius: [],
    borderStyle: [],
    borderWidth: [],
    boxShadow: ['hover', 'focus'],
    cursor: [],
    display: ['responsive', 'group-hover'],
    fill: [],
    flexGrow: [],
    flexWrap: [],
    inset: ['responsive'],
    letterSpacing: [],
    lineHeight: ['responsive'],
    objectFit: [],
    outline: ['focus'],
    overflow: [],
    pointerEvents: [],
    placeholderColor: [],
    placeholderOpacity: [],
    resize: [],
    rotate: ['responsive', 'hover', 'group-hover'],
    scale: ['hover', 'group-hover'],
    stroke: [],
    strokeWidth: [],
    tableLayout: [],
    textColor: ['hover', 'group-hover'],
    translate: ['responsive', 'hover', 'group-hover'],
    transitionTimingFunction: [],
    textDecoration: ['hover'],
    textTransform: [],
    userSelect: [],
    verticalAlign: [],
    visibility: [],
    whitespace: [],
    wordBreak: [],
    zIndex: [],
    transform: [],
    scale: ['hover', 'focus', 'group-hover'],
    translate: ['hover', 'focus', 'group-hover'],
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        '.container': {
          width: '100%',
          marginLeft: 'auto',
          marginRight: 'auto',
          paddingLeft: '15px',
          paddingRight: '15px',
          '@screen sm': {
            maxWidth: '100%',
          },
          '@screen md': {
            maxWidth: '100%',
          },
          '@screen lg': {
            maxWidth: '1024px',
          },
          '@screen xl': {
            maxWidth: '1200px',
          },
        },
      })
    },
    function ({ addUtilities, theme, config }) {
      const themeColors = theme('colors')
      const individualBorderColors = Object.keys(themeColors).map(
        colorName => ({
          [`.border-b-${colorName}`]: {
            borderBottomColor: themeColors[colorName],
          },
          [`.border-t-${colorName}`]: {
            borderTopColor: themeColors[colorName],
          },
          [`.border-l-${colorName}`]: {
            borderLeftColor: themeColors[colorName],
          },
          [`.border-r-${colorName}`]: {
            borderRightColor: themeColors[colorName],
          },
        })
      )

      addUtilities(individualBorderColors)
    },
  ],
  corePlugins: {
    accessibility: false,
    alignContent: false,
    alignSelf: false,
    appearance: false,
    backgroundAttachment: false,
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    boxSizing: false,
    container: false,
    clear: false,
    divideColor: false,
    divideOpacity: false,
    divideWidth: false,
    float: false,
    flexShrink: false,
    fontSmoothing: false,
    listStylePosition: false,
    maxWidth: false,
    minWidth: false,
    objectPosition: false,
    order: false,
    placeholderOpacity: false,
    skew: false,
    space: false,
    transitionProperty: false,
    transitionDelay: false,
    transformOrigin: false,
  },
}
