import React from 'react'
import { Card } from 'react-native-paper'
import { StyleSheet, Image } from 'react-native'

export default function CarImage({image}) {

  return (
      <Image source={image} style={styles.carImage}/>
  )
}



const styles = StyleSheet.create({
  modelImage2: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
    
},
carImage: {
  width: "100%",
  height: 200,
  borderRadius: 15,
  marginBottom: 20,
  shadowColor: "#000",
  shadowOffset: { width: 0, height: 4 },
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 4,
  borderColor: '#DC3545',
  borderWidth: 5,
  borderRadius: 10, 
},  
})
