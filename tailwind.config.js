/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [],
  theme: {
    extend: {},
    colors: {
      accentBlue: '#23608C',
      onAccentBlue: '#FFFFFF',
      accentBlueContainer: '#BFE4FF',
      onAccentBlueContainer: '#093859',

      accentPurple: '#69468C',
      onAccentPurple: '#FFFFFF',
      accentPurpleContainer: '#E7DBF3',
      onAccentPurpleContainer: '#32174D',

      accentGreen: '#398080',
      onAccentGreen: '#FFFFFF',
      accentGreenContainer: '#CEF2EC',
      onAccentGreenContainer: '#124D59',

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

      error: '#BA1A1A',
      onError: '#1B1C1D',
      onErrorSubdued: '#FFDAD6',
      onErrorBorder: '#410002',
    },
    fontFamily: {
      sans: [
        "Inter, sans-serif",
      ],
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem',
      '7xl': '4.5rem',

      // DEFAULT SIZES
      // xs: '0.75rem',
      // sm: '0.875rem',
      // base: '1rem',
      // lg: '1.125rem',
      // xl: '1.25rem',
      // '2xl': '1.5rem',
      // '3xl': '1.875rem',
      // '4xl': '2.25rem',
      // '5xl': '3rem',
      // '6xl': '3.75rem',
      // '7xl': '4.5rem',
    },
    fontWeight: {
      normal:'400',
      medium:'450',
      semibold:'550',
    }
  },
  plugins: [],
}

