import { Stack, useRouter, useSegments } from 'expo-router'; 
import * as SplashScreen from 'expo-splash-screen';
import { useEffect, useState } from 'react';
import 'react-native-reanimated';
import { ActivityIndicator, View } from 'react-native';
import { onAuthStateChanged, User } from 'firebase/auth';
import { FIREBASE_AUTH } from '@/firebaseConfig';
import 'react-native-reanimated'

export default function RootLayout() {
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState<User | null>(null)
  const router = useRouter()
  const segments = useSegments()

  useEffect(() => {
    onAuthStateChanged(FIREBASE_AUTH, (user) => {
      console.log('user', user);
      setUser(user)
      if (initializing) setInitializing(false)
    })
  }, [])

  useEffect(() => {
    if (initializing) return;

    const inTabs = segments[0] === '(tabs)';

    if (user && !inTabs) { 
      // user is logged in but on login screen
      router.push('/(tabs)/meals')
    } else if (!user && inTabs) {
      // user is not logged in
      router.replace('/')
    }

  }, [user, initializing])

  if (initializing) {
    return (
      <View
        style={{
          alignItems: 'center',
          justifyContent: 'center',
          flex: 1
      }}>
        <ActivityIndicator size="large" />
      </View>
    )
  }

  return (
    <Stack>
      <Stack.Screen name="index" options={{ headerShown: false }}/>
      <Stack.Screen name="(tabs)" options={{ headerShown: false }}/>
    </Stack>
  )
}
