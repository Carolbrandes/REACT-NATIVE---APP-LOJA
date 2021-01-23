import React from 'react';
import { ScrollView, View, Text, Alert, Image } from 'react-native';
import { Button, Card } from 'react-native-elements';
import * as services from '../services/produtosService';
import * as mainStyles from '../styles/mainStyles';
import * as config from '../config/apiConfig';

class Store extends React.Component {

    //construtor..
    constructor(props) {
        super(props);

        //definindo o state do componente..
        this.state = {
            produtos: [] //array vazio
        }
    }

    //override (sobrescrita)
    componentDidMount() {

        //executando o serviço de consulta de produtos na API..
        services.getProdutos()
            .then(
                data => {
                    this.setState({
                        produtos: data
                    });
                }
            )
            .catch(
                e => {
                    Alert.alert('Erro: ' + e);
                }
            )
    }

    render() {

        var self = this.state;

        return (
            <ScrollView style={{ backgroundColor: '#FFF' }}>
                <View style={mainStyles.styles.container}>

                    <Text style={mainStyles.styles.titulo}>
                        Bem vindo à Loja de Produtos
                    </Text>
                    <Text style={mainStyles.styles.subtitulo}>
                        Produtos em oferta:
                    </Text>

                    <Button buttonStyle={mainStyles.styles.button_success}
                        title="Ver Carrinho de compras"
                        onPress={
                            () => this.props.navigation.navigate('shopping-cart')
                        }
                    />

                    {
                        self.produtos.map(
                            (item, i) => (
                                <Card key={i}>
                                    <Card.Title style={mainStyles.styles.card_title}>
                                        {item.nome}
                                    </Card.Title>
                                    <Card.Divider />
                                    <Image
                                        style={mainStyles.styles.image}
                                        source={{ uri : config.BASE_URI + item.foto }}
                                    />
                                    <Text style={mainStyles.styles.titulo}>
                                        {item.preco}
                                    </Text>
                                    <Button style={mainStyles.styles.button_add}
                                        title="Ver Detalhes"
                                        onPress={
                                            () => this.props.navigation.navigate('details', {
                                                produto : JSON.stringify(item)
                                            })
                                        }/>
                                </Card>
                            )
                        )
                    }

                </View>
            </ScrollView>
        )
    }
}

export default Store;



