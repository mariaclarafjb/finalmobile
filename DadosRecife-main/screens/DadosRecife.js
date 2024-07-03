import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TextInput, Button, TouchableOpacity } from 'react-native';
import { AntDesign } from '@expo/vector-icons'; // Importa o ícone de seta da biblioteca Expo Icons

const DadosRecife = ({ navigation }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState('');

  const fetchData = async () => {
    const url = 'http://dados.recife.pe.gov.br/api/3/action/datastore_search';
    const params = {
      resource_id: '49657ff7-9860-4b3b-9840-c4239c34f3d2',
      limit: 100,
      q: searchTerm 
    };

    try {
      const response = await fetch(`${url}?${new URLSearchParams(params)}`);
      console.log('Response:', response); 
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const json = await response.json();
      console.log('JSON:', json); 
      if (json.result && json.result.records) {
        setData(json.result.records);
        if (json.result.records.length === 0) {
          setError('Nenhum resultado encontrado.');
        } else {
          setError(null);
        }
      } else {
        setError('Nenhum resultado encontrado.');
      }
    } catch (error) {
      setError(`Erro na requisição: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = () => {
    fetchData();
  };

  useEffect(() => {
    fetchData();
  }, []);

  const renderItem = ({ item }) => (
    <View style={styles.item}>
      <Text style={styles.title}>ID: {item._id}</Text>
      <Text>Código da Atividade: {item.codigo_atividade}</Text>
      <Text>Nome da Atividade: {item.nome_atividade}</Text>
      <Text>Código da Área: {item.codigo_area}</Text>
      <Text>Nome da Área: {item.nome_area}</Text>
      <Text>Código da Subárea: {item.codigo_subarea}</Text>
      <Text>Nome da Subárea: {item.nome_subarea}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')} style={styles.backButtonContainer}>
          <View style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        </TouchableOpacity>
      </View>
      
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.input}
          placeholder="Digite o termo de busca"
          value={searchTerm}
          onChangeText={text => setSearchTerm(text)}
        />
        <Button title="Buscar" onPress={handleSearch} />
      </View>

      {loading ? (
        <ActivityIndicator size="large" color="#0000ff" />
      ) : error ? (
        <Text>{error}</Text>
      ) : (
        <FlatList
          data={data}
          keyExtractor={(item) => item._id.toString()}
          renderItem={renderItem}
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 20,
    paddingHorizontal: 10
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
  },
  backButtonContainer: {
    borderRadius: 20,
    backgroundColor: '#c9c9c9',
    padding: 5,
    marginRight: 10,
  },
  backButton: {
    padding: 10,
  },
  title: {
    fontSize: 24,
    marginLeft: 24,
  },
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginRight: 10,
    paddingHorizontal: 10,
  },
  item: {
    backgroundColor: '#c9c9c9',
    padding: 20,
    marginVertical: 8
  },
  title: {
    fontSize: 24
  },
});

export default DadosRecife;
