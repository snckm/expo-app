import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { useLocalSearchParams, router, Stack } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function Page() {
  const { id, author } = useLocalSearchParams();

  return (
    <>
      <Stack.Screen options={{ headerTitle: `Article ${id}` }} />

      <ThemedView style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ThemedText style={{ fontSize: 18 }}>Blog Post Details {id}</ThemedText>
        <ThemedText style={{ fontSize: 18 }}>Written by {author ? author : 'Unknown'}</ThemedText>
        <Button onPress={() => router.back()} title="Go Back" />
      </ThemedView>
    </>
  );
}
