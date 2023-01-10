import { StyleSheet } from 'react-native';

const colorLight = '#F2F2F2'
const colorBackground = '#03173E'
const colorBlue = '#08158A'
const colorGray = '#716D6D'

const estilo = StyleSheet.create({
    header: {
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 58,
        backgroundColor: colorBackground
    },
    localizacao: {
        color: colorLight,
        fontSize: 18,
        lineHeight: 26,
        fontWeight: 'bold',
    },
    dataAtual: {
        color: colorLight,
        fontSize: 12,
        lineHeight: 18,
    },
    temperatura: {
        marginTop: 55,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    textoCondicao: {
        color: colorLight,
        fontSize: 16,
        lineHeight: 24,
        fontWeight: '400',
    },
    textoTemperatura: {
        color:colorLight,
        fontSize: 80,
        lineHeight: 88,
        fontWeight: 'bold',
    }
})

export default estilo