import React, { useState } from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { useRouter } from 'expo-router';

export default function Login() {
  const router = useRouter();
  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');

  const entrar = () => {
    if (usuario === 'admin' && senha === '123') {
      router.replace('/dashboard');
    } else {
      Alert.alert("Erro", "Use: admin | Senha: 123");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.logo}>RECANTO<Text style={{color: '#00D1B2'}}>NET</Text></Text>
      
      <TextInput 
        style={styles.input} 
        placeholder="Usuário" 
        onChangeText={setUsuario}
        placeholderTextColor="#666"
      />
      
      <TextInput 
        style={styles.input} 
        placeholder="Senha" 
        secureTextEntry 
        onChangeText={setSenha}
        placeholderTextColor="#666"
      />
      
      <TouchableOpacity style={styles.button} onPress={entrar}>
        <Text style={styles.buttonText}>ENTRAR</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#0D1B2A', justifyContent: 'center', alignItems: 'center', padding: 20 },
  logo: { fontSize: 32, fontWeight: 'bold', color: '#FFF', marginBottom: 40 },
  input: { width: '100%', backgroundColor: '#FFF', padding: 15, borderRadius: 10, marginBottom: 15 },
  button: { width: '100%', backgroundColor: '#00D1B2', padding: 15, borderRadius: 10, alignItems: 'center' },
  buttonText: { fontWeight: 'bold', color: '#0D1B2A', fontSize: 16 }
});