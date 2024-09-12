import { Tabs } from 'expo-router';
import React from 'react';

import { TabBarIcon } from '@/components/navigation/TabBarIcon';
import { Colors } from '@/constants/Colors';
import { useColorScheme } from '@/hooks/useColorScheme';
import PagerView from 'react-native-pager-view';
import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList, Pressable } from 'react-native';

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
        headerShown: false,
      }}>
      <Tabs.Screen
        name="meals"
        options={{
          title: 'Meals',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'cart' : 'cart'} color={color} />
          ),
        }}
        />
        <Tabs.Screen
        name="progress"
        options={{
          title: 'Progress',
          tabBarIcon: ({ color, focused }) => (
            <TabBarIcon name={focused ? 'analytics-outline' : 'analytics-outline'} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
