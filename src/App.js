import 'react-native-gesture-handler';
import React, { Component } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import {Menu} from './screens/Menu';
import {Imports} from './screens/Imports';
import {ViewImportedCards} from './screens/ViewImportedCards';
import {Bin} from './screens/Bin';


const Drawer = createDrawerNavigator();

export default class App extends Component {

  render (){
    return (
      <NavigationContainer>
        <Drawer.Navigator  
        drawerPosition="left"
        drawerType="slide"
        overlayColor="rgb(200,200,200)"
        drawerContentOptions={{
          activeTintColor:'#f6c9ae',
          activeBackgroundColor: 'rgb(200,200,200)',
        }}>
          <Drawer.Screen name="Menu" component={Menu} />
          <Drawer.Screen name="Imports" component={Imports} options={{title: "Mostrar tarjetas"}} />
          <Drawer.Screen name="ViewImportedCards" component={ViewImportedCards} options={{title: "Contactos guardados"}} />
        
          
        </Drawer.Navigator>
      </NavigationContainer>

  )}  
  }


