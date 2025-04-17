import React from 'react'
import { Card, } from 'react-native-paper'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import CarImage from './CarImage'

export default function CarInfo({item}) {

console.log("carInfo", item)

const image2 = require('../Testi/testi2.jpg')
    return (
        <ScrollView>
            <View style={styles.container}>
                <Card mode='elevated' elevation={5} style={styles.cardContainer}>
                    <CarMotor item={item}/>
                </Card>

                <Card style={styles.cardContainer}>
                    <CarTechnology />
                </Card>

                <Card style={styles.cardContainer}>
                    <CarImage image={image2}/>
                </Card>

                <Card style={styles.cardContainer}>
                    <CarTechnology />
                </Card>
            </View>

        </ScrollView>
    )
}

function CarMotor({item}) {
    return (
        <View style={styles.infoContainer}>
            <Text>{item.model} {item.Type} {item.year} {item.color}</Text>
            <Text>Moottoritilavuus (l): 2,9</Text>
            <Text>Automaattivaihteisto:
                8-vaihteinen Porsche Doppelkupplung (PDK)</Text>
            <Text>Vetotapa: Takaveto</Text>
            <Text>Kiihtyvyys (0-100 km/h, s): 5,3</Text>
            <Text>CO2-päästöt (g/km): 219</Text>
            <Text>Kulutus (l/100km): 9,6</Text>
        </View>
    );
}

function CarTechnology() {
    return (
        <View style={styles.infoContainer}>
            <Text>Power Steering Plus -ohjaustehostin
                ParkAssist (edessä ja takana) sis. peruutuskameran
                Smart Lift -säätö maavaran korkeudelle
                Ulkopeilien himmennysautomatiikka
                Tunnelmavalaistus
                Kuljettajan ergonomia-asetusten muisti
                Älypuhelimen langaton lataus
                BOSE® Surround Sound System (Turbo E-Hybrid)
                Porsche Entry -avainjärjestelmä (Turbo E-Hybrid)</Text>
        </View>
    );
}
function CarSafety() {
    return (
        <View style={styles.infoContainer}>
            <Text>Adaptiivinen ilmajousitus ja Porsche Active Suspension Management (PASM)
                Vakionopeudensäädin, jossa aktiivinen nopeusrajoitusavustin
                Kaistavahti
                Matrix LED -ajovalot
                HD Matrix LED -ajovalot (Turbo E-Hybrid)</Text>
        </View>
    );
}
const styles = StyleSheet.create({
    container: {
        paddingVertical: 20,
    },
    cardContainer: {
        marginVertical: 7,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,
        borderColor: "#cc0000", 
        borderLeftWidth:5,
    },
    infoContainer: {
        marginVertical: 5,
        padding: 10,
        paddingRight: 15,
    },
})