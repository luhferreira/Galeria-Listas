import {View, StyleSheet,Text, SectionList,SafeAreaView,ScrollView} from 'react-native';

const DADOS = [
  {
    titulo: 'Eletrônicos',
    data: ['TV','Caixa de Som', 'SmartPhone', 'Geladeira']
  },

  {
    titulo: 'Vestuario',
    data: ['Camisa','Camiseta', 'Casaco', 'Calça']
  },

  {
    titulo: 'Livros',
    data: ['Ficção','Suspense', 'Comédia']
  },
];

const Item = ({titulo}) =>(
  <View style={estilos.item}>
    <Text style={estilos.titulo}>{titulo}</Text>
  </View>
);

export default function ListaSection({navigation}){
  return(
    <SafeAreaView style={estilos.container}>
      <View style= {estilos.container}>
        <SectionList 
          sections={DADOS}
          keyExtractor={(item,index)=>item + index}
          renderItem ={({item})=><Item titulo={item}/>}
          renderSectionHeader={({section:{titulo}})=>(
            <Text style={estilos.header}>{titulo}</Text>
          )}
        />
      </View>
      </SafeAreaView>
  );
}

const estilos = StyleSheet.create({
  container:{
    flex:1,
    marginHorizontal: 16 
  },
  item:{
    backgroundColor: '#6495ED',
    padding: 20,
    marginVertical: 8
  },
  header:{
    fontSize:32,
    backgroundColor: '#4169E1'
  }, 
  titulo:{
    fontSize: 20
  }
})
