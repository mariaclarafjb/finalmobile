import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ScrollView } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { requestForegroundPermissionsAsync, getCurrentPositionAsync } from 'expo-location';
import * as Location from 'expo-location';
import { AntDesign } from '@expo/vector-icons'; // Importa o ícone de seta da biblioteca Expo Icons

const GeolocalizacaoScreen = ({ navigation }) => {
  const [latitude, setLatitude] = useState(null);
  const [longitude, setLongitude] = useState(null);
  const [address, setAddress] = useState(null);
  const [errorMsg, setErrorMsg] = useState(null);

  useEffect(() => {
    getLocationPermission();
  }, []);

  const getLocationPermission = async () => {
    const { status } = await requestForegroundPermissionsAsync();
    if (status !== 'granted') {
      setErrorMsg('Permissão para acesso à localização negada');
      return;
    }
    handleLocation();
  };

  const handleLocation = async () => {
    try {
      const { coords } = await getCurrentPositionAsync({});
      setLatitude(coords.latitude);
      setLongitude(coords.longitude);

      const addressResponse = await Location.reverseGeocodeAsync({
        latitude: coords.latitude,
        longitude: coords.longitude,
      });

      if (addressResponse.length > 0) {
        const firstAddress = addressResponse[0];
        setAddress(`${firstAddress.name}, ${firstAddress.street}, ${firstAddress.region}, ${firstAddress.postalCode}`);
      } else {
        setAddress('Endereço não disponível');
      }
    } catch (error) {
      setErrorMsg(`Erro ao obter localização: ${error.message}`);
    }
  };

  return (
    <ScrollView contentContainerStyle={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.navigate('TelaInicial')} style={styles.backButtonContainer}>
          <View style={styles.backButton}>
            <AntDesign name="arrowleft" size={24} color="black" />
          </View>
        </TouchableOpacity>
        <Text style={styles.title}>Geolocalização</Text>
      </View>
      
      <View style={styles.mapContainer}>
        <MapView
          style={styles.map}
          initialRegion={{
            latitude: -8.052442830407937,
            longitude: -34.88821193857346,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        >
          {latitude && longitude && (
            <Marker
              coordinate={{ latitude, longitude }}
              title="Você está aqui"
              description="Localização atual"
            />
          )}
        </MapView>
        <TouchableOpacity style={styles.geoButton} onPress={handleLocation}>
          <Text>Obter Localização</Text>
        </TouchableOpacity>
      </View>

      {latitude && longitude && (
        <View style={styles.locationInfo}>
          <Text style={styles.infoText}>Latitude: {latitude.toFixed(6)}</Text>
          <Text style={styles.infoText}>Longitude: {longitude.toFixed(6)}</Text>
          {address && (
            <Text style={styles.infoText}>Endereço: {address}</Text>
          )}
          {errorMsg && (
            <Text style={styles.errorText}>{errorMsg}</Text>
          )}
        </View>
      )}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor: '#c9c9c9',
    alignItems: 'center',
    justifyContent: 'flex-start',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
    backgroundColor: '#c9c9c9', // Cor de fundo da barra de título
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  backButtonContainer: {
    position: 'absolute',
    left: -25,
  },
  backButton: {
    padding: 13,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: -12,
  },
  title: {
    fontSize: 32,
    color: '#0A0A0A',
    marginLeft: 24,
  },
  mapContainer: {
    width: '100%',
    height: 300,
    marginBottom: 20,
  },
  map: {
    flex: 1,
  },
  geoButton: {
    backgroundColor: 'white',
    borderRadius: 30,
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginTop: 10,
    alignSelf: 'center',
  },
  locationInfo: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
    alignSelf: 'stretch',
    marginHorizontal: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  infoText: {
    fontSize: 18,
    marginBottom: 5,
  },
  errorText: {
    fontSize: 16,
    color: 'red',
    marginTop: 5,
  },
});

export default GeolocalizacaoScreen;
