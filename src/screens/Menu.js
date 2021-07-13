import React, { Component } from 'react';
import {menuStyle} from '../styles/Styles';

import {
  View,
  Text,
  Animated,
  Easing,
  TouchableOpacity,
  Image,
  
} from 'react-native';

export class Menu extends Component {

  position = new Animated.Value(1)
  


  
  render() {
    return(
      <View style={menuStyle.container}>

      

        <View style={menuStyle.burguerContainer}>
                    <TouchableOpacity onPress={()=> this.props.navigation.openDrawer()}>
                        <View>
                            <Image style={{width:60, height:60}} source={require('../img/menu.png')}/>
                            <Text style={menuStyle.textAnimation} onPress={this.animate}>Welcome the Rick and Morty App!</Text>
                        </View>
                        
                    </TouchableOpacity>
                </View>

        

      </View>

    )
  }
}