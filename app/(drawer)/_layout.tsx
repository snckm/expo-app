import { Drawer } from 'expo-router/drawer';
import CustomDrawerContent from './CustomDrawerContent';
import { useThemeColor } from '@/hooks/useThemeColor';

export default function DrawerLayout() {
  const txtColor = useThemeColor({}, 'text'); // Colors[theme].text;
  const thinColor = useThemeColor({}, 'thin'); // Colors[theme].text;
  const overlayColor = useThemeColor({}, 'overlay'); // Colors[theme].text;

  return (
    <Drawer
      screenOptions={{
        headerShown: false,
        headerTintColor: thinColor,
        drawerActiveTintColor: thinColor,
        drawerInactiveTintColor: overlayColor
      }}
      drawerContent={(props) => <CustomDrawerContent {...props} />}
    >
      <Drawer.Screen name="favourites" options={{ headerShown: true }} />
      <Drawer.Screen name="history" options={{ headerShown: true }} />
      <Drawer.Screen name="settings" options={{ headerShown: true }} />
    </Drawer>
  );
}
