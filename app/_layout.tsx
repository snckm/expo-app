import React from 'react';
import { View, Text, Button } from 'react-native';
import { DarkTheme, DefaultTheme, ThemeProvider } from '@react-navigation/native';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import { useFonts } from 'expo-font';
import { Stack, router } from 'expo-router';
import { StatusBar } from 'expo-status-bar';
import 'react-native-reanimated';

import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function RootLayout() {
  const colorScheme = useColorScheme();
  const txtColor = useThemeColor({}, 'text'); // Colors[theme].text;
  const thinColor = useThemeColor({}, 'thin'); // Colors[theme].text;
  const backgroundColor = useThemeColor({}, 'background'); // Colors[theme].text;

  const [loaded] = useFonts({
    SpaceMono: require('../assets/fonts/SpaceMono-Regular.ttf')
  });

  if (!loaded) {
    // Async font loading only occurs in development.
    return null;
  }

  return (
    <ThemeProvider value={colorScheme === 'dark' ? DarkTheme : DefaultTheme}>
      <GestureHandlerRootView style={{ flex: 1 }}>
        <Stack
          screenOptions={{
            headerStyle: { backgroundColor },
            headerTintColor: thinColor
          }}
        >
          <Stack.Screen
            name="index"
            options={{
              headerTitle: 'Home',
              headerRight: () => <Button onPress={() => router.push('contact')} title="Contact" />
            }}
          />
          <Stack.Screen name="about" options={{ headerTitle: 'About' }} />
          <Stack.Screen name="contact" options={{ headerTitle: 'Contact', presentation: 'modal' }} />
          <Stack.Screen name="blog" options={{ headerTitle: 'All Blog Posts' }} />
          <Stack.Screen name="(drawer)" options={{ headerShown: false }} />
          <Stack.Screen name="(default)" options={{ headerShown: false }} />
          <Stack.Screen name="+not-found" />
        </Stack>
        <StatusBar style="auto" />
      </GestureHandlerRootView>
    </ThemeProvider>
  );
}
