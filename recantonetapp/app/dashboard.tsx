import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';

export default function Dashboard() {
  const router = useRouter();

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Bem-vindo ao Painel!</Text>
      <Text style={styles.subtitle}>Você está logado na RecantoNet.</Text>
      
      <TouchableOpacity style={styles.logout} onPress={() => router.replace('/')}>
        <Text style={{color: '#FFF'}}>Sair</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F4F4', justifyContent: 'center', alignItems: 'center' },
  title: { fontSize: 24, fontWeight: 'bold', color: '#0D1B2A' },
  subtitle: { fontSize: 16, color: '#666', marginTop: 10 },
  logout: { marginTop: 30, backgroundColor: '#FF4B4B', padding: 10, borderRadius: 5 }
});