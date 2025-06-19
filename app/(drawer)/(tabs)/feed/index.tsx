import React, { useEffect, useState } from 'react';
import { FlatList, ActivityIndicator, Platform, StyleSheet } from 'react-native';
import { useThemeColor } from '@/hooks/useThemeColor';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

interface FeedItem {
  id: string;
  title: string;
  body: string;
}

export default function FeedScreen() {
  const [data, setData] = useState<FeedItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const backgroundColor = useThemeColor({}, 'background');
  const textColor = useThemeColor({}, 'text');
  const separatorColor = useThemeColor({}, 'separator');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=15');
        const json = await response.json();
        setData(json);
      } catch (err) {
        setError('Failed to load feed');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const renderSeparator = () => <ThemedView style={{ height: 1, backgroundColor: separatorColor, marginVertical: 8 }} />;

  if (loading) {
    return (
      <ThemedView style={[styles.activityIndicator, { backgroundColor }]}>
        <ActivityIndicator size="large" color={textColor} />
      </ThemedView>
    );
  }

  if (error) {
    return (
      <ThemedView style={[styles.errorContainer, { backgroundColor }]}>
        <ThemedText type="subtitle" style={styles.errorText}>
          {error}
        </ThemedText>
      </ThemedView>
    );
  }

  return (
    <FlatList
      style={[styles.container, { backgroundColor }]}
      data={data}
      keyExtractor={(item) => item.id.toString()}
      renderItem={({ item }) => (
        <ThemedView style={styles.item}>
          <ThemedText style={[styles.title, { color: textColor }]}>{item.title}</ThemedText>
          <ThemedText style={[styles.body, { color: textColor }]}>{item.body}</ThemedText>
        </ThemedView>
      )}
    />
  );
}

const styles = StyleSheet.create({
  activityIndicator: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  errorContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  container: {
    flex: 1,
    padding: 20
  },
  item: {
    marginBottom: 20,
    borderBottomWidth: 1,
    borderColor: '#ccc',
    paddingBottom: 10
  },
  title: {
    fontWeight: 'bold',
    fontSize: 16,
    marginBottom: 4
  },
  body: {
    fontSize: 14
  },
  errorText: {
    textAlign: 'center'
  }
});
