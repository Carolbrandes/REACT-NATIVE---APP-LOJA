import { Alert } from 'react-native';
import { combineReducers } from 'redux';

//definindo os dados que serão armazenados no state
//por meio deste reducer (produtosReducer)
const INITIAL_STATE = {
    shoppingCart: [] //cesta de compras (produtos)
}

//declarando o REDUCER
const produtosReducer = (state = INITIAL_STATE, action) => {

    switch (action.type) {

        case 'ADD_PRODUTO':
            state.shoppingCart.push(action.data);
            return state;

        case 'REMOVE_PRODUTO':
            return state;

        default:
            return state;
    }
}

//exportando o reducer
export default combineReducers({
    produtos: produtosReducer
})