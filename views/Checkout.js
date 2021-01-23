import React from 'react';
import { ScrollView, View, Text } from 'react-native';

class Checkout extends React.Component{

  render(){
    return(
      // habilita o scroll da pagina
      <ScrollView style={{ backgroundColor: '#FFF' }}>
          <View>
            <Text style={{ fontSize: 20 }}>
             Checkout
            </Text>
          </View>
      </ScrollView>
    )
  }
}

export default Checkout;