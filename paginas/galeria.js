import {View, Text, Image, StyleSheet, Button,SafeAreaView} from 'react-native'

export default function Galeria({navigation}){
  return(
    <SafeAreaView style={estilos.container}>
    <View style={estilos.janela}>
      <Text style={estilos.titulo}>Galeria de Fotos</Text>
      <View style={estilos.imgGroup}>
        <Image source={require('../img/img.jpg')} style={estilos.imagens} />
        <Image source={require('../img/img2.jpg')} style={estilos.imagens} />
        <Image source={require('../img/img3.avif')} style={estilos.imagens} />
      </View>
    </View>
    </SafeAreaView>
  )
}

const estilos = StyleSheet.create({
  imgGroup:{
    display: 'inline-block'
  },
  imagens:{
    width: 130,
    height: 130,
    margin: 10,
    display: 'inline-block',
    borderRadius: 6
  },

  janela:{
    flex: 1,
    backgroundColor: '#7B68EE'
  },
  titulo:{
    textAlign: 'center',
    fontSize: 24,
    backgroundColor: 'white'
  }
})