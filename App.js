import React from 'react';

//bibliotecas para mapeamento de navegação dos componentes
import { NavigationContainer, StackActions } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

//importando os componentes
import Checkout from './views/Checkout';
import Details from './views/Details';
import Store from './views/Store';
import ShoppingCart from './views/ShoppingCart';

//importando o arquivo de folhas de estilo
import * as mainStyles from './styles/mainStyles';

//importando as bibliotecas do REACT-REDUX
import { Provider } from 'react-redux';
import { createStore } from 'redux';

//importando o reducer de produtos
import produtosReducer from './reducers/produtosReducer';

//criando a store..
const store = createStore(produtosReducer);

//criando o objeto Stack (montar a navegação)
const Stack = createStackNavigator();

class App extends React.Component {

  render() {
    return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator>

            <Stack.Screen name="store" component={Store}
              options={{
                title: 'Loja de Produtos',
                headerStyle: mainStyles.styles.screen_title,
                headerTintColor: '#FFF'
              }}
            />

            <Stack.Screen name="details" component={Details}
              options={{
                title: 'Detalhes do Produto',
                headerStyle: mainStyles.styles.screen_title,
                headerTintColor: '#FFF'
              }}
            />

            <Stack.Screen name="shopping-cart" component={ShoppingCart}
              options={{
                title: 'Carrinho de Compras',
                headerStyle: mainStyles.styles.screen_title,
                headerTintColor: '#FFF'
              }}
            />

            <Stack.Screen name="checkout" component={Checkout}
              options={{
                title: 'Finalizar Compra',
                headerStyle: mainStyles.styles.screen_title,
                headerTintColor: '#FFF'
              }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
    )
  }
}

export default App;
