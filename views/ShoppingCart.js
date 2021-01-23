import React from 'react';
import { ScrollView, View, Text } from 'react-native';
import * as mainStyles from '../styles/mainStyles';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Remove } from '../actions/produtosAction';

class ShoppingCart extends React.Component{

  render(){
    return(
      <ScrollView style={{ backgroundColor: '#FFF' }}>
          <View style={mainStyles.styles.container}>
            {
                this.props.itens.map(
                    (item, i) => (
                        <Text>{item.nome}</Text>
                    )
                )
            }
          </View>
      </ScrollView>
    )
  }
}

//função que 'escuta' e acessa os valores da store
const mapStateToProps = (state) => {
    return {
        //ler o valor do atributo shoppingCart contido no state do reducer
        //produtos -> nome registrado do REDUCER
        itens : state.produtos.shoppingCart
    }
}

//registrando a função ACTION que será disparada pelo componente
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        Remove
    }, dispatch)
);

//conectando o componente ao REACT-REDUX
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);



