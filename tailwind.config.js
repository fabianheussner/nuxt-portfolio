/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      background: '#FFFFFF',
      onBackground: '#1B1C1D',
      onBackgroundSubdued: '#585F66',
      onBackgroundBorder: '#D2D2D7',
    
      backgroundVariant: '#1B1C1D',
      onBackgroundVariant: '#F5F5F7',
      onBackgroundVariantSubdued: '#C8C8CD',
      onBackgroundVariantBorder: '#585F66',

      surface: '#F5F5F7',
      onSurface: '#1B1C1D',
      onSurfaceSubdued: '#585F66',
      onSurfaceBorder: '#D2D2D7',

      surfaceVariant: '#E1E2E6',
      onSurfaceVariant: '#1B1C1D',
      onSurfaceVariantSubdued: '#585F66',
      onSurfaceVariantBorder: '#D2D2D7',

      accentBlue: '#23608C',
      onAccentBlue: '#FFFFFF',
      accentBlueContainer: '#BFE4FF',
      onAccentBlueContainer: '#093859',

      warning: '#FBBF24',
      onWarning: '#1B1C1D',
      warningContainer: '#FEF3C7',
      onWarningContainer: '#B45309',

      error: '#BA1A1A',
      onError: '#FFFFFF',
      errorContainer: '#FFDAD6',
      onErrorContainer: '#410002',
    },
    fontFamily: {
      sans: [
        "Inter, sans-serif",
      ],
    },
    fontSize: {
      // xs: '0.75rem',
      // sm: '0.875rem',
      // base: '1rem',
      // lg: '1.25rem',
      // xl: '1.25rem',
      // '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '3.75rem',
      // '7xl': '6.0rem',

      // DEFAULT SIZES
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.25rem',
      xl: '1.375rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',
    },
    fontWeight: {
      normal:'400',
      medium:'500',
    },
  },
  plugins: [],
}

