import { Tabs } from 'expo-router';
import { Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import tokens from '@/theme/tokens';
import { Text } from '@components';

export const getLabel = ({ focused, label }: any) => {
  const color = focused ? 'semanticBgPrimary' : 'semanticFgTextWeak';
  return (
    <Text size="xs" color={color}>
      {label}
    </Text>
  );
};

export const getIcon = ({ focused, iconName }: any) => {
  const color = focused
    ? tokens.color.semanticBgPrimary.val
    : tokens.color.semanticFgTextWeak.val;
  return <Ionicons name={iconName} size={24} color={color} />;
};

const tabs = [
  { name: 'home', label: 'Home', iconName: 'home' },
  {
    name: 'categories',
    label: 'All Categories',
    iconName: 'grid',
  },
  { name: 'sale', label: 'Sale', iconName: 'pricetag' },
  { name: 'wishlist', label: 'Wishlist', iconName: 'heart' },
  { name: 'account', label: 'My Account', iconName: 'person' },
];

const TabsLayout = () => {
  return (
    <Tabs screenOptions={{ headerShown: false }}>
      {tabs.map(({ name, label, iconName }) => (
        <Tabs.Screen
          key={name}
          name={name}
          options={{
            // href: `/${name}`,
            title: label,
            tabBarItemStyle: {
              paddingTop: Platform.OS === 'android' ? 14 : 15,
              paddingBottom: Platform.OS === 'android' ? 16 : 5,
            },
            tabBarIcon: ({ focused }) => getIcon({ focused, iconName }),
            tabBarLabel: ({ focused }) => getLabel({ focused, label }),
            tabBarActiveTintColor: tokens.color.semanticFgText.val,
            tabBarInactiveTintColor: tokens.color.semanticFgTextDisabled.val,
            tabBarStyle: {
              backgroundColor: tokens.color.semanticBgWhite.val,
              borderTopWidth: 0,
              height: Platform.OS === 'android' ? 76 : 100,
            },
          }}
        />
      ))}
    </Tabs>
  );
};

export default TabsLayout;
