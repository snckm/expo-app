import React, { useEffect } from 'react';
import { StyleSheet, Image, Button } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';
import { Feather, AntDesign, MaterialIcons, Ionicons } from '@expo/vector-icons';
import { Link, router, usePathname } from 'expo-router';

import { ThemedView } from '@/components/ThemedView';
import { ThemedText } from '@/components/ThemedText';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function CustomDrawerContent(props) {
  const pathname = usePathname();
  const txtColor = useThemeColor({}, 'text'); // Colors[theme].text;
  const txtSelected = useThemeColor({}, 'tint'); // Colors[theme].icon;
  const iconColor = useThemeColor({}, 'icon'); // Colors[theme].icon;
  const iconSelected = useThemeColor({}, 'tabIconSelected'); // Colors[theme].icon;
  const overlayColor = useThemeColor({}, 'overlay'); // Colors[theme].overlay;
  const backgroundColor = useThemeColor({}, 'background'); // Colors[theme].background;
  const profilePicture = 'https://avatars.githubusercontent.com/u/185550913?s=400&u=9c4b6cdb03998d6264cc4c9ec8b1d89ec9029be8&v=4';

  useEffect(() => {
    console.log(pathname);
  }, [pathname]);

  return (
    <DrawerContentScrollView {...props}>
      <ThemedView style={styles.userInfoWrapper}>
        <Image source={{ uri: profilePicture }} width={80} height={80} style={styles.userImg} />
        <ThemedView style={styles.userDetailsWrapper}>
          <ThemedText style={styles.userName}>SN Ckm</ThemedText>
          <ThemedText style={styles.userEmail}>snckm@gmail.com</ThemedText>
        </ThemedView>
      </ThemedView>
      <DrawerItem
        icon={({ color, size }) => <Feather name="home" size={size} color={pathname == '/feed' ? iconSelected : iconColor} />}
        label={'Feed'}
        labelStyle={[styles.navItemLabel, { color: pathname == '/feed' ? txtSelected : txtColor }]}
        style={{ backgroundColor: pathname == '/feed' ? overlayColor : 'transparent' }}
        onPress={() => router.push('/(drawer)/(tabs)/feed')}
      />
      <DrawerItem
        icon={({ color, size }) => <AntDesign name="user" size={size} color={pathname == '/profile' ? iconSelected : iconColor} />}
        label={'Profile'}
        labelStyle={[styles.navItemLabel, { color: pathname == '/profile' ? txtSelected : txtColor }]}
        style={{ backgroundColor: pathname == '/profile' ? overlayColor : 'transparent' }}
        onPress={() => router.push('/profile')}
      />
      <DrawerItem
        icon={({ color, size }) => <MaterialIcons name="favorite-outline" size={size} color={pathname == '/favourites' ? iconSelected : iconColor} />}
        label={'Favourites'}
        labelStyle={[styles.navItemLabel, { color: pathname == '/favourites' ? txtSelected : txtColor }]}
        style={{ backgroundColor: pathname == '/favourites' ? overlayColor : 'transparent' }}
        onPress={() => router.push('/favourites')}
      />
      <DrawerItem
        icon={({ color, size }) => <MaterialIcons name="history" size={size} color={pathname == '/history' ? iconSelected : iconColor} />}
        label={'History'}
        labelStyle={[styles.navItemLabel, { color: pathname == '/history' ? txtSelected : txtColor }]}
        style={{ backgroundColor: pathname == '/history' ? overlayColor : 'transparent' }}
        onPress={() => router.push('/history')}
      />
      <DrawerItem
        icon={({ color, size }) => <Ionicons name="settings-outline" size={size} color={pathname == '/settings' ? iconSelected : iconColor} />}
        label={'Settings'}
        labelStyle={[styles.navItemLabel, { color: pathname == '/settings' ? txtSelected : txtColor }]}
        style={{ backgroundColor: pathname == '/settings' ? overlayColor : 'transparent' }}
        onPress={() => router.push('/settings')}
      />
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  navItemLabel: {
    marginLeft: 20,
    fontSize: 18
  },
  userInfoWrapper: {
    flexDirection: 'row',
    paddingHorizontal: 10,
    paddingVertical: 20,
    borderBottomColor: '#ccc',
    borderBottomWidth: 1,
    marginBottom: 10,
    backgroundColor: 'transparent'
  },
  userImg: {
    borderRadius: 50
  },
  userDetailsWrapper: {
    marginTop: 25,
    marginLeft: 10,
    backgroundColor: 'transparent'
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  userEmail: {
    fontSize: 16,
    fontStyle: 'italic',
    textDecorationLine: 'underline'
  }
});
