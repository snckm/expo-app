import React, { useState } from 'react';
import { TouchableOpacity, Modal, Pressable, FlatList, StyleSheet } from 'react-native';
import { Feather, MaterialIcons, Ionicons } from '@expo/vector-icons';

import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';

const menuItems = [
  { key: 'new', label: 'New file', icon: <Feather name="file-plus" size={20} color="#00b4ff" /> },
  { key: 'save', label: 'Save', icon: <Feather name="save" size={20} color="#00b4ff" /> },
  { key: 'save_as', label: 'Save as', icon: <Feather name="save" size={20} color="#00b4ff" /> },
  { key: 'files', label: 'Files', icon: <Feather name="folder" size={20} color="#aaa" /> },
  { divider: true },
  { key: 'close', label: 'Close file', icon: <Feather name="x" size={20} color="#00b4ff" /> },
  { key: 'recent', label: 'Open recent', icon: <Feather name="rotate-ccw" size={20} color="#00b4ff" /> },
  { key: 'find', label: 'Find file', icon: <Feather name="search" size={20} color="#00b4ff" /> },
  { divider: true },
  { key: 'settings', label: 'Settings', icon: <Feather name="settings" size={20} color="#00b4ff" /> },
  { key: 'help', label: 'Help', icon: <Feather name="help-circle" size={20} color="#00b4ff" /> },
  { divider: true },
  { key: 'exit', label: 'Exit', icon: <Feather name="log-out" size={20} color="#00b4ff" /> }
];

const SideMenuModal = ({ onSelect }: { onSelect?: (key: string) => void }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleMenu = () => setVisible((prev) => !prev);

  const handleSelect = (key: string) => {
    setSelected(key);
    setVisible(false);
    onSelect?.(key);
  };

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.dotsButton}>
        <ThemedText style={styles.dots}>⋮</ThemedText>
      </TouchableOpacity>

      <Modal transparent animationType="fade" visible={visible} onRequestClose={() => setVisible(false)}>
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <ThemedView style={styles.menu}>
            {menuItems.map((item, index) => {
              if ('divider' in item) {
                return <ThemedView key={`divider-${index}`} style={styles.divider} />;
              }

              return (
                <TouchableOpacity key={item.key} style={styles.menuItem} onPress={() => handleSelect(item.key)}>
                  <ThemedText style={styles.menuText}>{item.label}</ThemedText>
                  <ThemedView style={styles.iconContainer}>{item.icon}</ThemedView>
                </TouchableOpacity>
              );
            })}
          </ThemedView>
        </Pressable>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor
  },
  dotsButton: {
    paddingHorizontal: 16,
    paddingVertical: 8
  },
  dots: {
    fontSize: 24,
    fontWeight: 'bold'
  },
  overlay: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-end',
    paddingTop: 60,
    paddingRight: 10,
    backgroundColor: 'transparent'
  },
  menu: {
    borderRadius: 12,
    paddingVertical: 8,
    width: 250,
    elevation: 5
  },
  menuItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 14,
    paddingHorizontal: 16
  },
  menuText: {
    fontSize: 16
  },
  iconContainer: {
    marginLeft: 12
  },
  divider: {
    height: 1,
    backgroundColor: '#aaa',
    marginVertical: 4,
    marginHorizontal: 12
  }
});

export default SideMenuModal;
