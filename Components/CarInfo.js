import React from 'react'
import { Card, } from 'react-native-paper'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import CarImage from './CarImage'

export default function CarInfo({ item }) {

    console.log("carInfo", item)

    const image2 = require('../Testi/testi2.jpg')
    return (
        <ScrollView>
            <View style={styles.container}>
                <CarImage image={item.photo} />
                <View style={styles.infoCard}>

                    <CarMotor item={item} />

                </View>
                
                    <CarImage image={image2} />
                
                <View style={styles.infoCard}>
                    <CarTechnology />
                </View>


            </View>

        </ScrollView>
    )
}

function CarMotor({ item }) {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.text}>{item.model} {item.Type} {item.year} {item.color}</Text>
            <Text style={styles.text}>Moottoritilavuus (l): 2,9</Text>
            <Text style={styles.text}>Automaattivaihteisto:
                8-vaihteinen Porsche Doppelkupplung (PDK)</Text>
            <Text style={styles.text}>Vetotapa: Takaveto</Text>
            <Text style={styles.text}>Kiihtyvyys (0-100 km/h, s): 5,3</Text>
            <Text style={styles.text}>CO2-päästöt (g/km): 219</Text>
            <Text style={styles.text}>Kulutus (l/100km): 9,6</Text>
        </View>
    );
}

function CarTechnology() {
    return (
        <View style={styles.infoContainer}>
            <Text style={styles.text}>Power Steering Plus -ohjaustehostin
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
        paddingHorizontal: 10,
    },
    text: {
        fontFamily: 'sans-serif-medium',
        paddingVertical: 10,
    },
    cardContainer: {
        marginVertical: 7,
        borderTopLeftRadius: 5,
        borderBottomLeftRadius: 5,

        borderLeftWidth: 5,
    },
    infoContainer: {
        marginVertical: 5,
        padding: 10,
        paddingRight: 15,

    },
    infoCard: {
        backgroundColor: "#fff",
        padding: 15,
        borderRadius: 10,
        width: "100%",
        marginBottom: 20,
        elevation: 2,
        borderColor: '#DC3545',
        borderWidth: 5,
        borderRadius: 10,
    },
})