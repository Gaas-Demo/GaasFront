import React from 'react'
import { Avatar, Card, IconButton } from 'react-native-paper'
import { StyleSheet } from 'react-native'
import CarInformationScreen from '../screens/CarInformationScreen'



export default function CarSmallCard({item, navigation}) {

    

  return (
    <Card style={styles.cardcontainer}>
      <Card.Cover source={require('../Testi/auto.png')} 
      style={styles.modelImage}
      resizeMode='contain'
      />
      <Card.Title
       
      title={item.model}
      subtitleNumberOfLines={3}
      subtitle={item.year}
      titleStyle={{
        fontFamily: 'sans-serif-medium'
      }}
      subtitleStyle={{
        fontFamily: 'sans-serif-medium'
      }}
      right={(props) => <IconButton {...props}backgroundColor="#fff2f2" icon="chevron-right" iconColor='#DC3545' onPress={()=> navigation.navigate('CarInformationScreen',{item})} />}
      />
    </Card>


  )
}

const styles = StyleSheet.create({
  cardcontainer: {
    backgroundColor: 'white',
    height: "calc(100% - 8px)",
  },
  modelImage: {
    borderBottomLeftRadius: 0,
    borderBottomEndRadius: 0,
    borderColor: "#cc0000", 
    borderBottomWidth: 3,
  }
})
