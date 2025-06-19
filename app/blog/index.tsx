import React from 'react';
import { Button, StyleSheet } from 'react-native';
import { Link, useRouter } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';

export default function BlogScreen() {
  const router = useRouter();

  return (
    <ThemedView style={styles.mainContainer}>
      <ThemedText style={{ fontSize: 18 }}>Blog Screen</ThemedText>
      <Button onPress={() => router.push('/blog/1')} title="Go To Blog 1" />
      <Button onPress={() => router.push('/blog/2')} title="Go To Blog 2" />
      <Button onPress={() => router.push('/blog/3?author=snckm')} title="Go To Blog 3" />
      <Link href={{ pathname: 'blog/4', params: { author: 'snckm' } }}>
        <ThemedText style={{ fontSize: 18 }}>Go to blog 4</ThemedText>
      </Link>
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
