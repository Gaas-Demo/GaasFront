import React from 'react'
import { Card } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export default function CarImage({image}) {

  return (
    <Card mode='elevated'
    elevation={5}
    resizeMode='contain'
    >
    <Card.Cover source={image}

    />
    </Card>
  )
}



const styles = StyleSheet.create({

})
