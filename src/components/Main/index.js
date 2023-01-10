import React from "react";
import { useState, useEffect } from "react";
import { Text, Button, TouchableOpacity, Image, View } from 'react-native'
import * as Location from 'expo-location';
import axios from "axios";
import estilo from "./Style";

import { VscDebugRestart } from 'react-icons/vsc'
import { EvilIcons } from '@expo/vector-icons';
 
export default function Main() {

    // Chave para chamar API Weather 
    const key = 'd6f7d63f7ead497da9f173206230901';

    // Setando data e dia da semana 
    
    const date = new Date()
    const dateAtual = date.toDateString()

    // Setando resultados
    const [localizacao, setLocalizacao] = useState('')
    const [temperatura, setTemperatura] = useState('')
    const [condicao, setCondicao] = useState('')
    const [imagem, setImagem] = useState('')
    const [vento, setVento] = useState('')
    const [humidade, setHumidade] = useState('')
    const [precipitcao, setPrecipitacao] = useState('')
    

    // Pegando localização do usuario 
    const [locationCoords, setLocationCoords] = useState([])
    const [locationLatitude, setLocationLatitude] = useState(null)
    const [locationLongitude, setLocationLongitude] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    function getLocation() {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar o local foi negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocationCoords(location.coords)
            setLocationLatitude(location.coords.latitude)
            setLocationLongitude(location.coords.longitude)
        }) ();
    }

    // Chamando API com Axios 
    const getWeatherApi = async () => {
        //const data = await getCurrentWeather(locationCoords)
        axios.get(`https://api.weatherapi.com/v1/current.json?key=${key}&q=${locationLatitude},${locationLongitude}`).then((response) => {
            const data = response.data
    
            setLocalizacao(data.location.name)
            setTemperatura(data.current.temp_c)
            setCondicao(data.current.condition.text)
            setImagem(data.current.condition.icon)
            setVento(data.current.wind_kph)
            setHumidade(data.current.humidity)
            setPrecipitacao(data.current.precip_mm)
        })
        .catch((error) => {
            console.log(error)
        })
    }

    const setCurrentWeather = async () => {
        await getLocation()
        await getWeatherApi()  
    }

    let text = 'Aguarde ...';
    
    if (errorMsg) {
        text = errorMsg
    }else if (locationCoords) {
        //text = locationCoords.latitude
        text = locationLatitude  + ', ' + locationLongitude
    }

    // Chamando função apos dados carregados
    useEffect(() => {
        setCurrentWeather()
    }, [])

    return <>

        <View style={estilo.header}>
            <View style={estilo.title}>
                <Text style={estilo.localizacao}>{localizacao}</Text>
                <Text style={estilo.dataAtual}>{dateAtual}</Text>
            </View>
            <TouchableOpacity onPress={getWeatherApi}>
                <EvilIcons name="refresh" size={48} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
        <View style={estilo.temperatura}>
            <View>
                <Image source={{uri: `https:${imagem}`}} style={{width: 64, height: 64}}/>
                <Text style={estilo.textoCondicao}>{condicao}</Text>
            </View>
            <Text style={estilo.textoTemperatura}>{temperatura}°</Text>
        </View>
        <View>
            <Image source={require('../../../assets/cloud.png')}/>
        </View>

        
        
        
        <Text>{vento}</Text>
        <Text>{humidade}</Text>
        <Text>{precipitcao}</Text>
        
        
       
    </>
}