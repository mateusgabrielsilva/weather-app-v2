import React from "react";
import { useState } from "react";
import { Text, Button } from 'react-native'
import * as Location from 'expo-location';
import getCurrentWeather from './'
 
export default function Main() {

    // Pegando localização do usuario 
    const [location, setLocation] = useState(null)
    const [errorMsg, setErrorMsg] = useState(null)

    function getLocation() {
        (async () => {

            let { status } = await Location.requestForegroundPermissionsAsync();
            if (status !== 'granted') {
                setErrorMsg('A permissão para acessar o local foi negada');
                return;
            }

            let location = await Location.getCurrentPositionAsync({});
            setLocation(location)
        }) ();
    }

    let text = 'Aguarde ...'
    if (errorMsg) {
        text = errorMsg
    }else if (location) {
        text = JSON.stringify(location)
    }
    
    return <>

    <Text>{text}</Text>
    <Button title='Teste' onclick={getLocation()}/>
    
    </>
}