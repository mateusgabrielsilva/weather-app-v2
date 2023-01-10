import { StyleSheet } from 'react-native';

const colorLight = '#F2F2F2'
const colorBackground = '#03173E'
const colorBlue = '#08158A'
const colorGray = '#716D6D'

const estilo = StyleSheet.create({
    principal: {
        padding: 20,
    },
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
    },
    imagemApp: {
        width: '100%',
        justifyContent: 'space-around',
        alignItems: 'center',
        flexDirection: 'column',
        marginTop: 20,
    },
    imagemAppOne: {
        width: 220,
        height: 220,
    },
    weatherNow: {
        width: '100%',
        marginTop: 70,
        backgroundColor: colorLight,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        flexDirection: 'column',
        alignContent: 'center',
        justifyContent: 'space-around',
        paddingVertical: 50,
        position: 'absolute',
        bottom: 0
    },
    weatherNowTitle: {
        color: colorBlue,
        fontSize: 16,
        lineHeight: 24,
        textAlign: 'center',
    },
    weatherNowPrincipal:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
        marginTop: 20,
    },
    weatherNowSecundario: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    weatherNowIcon: {
        marginRight: 10,
        opacity: 0.7
    },
    weatherNowText: {
        color: colorGray,
        fontSize: 14,
        lineHeight: 20
    },
    weatherNowResult: {
        color: colorBlue,
        fontSize: 14,
        lineHeight: 20,
        fontWeight: 'bold',
    }
})

export default estilo