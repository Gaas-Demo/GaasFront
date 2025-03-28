
import CarImage from '../components/CarImage'
import { ScrollView, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CarInfo from '../components/CarInfo'
import { Button } from 'react-native-paper'
import CarLeaseModal from '../components/CarLeaseModal'

export default function CarInformationScreen({ route }) {
  const { item } = route.params;
  console.log("CarInformationScreen", item)
  const image = require('../Testi/auto.png')
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView scrollEnabled={!modalVisible}>
          <CarImage image={image} />
          <CarInfo item={item} />
          <Button mode='outlined' onPress={toggleModal}>Lease Car</Button>
          <CarLeaseModal visible={modalVisible} toggleModal={toggleModal} item={item}/>
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 10,
    paddingBottom: 10,
  },
})