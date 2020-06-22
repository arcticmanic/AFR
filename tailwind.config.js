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
        100: '#f7fafc',
        200: '#edf2f7',
        300: '#e2e8f0',
        400: '#cbd5e0',
        500: '#a0aec0',
        600: '#718096',
        700: '#4a5568',
        800: '#2d3748',
        900: '#1a202c',
      },
      red: {
        100: '#fff5f5',
        200: '#fed7d7',
        300: '#feb2b2',
        400: '#ec5247', // custom
        500: '#f56565',
        600: '#e53e3e',
        700: '#c53030',
        800: '#9b2c2c',
        900: '#742a2a',
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
        100: '#ebf8ff',
        200: '#bee3f8',
        300: '#43c0ff', //custom
        400: '#63b3ed',
        500: '#4299e1',
        600: '#3182ce',
        700: '#324456', //custom
        800: '#2c5282',
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
        100: '#faf5ff',
        200: '#e9d8fd',
        300: '#507bff', // custom
        400: '#b794f4',
        500: '#9f7aea',
        600: '#805ad5',
        700: '#6b46c1',
        800: '#553c9a',
        900: '#44337a',
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
      '32': '8rem',
      '40': '10rem',
      '48': '12rem',
      '56': '14rem',
      '64': '16rem',
    },
    fontFamily: {
      sans: [
        'IBMPlexSans',
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
        'IBMPlexSans Serif',
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
      xs: '0.75rem',
      tiny: '0.8125rem',
      sm: '0.875rem',
      base: '0.9375rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '4rem',
    },
    fontWeight: {
      // hairline: '100',
      // thin: '200',
      light: '300',
      regular: '400',
      medium: '500',
      // semibold: '600',
      bold: '700',
      // extrabold: '800',
      // black: '900',
    },
    lineHeight: {
      none: '1',
      tight: '1.25',
      // snug: '1.375',
      normal: '1.5',
      // relaxed: '1.625',
      // loose: '2',
      // '3': '.75rem',
      // '4': '1rem',
      // '5': '1.25rem',
      // '6': '1.5rem',
      // '7': '1.75rem',
      // '8': '2rem',
      // '9': '2.25rem',
      // '10': '2.5rem',
    },
    fill: {
      current: 'currentColor',
    },
    fill: (theme) => ({
      current: 'currentColor',
      'blue-300': theme('colors.blue.300'),
      'blue-900': theme('colors.blue.900'),
    }),
  },
  variants: {
    accessibility: [],
    backgroundColor: ['hover', 'focus'],
    backgroundOpacity: ['hover', 'focus'],
    backgroundPosition: [],
    backgroundRepeat: [],
    backgroundSize: [],
    borderColor: ['hover', 'focus'],
    borderStyle: [],
    boxShadow: ['hover', 'focus'],
    boxSizing: [],
    cursor: [],
    fill: [],
    lineHeight: ['responsive'],
    overflow: [],
    outline: ['focus'],
    pointerEvents: [],
    placeholderColor: [],
    resize: [],
    rotate: ['hover'],
    scale: ['hover', 'focus'],
    stroke: [],
    translate: ['responsive', 'hover'],
    transitionProperty: [],
    transitionTimingFunction: [],
    textOpacity: ['hover'],
    textDecoration: ['hover'],
    textTransform: [],
    userSelect: [],
    verticalAlign: [],
    visibility: [],
    whitespace: [],
    wordBreak: [],
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
            maxWidth: '640px',
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
        (colorName) => ({
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
    appearance: false,
    backgroundAttachment: false,
    borderOpacity: false,
    borderCollapse: false,
    container: false,
    clear: false,
    divideColor: false,
    divideOpacity: false,
    divideWidth: false,
    float: false,
    // letterSpacing: false,
    listStylePosition: false,
    listStyleType: false,
    objectPosition: false,
    placeholderOpacity: false,
    skew: false,
    transitionDuration: false,
    transitionDelay: false,
    transformOrigin: false,
  },
}
// IBMPlexSans
