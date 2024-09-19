import { useMaterial3Theme } from '@pchmn/expo-material3-theme';
import { useMemo } from 'react';
import { useColorScheme, View } from 'react-native';
import {  MD3DarkTheme, MD3LightTheme, Provider as PaperProvider, Text } from 'react-native-paper';
import HomeScreen from './screens/homescreen';

export default function App() {
  const colorScheme = useColorScheme();
  const { theme } = useMaterial3Theme();

  const paperTheme = useMemo(
    () =>
      colorScheme === 'dark' ? { ...MD3DarkTheme, colors: theme.dark } : { ...MD3LightTheme, colors: theme.light },
    [colorScheme, theme]
  );

  return (
    <PaperProvider theme={paperTheme}>
      <View>
        <Text>
          Hello
        </Text>
      </View>
    </PaperProvider>
  );
}