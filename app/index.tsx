import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Link } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function HomeScreen() {
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText style={{ fontSize: 30 }}>Welcome to our app</ThemedText>
      <Link href={'/about'}>
        <ThemedText style={{ fontSize: 18 }}>Go to About Page</ThemedText>
      </Link>
      <Link href={'/contact'} asChild>
        <Button title="Go to Contact Page" />
      </Link>
      <Link href={'/blog'} asChild>
        <Button title="Go to Blog Page" />
      </Link>
      <Link href={'(default)'} asChild>
        <Button title="Go to Default Tabs" />
      </Link>
      <Link href={'(drawer)/(tabs)/feed'} asChild>
        <Button title="Go to Drawer Tabs" />
      </Link>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
