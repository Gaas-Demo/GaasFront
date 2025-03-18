import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import CarInformationScreen from '../Screens/CarInformationScreen'



export default function CarSmallCard({item}) {

    
  const moreInfo = () => {
    console.log("nuolta painettu",item)
  }

  return (
    <Card style={styles.cardcontainer}>
      <Card.Cover source={require('../Testi/auto.png')} 
      resizeMode='contain'
      />
      <Card.Title 
      title={item.model}
      subtitleNumberOfLines={3}
      subtitle={item.year}
      right={(props) => <IconButton {...props}backgroundColor='grey'icon="chevron-right" onPress={()=> CarInformationScreen(item)} />}
      />
    </Card>


  )
}

const styles = StyleSheet.create({
  cardcontainer: {
    backgroundColor: 'white',
    height: "calc(100% - 8px)",
  },

})
