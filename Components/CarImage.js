import React from 'react'
import { Card } from 'react-native-paper'
import { StyleSheet } from 'react-native'

export default function CarImage({image}) {

  return (
    <Card mode='elevated'
    elevation={5}
    resizeMode='contain'
    >
      <Card.Cover source={image} style={styles.modelImage2}/>
    </Card>
  )
}



const styles = StyleSheet.create({
  modelImage2: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    
}
})
