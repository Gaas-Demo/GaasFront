import React, { useState } from 'react'
import { Modal, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import IconButton from 'react-native-paper';
import { updateRentedCar } from '../Testi/testi';
import DatePicker from './DatePicker';
import TimePicker from './TimePicker';
import { en, registerTranslation } from 'react-native-paper-dates'
import { updateReservedCar } from '../screens/Calendar';
registerTranslation('en', en)



const CarLeaseModal = ({ visible, toggleModal, item }) => {
  const currentDate = new Date()
  const [selectedDate, setSelectedDate] = useState(currentDate);
  const [selectedTime, setSelectedTime] = useState({ hours: currentDate.getHours(), minutes: currentDate.getMinutes() });

  console.log("modal", item)

  const Accept = () => {
    updateRentedCar(item)
    toggleModal()
  }

  
  const Reserve = () => {
    if (selectedDate && selectedTime) {
      const dateTime = new Date(selectedDate);
      dateTime.setHours(selectedTime.hours, selectedTime.minutes);
      updateReservedCar(item, dateTime);
      console.log("datetime",dateTime);
    }
    toggleModal();
  };

  return (
    <Modal
      visible={visible}
      transparent={true}
      onRequestClose={toggleModal}
    >
      <View style={styles.modalOverlay}>
      <View style={styles.modalContainer}>
      <Button onPress={toggleModal}>CLOSE</Button>
      <DatePicker onDateChange={setSelectedDate} />
      <TimePicker onTimeChange={setSelectedTime}/>
      <Button onPress={Reserve}>Rent later</Button>
      <Button onPress={Accept}>Rent now</Button>
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
      marginTop: 100,
      backgroundColor: 'white',
      padding: 20,
      borderRadius: 10,
      alignItems: 'center',
      justifyContent: 'center',
      height: 300,
      width: 300,
      alignSelf: 'center',
    },
});

export default CarLeaseModal;
