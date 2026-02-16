import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert, SafeAreaView, StatusBar } from 'react-native';
import { router } from 'expo-router';

export default function Login() {
  const [user, setUser] = useState('');
  const [pass, setPass] = useState('');

  const handleLogin = () => {
    if (user.toLowerCase() === 'admin' && pass === '123') {
      router.replace('/dashboard');
    } else {
      Alert.alert("Erro", "Usuário ou senha incorretos.");
    }
  };

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <Text style={styles.logo}>RECANTO<Text style={{color: '#00D1B2'}}>NET</Text></Text>
      <Text style={styles.subtitle}>Central do Assinante</Text>
      <View style={{width: '100%'}}>
        <TextInput style={styles.input} placeholder="Usuário" placeholderTextColor="#999" onChangeText={setUser} />
        <TextInput style={styles.input} placeholder="Senha" placeholderTextColor="#999" secureTextEntry onChangeText={setPass} />
        <TouchableOpacity style={styles.button} onPress={handleLogin}>
          <Text style={styles.buttonText}>ACESSAR MINHA CONTA</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1B2A', justifyContent: 'center', alignItems: 'center', padding: 30 },
  logo: { fontSize: 38, fontWeight: 'bold', color: '#FFF' },
  subtitle: { color: '#00D1B2', marginBottom: 40, fontSize: 16 },
  input: { backgroundColor: '#FFF', padding: 18, borderRadius: 12, marginBottom: 15, fontSize: 16 },
  button: { backgroundColor: '#00D1B2', padding: 18, borderRadius: 12, alignItems: 'center' },
  buttonText: { color: '#0D1B2A', fontWeight: 'bold', fontSize: 15 }
});
