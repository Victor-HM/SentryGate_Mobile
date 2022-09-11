import { extendTheme } from "native-base";

export const THEME = extendTheme({
 colors: {
  purple: {
   500: '#5c0ccf',
   600: '#210d41',
   700: '#1d0b3b',
   800: '#13032b',
  },
  orange: {
   500: '#f9943b'
  }
  
 },

 fontsConfig: {
  300: {
   normal: 'Rubik_300Light',
  },
  400: {
   normal: 'Rubik_400Regular',
  },
  500: {
   normal: 'Rubik_500Medium',
  },
  700: {
   normal: 'Rubik_700Bold'
  },

  fonts: {
   heading: 'Rubik',
   body: 'Rubik',
   mono: 'Rubik'
  }
  
 },
 components: {
  Heading: {
   baseStyle: () => {
    return {
     _dark: { color: 'black' },
     _light: { color: 'white' }
    }
   }
  },
  Text: {
   baseStyle: () => {
    return {
     _dark: { color: 'black' },
     _light: { color: 'white' }
    }
   }
  },
  Input: {
   baseStyle: () => {
    return {
     _dark: { backgroundColor: '#e9e9e9', color: 'black' },
     _light: { backgroundColor: 'purple.800', color: 'white' }
    }
   }
  }
 }

})