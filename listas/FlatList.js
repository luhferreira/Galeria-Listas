import {View, FlatList, StyleSheet,Text, StatusBar,SafeAreaView} from 'react-native'

const DADOS = [
  {
    id:'1',
    descricao:'TV Led 49',
    categoria_id: 1
  },
  {
    id:'4',
    descricao:'Notebook',
    categoria_id: 2
  },
  {
    id:'4',
    descricao:'TV Led 49',
    categoria_id: 3
  },
];

const Item = ({descricao})=>(
  <View style={estilos.item}>
    <Text style={estilos.title}>{descricao}</Text>
  </View>
);

export default function ListaFlat({navigation}){
  const renderItem = ({item})=>(
    <Item descricao={item.descricao} />
  );
  return(
    <SafeAreaView style={estilos.container}>
    <View style={estilos.container}>
      <FlatList 
        data ={DADOS}
        renderItem= {renderItem}
        keyExtractor = {item =>item.id}
      />
    </View>
    </SafeAreaView>
  );
}


const estilos = StyleSheet.create({
  container:{
    flex: 1
  },
  item:{
    backgroundColor: '#7B68EE',
    padding: 20,
    marginHorizontal: 16,
    marginVertical: 8
  },
  title:{
    fontSize: 12
  }
})