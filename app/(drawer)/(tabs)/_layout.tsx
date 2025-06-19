import React from 'react';
import { View, Text, Button, Platform } from 'react-native';
import { Tabs, router } from 'expo-router';
import { Feather, AntDesign } from '@expo/vector-icons';
import { DrawerToggleButton } from '@react-navigation/drawer';

import { HapticTab } from '@/components/HapticTab';
import { IconSymbol } from '@/components/ui/IconSymbol';
import TabBarBackground from '@/components/ui/TabBarBackground';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import { useThemeColor } from '@/hooks/useThemeColor';

import PopupModal from '@/components/PopupModal';
import SideMenuModal from '@/components/SideMenuModal';
import ItemsMenuButton from '@/components/ItemsMenuButton';

export default function DrawerTabsLayout() {
  const colorScheme = useColorScheme();
  const txtColor = useThemeColor({}, 'text'); // Colors[theme].text;
  const thinColor = useThemeColor({}, 'thin'); // Colors[theme].text;

  return (
    <Tabs
      screenOptions={{
        headerShown: true,
        tabBarButton: HapticTab,
        tabBarActiveTintColor: thinColor,
        tabBarBackground: TabBarBackground,
        tabBarStyle: Platform.select({ ios: { position: 'absolute' }, default: {} }),
        headerLeft: () => <DrawerToggleButton tintColor={txtColor} />,
        headerRight: () => <ItemsMenuButton onSelect={(value) => console.log('Selected:', value)} />
      }}
    >
      <Tabs.Screen
        name="feed"
        options={{
          tabBarIcon: ({ color }) => <Feather name="list" size={24} color={color} />,
          tabBarLabel: 'Feed',
          headerTitle: 'Feed',
          headerRight: () => <Button onPress={() => router.push('feed/new')} title="Add" />
        }}
      />
      <Tabs.Screen
        name="profile"
        options={{
          tabBarIcon: ({ color }) => <AntDesign name="user" size={24} color={color} />,
          tabBarLabel: 'Profile',
          headerTitle: 'Profile'
        }}
      />
    </Tabs>
  );
}
