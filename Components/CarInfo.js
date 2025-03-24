import React from 'react'
import { Card, } from 'react-native-paper'
import { ScrollView, StyleSheet, Text, View } from 'react-native'
import { useState } from 'react'
import CarImage from './CarImage'

export default function CarInfo({item}) {

console.log("carInfo", item)

    return (
        <ScrollView>
            <View style={styles.container}>
                <Card mode='elevated'
                    elevation={5}
                >
                    <CarMotor item={item}/>
                </Card>
                <View style={styles.container}>
                    <Card>
                        <CarTechnology />
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card>
                        <CarImage />
                    </Card>
                </View>
                <View style={styles.container}>
                    <Card>
                        <CarTechnology />
                    </Card>
                </View>
            </View>

        </ScrollView>
    )
}

function CarMotor({item}) {
    return (
        <View>
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
        <View>
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
        <View>
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
    }
})