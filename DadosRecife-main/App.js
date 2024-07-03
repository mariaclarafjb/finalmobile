import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import TelaInicial from './screens/TelaInicial';
import GeolocalizacaoScreen from './screens/GeolocalizacaoScreen';
import Sobremim from './screens/SobreScreen';
import DadosRecife from './screens/DadosRecife';


const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="TelaInicial" component={TelaInicial} options={{ title: 'TelaInicial' }} />
        <Stack.Screen name="Geolocali" component={GeolocalizacaoScreen} options={{ title: 'Geolocali' }} />
        <Stack.Screen name="Sobremim" component={Sobremim} options={{ title: 'SobreMim' }} />
        <Stack.Screen name="DadosRecife" component={DadosRecife} options={{ title: 'Dados Recife' }} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
