import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }}>
      <收获.Screen name="index" />
      <Stack.Screen name="dashboard" />
    </Stack>
  );
}
