
import CarImage from '../Components/CarImage'
import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CarInfo from '../Components/CarInfo'


export default function CarInformationScreen() {
    

  return (
    
    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
      <ScrollView>
      <CarImage/>
      <CarInfo/>
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