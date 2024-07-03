# Dados Recife 

Este é um aplicativo React Native para obter e visualizar informações da API fornecida pela plataforma de dados do Recife. O aplicativo possui funcionalidades de geolocalização e visualização de dados em diversas áreas como esporte, lazer, educação, entre outros.

## Funcionalidades

- **Dados Recife**: Exibe uma lista de atividades culturais e esportivas disponíveis na cidade de Recife.
- **Geolocalização**: Mostra a localização atual do usuário no mapa e exibe o endereço correspondente.
- **Sobre**: Descreve o propósito do aplicativo e fornece informações adicionais.

## Pré-requisitos

Antes de começar, certifique-se de ter as seguintes ferramentas instaladas em sua máquina:

- [Node.js](https://nodejs.org/) (versão 14 ou superior)
- [npm](https://www.npmjs.com/) ou [Yarn](https://yarnpkg.com/)
- [Expo CLI](https://docs.expo.dev/get-started/installation/)

## Instalação

1. Clone o repositório.
2. Navegue até o diretório do projeto.
3. Instale as dependências.


4. Inicie o aplicativo.
## Estrutura do Projeto

- `TelaInical.js`: Tela inicial com navegação para outras telas.
- `DadosRecife.js`: Tela que busca e exibe dados da API de Recife.
- `GeolocalizacaoScreen.js`: Tela que mostra a localização atual do usuário e seu endereço.
- `SobreScreen.js`: Tela que descreve o objetivo do aplicativo.

## Dependências

- `react`: Biblioteca para criar interfaces de usuário.
- `react-native`: Framework para desenvolvimento de aplicativos móveis.
- `react-navigation`: Biblioteca para navegação entre telas.
- `expo-location`: Biblioteca para obter permissões e localização do dispositivo.
- `expo-vector-icons`: Biblioteca para ícones vetoriais.

## Como Usar

### Tela Inicial

A tela inicial (`TelaInical.js`) permite navegar para três seções diferentes:
- **Dados do Recife**: Exibe informações obtidas da API.
- **Geolocalização**: Mostra a localização atual no mapa.
- **Sobre**: Informações sobre o aplicativo.

### Dados do Recife

A tela de Dados do Recife (`DadosRecife.js`) busca dados da API e os exibe em uma lista. Os usuários podem pesquisar por termos específicos para filtrar os resultados.

### Geolocalização

A tela de Geolocalização (`GeolocalizacaoScreen.js`) solicita permissões de localização e mostra a posição atual do usuário em um mapa, juntamente com o endereço correspondente.

### Sobre

A tela Sobre (`SobreScreen.js`) fornece uma breve descrição do objetivo do aplicativo e como ele utiliza os dados fornecidos pela plataforma de dados do Recife.

## Estilos

Os estilos são definidos usando `StyleSheet` do React Native, com propriedades para personalizar a aparência de cada componente.

```javascript
const styles = StyleSheet.create({
  // Definições de estilo
});
```
---

Desenvolvido com 💙 por [Cicero Antonio](https://github.com/cicerooant)



Sinta-se à vontade para personalizar e ajustar conforme necessário. Se precisar de mais alguma coisa, estou à disposição!
