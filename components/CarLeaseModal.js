import React, { useState } from 'react'
import { Modal, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import IconButton from 'react-native-paper';
import { updateRentedCar } from '../Testi/testi';
import CarAccessory from './CarAccessory';



const CarLeaseModal = ({ visible, toggleModal, item }) => {

  console.log("modal", item)

  const Accept = () => {
    updateRentedCar(item)
    toggleModal()
  }

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
      <Button onPress={toggleModal}>CLOSE</Button>
      <Button onPress={Accept}>Accept</Button>
      </View>
      </View>
    </Modal>

  )
}
const styles = StyleSheet.create({
  modalOverlay: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
},
    modalContainer: {
      width: 300,
      height: 600,
    padding: 20,
    backgroundColor: 'white',
    borderRadius: 10,
    alignItems: 'center',
    },
});

export default CarLeaseModal;
