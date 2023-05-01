import './polifills';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
 import { createDrawerNavigator } from '@react-navigation/drawer';
import Home from './paginas/telaPrincipal';
import Galeria from './paginas/galeria';
import ListaFlat from './listas/FlatList';
import ListaSection from './listas/SectionList';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();
const Drawer = createDrawerNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='Home'>
        <Drawer.Screen name='Home' component={Home}/>
        <Drawer.Screen name='Galeria' component={Galeria}/>
        <Drawer.Screen name='ListaFlat' component={ListaFlat}/>
        <Drawer.Screen name='ListaSection' component={ListaSection}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}