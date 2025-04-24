import React, { useState } from 'react'
import { FAB, Modal } from 'react-native-paper';
import { StyleSheet, View, Text } from 'react-native';


const  GarageCarSearch = ({onPress, modalVisible}) => {

  return (
      <FAB
        color='#DC3545'
        icon={modalVisible ? 'close' : 'magnify'}
        size='large'
        mode='elevated'
        style={styles.fab}
        onPress={onPress}
      />
  )
}
const styles = StyleSheet.create({
  fab: {
    position: 'absolute',
    bottom: 15,
    right: 15,
    zIndex: 1000,
    backgroundColor: "#fff4f4",

  },

})

export default GarageCarSearch