import React from 'react'
import { Card } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export default function CarImage() {

  return (
    <Card mode='elevated'
    elevation={5}
    resizeMode='contain'
    >
    <Card.Cover source={require('../Testi/auto.png')}

    />
    </Card>
  )
}



const styles = StyleSheet.create({

})
