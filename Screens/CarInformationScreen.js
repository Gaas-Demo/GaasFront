
import CarImage from '../components/CarImage'
import { ScrollView, StyleSheet } from 'react-native'
import React, { useState, useLayoutEffect } from 'react'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'
import CarInfo from '../components/CarInfo'
import { Button } from 'react-native-paper'
import CarLeaseModal from '../components/CarLeaseModal'
import { View } from 'react-native'



export default function CarInformationScreen({ navigation, route }) {
  const { item } = route.params;
  console.log("CarInformationScreen", item)
  const image = item.photo
  const [modalVisible, setModalVisible] = useState(false)

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  useLayoutEffect(() => {
    navigation.setOptions({
      title: item.model,
    });
  }, [navigation]);


  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
        <ScrollView scrollEnabled={!modalVisible}>
          <CarImage image={image} />
          <CarInfo item={item} />
          <Button style={styles.Button} labelStyle={{color : 'white'}} mode='outlined' onPress={toggleModal}>Lease Car</Button>
        </ScrollView>
          <CarLeaseModal visible={modalVisible} toggleModal={toggleModal} item={item}/>
      </SafeAreaView>
    </SafeAreaProvider>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingBottom: 10,
  },

  Button:{
    backgroundColor: '#DC3545',
    borderColor:'#DC3545'
  }
})