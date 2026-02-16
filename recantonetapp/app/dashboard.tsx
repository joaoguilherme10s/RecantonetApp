import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, SafeAreaView, ScrollView, StatusBar, Alert } from 'react-native';
import { router } from 'expo-router';

export default function Dashboard() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar barStyle="light-content" />
      <View style={styles.header}>
        <View>
          <Text style={styles.userName}>Olá, João Silva</Text>
          <Text style={styles.userPlan}>Plano: Recanto Fibra 500mb</Text>
        </View>
        <TouchableOpacity style={styles.btnSair} onPress={() => router.replace('/')}>
          <Text style={styles.btnSairText}>Sair</Text>
        </TouchableOpacity>
      </View>

      <ScrollView style={{padding: 20}}>
        <View style={styles.cardFatura}>
          <Text style={{color: '#777'}}>Fatura em aberto</Text>
          <Text style={styles.valorFatura}>R$ 99,90</Text>
          <Text style={styles.vencimentoFatura}>Vence em: 10/03/2026</Text>
          <TouchableOpacity style={styles.btnPix} onPress={() => Alert.alert("Copiado", "Código PIX copiado!")}>
            <Text style={{color: '#00D1B2', fontWeight: 'bold'}}>COPIAR PIX</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.tituloSecao}>Serviços Disponíveis</Text>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.box}><Text style={styles.icon}>🚀</Text><Text style={styles.textS}>Velocidade</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box}><Text style={styles.icon}>📄</Text><Text style={styles.textS}>2ª Via</Text></TouchableOpacity>
        </View>
        <View style={styles.grid}>
          <TouchableOpacity style={styles.box}><Text style={styles.icon}>🛠️</Text><Text style={styles.textS}>Suporte</Text></TouchableOpacity>
          <TouchableOpacity style={styles.box}><Text style={styles.icon}>📶</Text><Text style={styles.textS}>Wi-Fi</Text></TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#F4F7FA' },
  header: { backgroundColor: '#0D1B2A', padding: 25, paddingTop: 50, flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' },
  userName: { color: '#FFF', fontSize: 20, fontWeight: 'bold' },
  userPlan: { color: '#00D1B2', fontSize: 13 },
  btnSair: { padding: 8, borderColor: '#FF4B4B', borderRadius: 8, borderWidth: 1 },
  btnSairText: { color: '#FF4B4B', fontWeight: 'bold', fontSize: 12 },
  cardFatura: { backgroundColor: '#FFF', padding: 25, borderRadius: 20, elevation: 4, marginBottom: 25 },
  valorFatura: { fontSize: 32, fontWeight: 'bold', color: '#333', marginVertical: 8 },
  vencimentoFatura: { color: '#EF4444', fontWeight: '600', marginBottom: 20 },
  btnPix: { backgroundColor: '#0D1B2A', padding: 15, borderRadius: 12, alignItems: 'center' },
  tituloSecao: { fontSize: 18, fontWeight: 'bold', color: '#333', marginBottom: 15 },
  grid: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 15 },
  box: { backgroundColor: '#FFF', width: '48%', padding: 20, borderRadius: 18, alignItems: 'center', elevation: 2 },
  icon: { fontSize: 30, marginBottom: 10 },
  textS: { fontSize: 12, fontWeight: 'bold', color: '#444' }
});
