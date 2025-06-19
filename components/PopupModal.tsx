import React from 'react';
import { Alert, TouchableOpacity, Text } from 'react-native';

export default function PopupModal() {
  const showMenu = () => {
    Alert.alert('Menu', 'Choose an option', [
      { text: 'Settings', onPress: () => console.log('Settings') },
      { text: 'Help', onPress: () => console.log('Help') },
      { text: 'Logout', onPress: () => console.log('Logout') },
      { text: 'Cancel', style: 'cancel' }
    ]);
  };

  return (
    <TouchableOpacity onPress={showMenu} style={{ marginRight: 15 }}>
      <Text style={{ fontSize: 18 }}>•••</Text>
    </TouchableOpacity>
  );
}
