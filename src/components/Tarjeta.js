import React, { Component } from 'react';
import {cardStyle} from '../styles/Styles';

import { 
    Text,
    View,
    Image, 
    Animated,
    TouchableOpacity,
    TextInput

} from "react-native";
import AsyncStorage from '@react-native-async-storage/async-storage';

export default class Tarjeta extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toValue: 1,
      textHandler: '',
      comentario: props.comentario
    }
  }  



  position = new Animated.Value(0);
  rotation = new Animated.Value(0);



  render (){

    const rotA = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['0deg', '180deg']
    })
    
    const rotB = this.rotation.interpolate({
      inputRange: [0, 1],
      outputRange: ['180deg', '0deg']
    })
    return (
    <View>

      <TouchableOpacity onPress={this.topDown}>
      <Animated.View style={{
        backfaceVisibility: 'hidden',
        transform: [
            {translateY: this.position},
            {rotateX: rotA}

        ]}}>
        <View style={cardStyle.container}>
          <View style={cardStyle.item} ><Image style={cardStyle.image} source={{uri: this.props.image}}/></View> 
         <View style={cardStyle.item}><Text style={cardStyle.text} >  {this.props.name}</Text></View>  
          <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.species}</Text></View>
          <View style={cardStyle.item}><Text style={cardStyle.text} >{this.props.status} ({this.props.edad})</Text></View>  
        </View>
      </Animated.View>
      

      </TouchableOpacity>


    
    </View>
  )}  

}