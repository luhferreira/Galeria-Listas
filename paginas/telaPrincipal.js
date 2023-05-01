import {View, Text, StyleSheet,Button} from 'react-native';

export default function Home({navigation}){
  return (
    <View style={estilos.janela}>
      <Text> Tela Principal</Text>
      <Button title="Galeria" onPress={()=> navigation.navigate('Galeria')} />
    </View>
  );
}

const estilos = StyleSheet.create({
  janela:{
    flex: 1,
    backgroundColor: '#9370DB'
  }
})