import React, { Component } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Tarjeta from '../components/Tarjeta';
import {getData} from '../api/RandomUser';
import { importsStyle } from '../styles/Styles';
import {contactosStyle} from '../styles/Styles';


import { 
  View,
  ActivityIndicator,
  TouchableOpacity,
  Text,
  FlatList,
  TextInput,
  Alert,
} from "react-native";

export class Imports extends Component {
  
constructor() {
  super();
  this.state = {
    pedido: "",
    contactosBackup: [],
    contactos: [],
    cantidad: " ",
    almacenar:[],
    activity: false,
  }
}  


getDataFromApi(numero) {
  getData(numero)
  .then((resultado)=> {
    this.setState({activity: true})
    let adicionar = [...this.state.contactos, ...resultado]
    this.setState({contactos: adicionar, activity: false})
  })
}


async componentDidMount(){
  
  
}

async storeData(value){
  
  try{

    this.state.almacenar.push(value)

    const jsonContacts = JSON.stringify(this.state.almacenar)
    
   
  
    await AsyncStorage.setItem("contactos", jsonContacts);
    
    let numeroDeAlmacenados = this.state.almacenar.length


    let eliminado = this.state.contactos.filter((contacto) => {
        return contacto.id !== value.id
    })

    this.setState({
      contactos: eliminado,
      cantidad: numeroDeAlmacenados,
    })
   
  } catch(e) {
    console.log(e)
  }
}

async deleteData(value){
 
      Alert.alert("Ha eliminado la tarjeta.")

 
  let eliminado = this.state.contactos.filter((contacto) => {
    return contacto.id !== value.id
})

this.setState({
  contactos: eliminado,
  
})

}



  keyExtractor = (item, idx) => idx.toString();
  renderItem = ({item}) => {
    return(

        <View  style={importsStyle.tarjeta} >
            
          <Tarjeta 

            
            name={item.name} 
            image={item.image}
            status={item.status}
            species={item.species}
            
                        
            
          />

           <View style={importsStyle.containerButton}>
            <View style={importsStyle.containerButtonItem} ><TouchableOpacity onPress={() => this.storeData(item)}><Text style={importsStyle.textButton}>Guardar</Text></TouchableOpacity></View>


             <View style={importsStyle.containerButtonItem} ><TouchableOpacity onPress={() => this.deleteData(item)}><Text style={importsStyle.textButton} >Eliminar</Text></TouchableOpacity></View>

          </View> 
          

          
        </View>
        
  
      )
    }
  

  render (){
    return (
          <View style={importsStyle.container}>
              

              
              <TouchableOpacity onPress = {() => this.getDataFromApi(this.state.pedido)}>
                <Text style={importsStyle.textPrincipal} >Traer tarjetas</Text>
              </TouchableOpacity >

                 


            { this.state.activity

            ? <ActivityIndicator
            color={"blue"}
            size={60}/>

            : <View style={importsStyle.containerFlatList}>
              <FlatList
              data={this.state.contactos}
              keyExtractor={this.keyExtractor}
              renderItem={this.renderItem}
              />
              </View>
              
            }       
      
          </View>
  
  
  )}  

}