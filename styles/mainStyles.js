import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#FFF'
    },
    image: {
        width: 280,
        height: 280,
        resizeMode: 'stretch'
    },
    screen_title: {
        backgroundColor: '#3368FF'
    },
    titulo: {
        fontSize: 22,
        color: '#3368FF',
        fontWeight: 'bold',
        marginTop: 10,
        marginBottom: 4,
        alignContent: 'center',
        textAlign : 'center'
    },
    subtitulo: {
        fontSize: 18,
        color: '#000',
        fontWeight: '500',
        marginBottom: 10
    },
    button_success: {
        fontSize: 18,
        fontWeight: 'bold',
        backgroundColor: '#5cb85c',
        width: 300
    },
    button_add: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    card_title : {
        fontSize: 22
    }
});


