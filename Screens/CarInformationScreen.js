
import CarImage from '../Components/CarImage'
import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CarInfo from '../Components/CarInfo'


export default function CarInformationScreen({ route }) {
  const { item } = route.params;
  console.log("CarInformationScreen", item)
  const image = require('../Testi/auto.png')
  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView>
          <CarImage image={image}/>
          <CarInfo item={item}/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
  },
})