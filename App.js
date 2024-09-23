import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useMemo } from 'react';
import { useColorScheme, View } from 'react-native';
import { MD3DarkTheme, MD3LightTheme, Provider as PaperProvider, Text } from 'react-native-paper';
import { NavigationContainer } from '@react-navigation/native';
import MyComponent from './components/Navbar';

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );

  return (
    <NavigationContainer>
      <PaperProvider theme={paperTheme}>
        <MyComponent/>
      </PaperProvider>
    </NavigationContainer>
  );
}