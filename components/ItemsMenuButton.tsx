import React, { useState } from 'react';
import { TouchableOpacity, Modal, Pressable, StyleSheet } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons'; // optional, for nicer icons

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

const menuItems = [
  { key: 'about', label: 'About', icon: 'info-outline' },
  { key: 'profile', label: 'Profile', icon: 'person-outline' },
  { key: 'history', label: 'History', icon: 'history' },
  { key: 'favourites', label: 'Favourites', icon: 'favorite-border' },
  { key: 'settings', label: 'Settings', icon: 'settings' }
];

const ItemsMenuButton = ({ onSelect }: { onSelect?: (key: string) => void }) => {
  const [visible, setVisible] = useState(false);
  const [selected, setSelected] = useState<string | null>(null);

  const toggleMenu = () => setVisible((prev) => !prev);

  const handleSelect = (key: string) => {
    setSelected(key);
    setVisible(false);
    onSelect?.(key);
  };

  const iconColor = useThemeColor({}, 'icon'); // Colors[theme].icon;
  const overlayColor = useThemeColor({}, 'overlay'); // Colors[theme].overlay;
  const backgroundColor = useThemeColor({}, 'background'); // Colors[theme].background;

  return (
    <ThemedView style={styles.container}>
      <TouchableOpacity onPress={toggleMenu} style={styles.dotsButton}>
        <ThemedText style={styles.dots}>⋮</ThemedText>
      </TouchableOpacity>

      <Modal
        transparent
        visible={visible}
        animationType="fade"
        animationTiming={0} // fade in duration in ms
        onRequestClose={() => setVisible(false)}
      >
        <Pressable style={styles.overlay} onPress={() => setVisible(false)}>
          <ThemedView style={styles.menu}>
            {menuItems.map((item) => (
              <TouchableOpacity key={item.key} onPress={() => handleSelect(item.key)} style={styles.menuItem}>
                <MaterialIcons name={item.icon as any} size={20} color={iconColor} style={styles.icon} />
                <ThemedText style={styles.menuText}>{item.label}</ThemedText>
              </TouchableOpacity>
            ))}
          </ThemedView>
        </Pressable>
      </Modal>
    </ThemedView>
  );
};

const styles = StyleSheet.create({
  container: {},
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
    width: 200,
    elevation: 5
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 30,
    marginVertical: 2
  },
  icon: {
    marginRight: 12
  },
  menuText: {
    fontSize: 16
  }
});

export default ItemsMenuButton;
