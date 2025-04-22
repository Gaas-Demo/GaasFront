
import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { RadioButton } from 'react-native-paper';

const CarAccessory = () => {
    const [selected, SetSelected] = useState([]);

    const isSelected = (value) => selected.includes(value)

    const handleSelected = (filter) => {
        console.log("filter", filter)
       SetSelected((prevselected) => {
        if(prevselected.includes(filter))
        {
            return prevselected.filter((item) => item !== filter)
        }
        return [...prevselected, filter]
       })
    }

  return (
    <View style={styles.container}>

      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="Child"
          status={isSelected('Child') ? 'checked' : 'unchecked'}
          onPress={() => handleSelected('Child Seat')}
        />
        <Text style={styles.radioButtonLabel}>Child seat</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="RoofBox"
          status={isSelected('RoofBox') ? 'checked' : 'unchecked'}
          onPress={() => handleSelected('RoofBox')}
        />
        <Text style={styles.radioButtonLabel}>Roof Box</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="RoofBike"
          status={isSelected('RoofBike') ? 'checked' : 'unchecked'}
          onPress={() => handleSelected('RoofBike')}
        />
        <Text style={styles.radioButtonLabel}>Roof Bike Carrier</Text>
      </View>
      <View style={styles.radioButtonContainer}>
        <RadioButton
          value="Animal"
          status={isSelected('Animal') ? 'checked' : 'unchecked'}
          onPress={() => handleSelected('Animal')}
        />
        <Text style={styles.radioButtonLabel}>Animal</Text>
      </View>
      </View>
  )
}
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'flex-start',
      padding: 20,
      backgroundColor: '#fff',
    },
    title: {
      fontSize: 24,
      marginBottom: 20,
    },
    radioButtonContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginBottom: 15,
    },
    radioButtonLabel: {
      marginLeft: 10,
      fontSize: 18,
    },
  });

  export default CarAccessory;