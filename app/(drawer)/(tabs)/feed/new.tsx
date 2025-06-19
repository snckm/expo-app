import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

import { router } from 'expo-router';

export default function NewFeedScreen() {
  return (
    <ThemedView style={styles.container}>
      <ThemedText style={{ fontSize: 18 }}>Add New Feed</ThemedText>
      <Button onPress={() => router.back()} title="Go Back" />
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});
