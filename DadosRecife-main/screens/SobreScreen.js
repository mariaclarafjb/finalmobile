import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

const Sobremim = ({ navigation }) => (
  <View style={styles.container}>
    <Text style={styles.title}>Sobre Mim</Text>
    <View style={styles.content}>
      <Text style={styles.text}>
        O que sou?{"\n\n"}
        O aplicativo em desenvolvimento tem como objetivo principal obter informações da API fornecida pela plataforma de dados do Recife (dados.recife.pe.gov.br). Ele visa utilizar esses dados para oferecer serviços ou funcionalidades que possam beneficiar os usuários, como visualização de informações relacionadas a diversas áreas, como esporte, lazer, educação, entre outros, disponíveis na plataforma pública de dados do Recife.
      </Text>
    </View>
  
    <TouchableOpacity
      style={[styles.button, { backgroundColor: '#000000' }]}
      onPress={() => navigation.navigate('TelaInicial')}
    >
      <Text style={styles.buttonText}>Voltar para o Início</Text>
    </TouchableOpacity>
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F3EFEE',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
  },
  content: {
    backgroundColor: '#fff',
    borderRadius: 10,
    padding: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
    marginBottom: 20,
  },
  text: {
    fontSize: 16,
    textAlign: 'center',
    color: '#666',
  },
  button: {
    backgroundColor: 'black',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 20,
    width: '80%',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: 16,
    color: 'white',
    textAlign: 'center',
  },
});

export default Sobremim;
