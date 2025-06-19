import React from 'react';
import { StyleSheet } from 'react-native';
import { useRouter } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function SettingsScreen() {
  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText>Settings Screen</ThemedText>
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
