import { NativeBaseProvider, StatusBar } from 'native-base';
import { View } from 'react-native';
import { Home } from './src/pages/Home';
import { Routes } from './src/Routes';
import { THEME } from './src/theme/theme';

export default function App() {
  return (
    <NativeBaseProvider theme={THEME}>
      <StatusBar 
        backgroundColor={THEME.colors.purple[600]}
        barStyle='light-content'
      />
      <Routes />
    </NativeBaseProvider>
  );
}