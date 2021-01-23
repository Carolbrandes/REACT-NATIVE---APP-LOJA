import React from 'react';
import { ScrollView, View, Text, Image, Alert } from 'react-native';
import { Button, Card } from 'react-native-elements';
import * as mainStyles from '../styles/mainStyles';
import * as config from '../config/apiConfig';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { Add } from '../actions/produtosAction';

class Details extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            item: {} //objeto
        }

    }

    //função executada antes do componente ser renderizado
    componentDidMount() {

        //resgatar o produto enviado pelo navigation
        const produto = this.props.route.params.produto;

        this.setState({
            item: JSON.parse(produto)
        });
    }

    //função para adicionar um produto na cesta de compras
    adicionarProduto(){
        //disparando a ACTION e passar os dados do produto..
        this.props.Add(this.state.item);
        //exibindo mensagem de sucesso.
        Alert.alert('Produto adicionado no carrinho de compras com sucesso!');
    }

    render() {
        return (
            <ScrollView style={{ backgroundColor: '#FFF' }}>
                <View style={mainStyles.styles.container}>

                    <Text style={mainStyles.styles.titulo}>
                        Detalhes do Produto
                    </Text>

                    <Card>

                        <Card.Title style={mainStyles.styles.card_title}>
                            {this.state.item.nome}
                        </Card.Title>

                        <Card.Divider />

                        <Image
                            style={mainStyles.styles.image}
                            source={{ uri: config.BASE_URI + this.state.item.foto }}
                        />

                        <Text style={mainStyles.styles.titulo}>
                            {this.state.item.preco}
                        </Text>

                        <Button style={mainStyles.styles.button_add}
                            title="Adicionar na cesta de compras" 
                            onPress={
                                () => this.adicionarProduto()
                            }
                        />

                        <Button buttonStyle={mainStyles.styles.button_success}
                            title="Ver Carrinho de compras"
                            onPress={
                                () => this.props.navigation.navigate('shopping-cart')
                            }
                        />
                    </Card>

                </View>
            </ScrollView>
        )
    }
}

//função que 'escuta' e acessa os valores da store
const mapStateToProps = (state) => {
    return state;
}

//registrando a função ACTION que será disparada pelo componente
const mapDispatchToProps = dispatch => (
    bindActionCreators({
        Add //ACTION
    }, dispatch)
);

//conectando o componente ao REACT-REDUX
export default connect(mapStateToProps, mapDispatchToProps)(Details);