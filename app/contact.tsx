import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function ContactScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText style={{ fontSize: 18 }}>Contact Page</ThemedText>
      <Button onPress={() => router.back()} title="Go Back" />
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
