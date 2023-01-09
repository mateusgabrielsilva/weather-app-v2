import React from "react";
import { useState } from "react";
import { Text, Button } from 'react-native'
import * as Location from 'expo-location';
import getCurrentWeather from '../../api/consulta.js';
 
export default function Main() {

    // Setando data e dia da semana 
    const [dataAtual, setDataAtual] = useState(null)
    let data = new Date()
    

    // Pegando localização do usuario 
    const [locationCoords, setLocationCoords] = useState([])
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
        }) ();
    }

    let text = 'Aguarde ...'
    if (errorMsg) {
        text = errorMsg
    }else if (locationCoords) {
        text = locationCoords.latitude
    }

    // Recebendo dados da API 

    
    return <>

        <Text>{text}</Text>
        <Button title='Teste' onclick={getLocation()}/>
    
    </>
}