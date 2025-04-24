import React, { useState } from 'react'
import { Modal, Text } from 'react-native-paper';
import { StyleSheet, View } from 'react-native';
import { Button } from 'react-native-paper';
import IconButton from 'react-native-paper';
import { updateRentedCar } from '../Testi/testi';
import CarAccessory from './CarAccessory';
import { ScrollView } from 'react-native-gesture-handler';
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
      console.log("datetime", dateTime);
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
          <CarAccessory />
          <DatePicker onDateChange={setSelectedDate} />
          <TimePicker onTimeChange={setSelectedTime} />
          <Button labelStyle={{ color: 'white' }} style={styles.Button} mode='outlined' onPress={toggleModal}>Close</Button>
          <Button labelStyle={{ color: 'white' }} style={styles.Button} mode='outlined' onPress={Reserve}>Lease later</Button>
          <Button labelStyle={{ color: 'white' }} style={styles.Button} mode='outlined' onPress={Accept}>Lease now</Button>
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
  Button: {
    width: "95%",
    marginTop: 15,
    paddingVertical: 7,
    backgroundColor: "#DC3545",
    borderRadius: 8,
    alignItems: "center",
    textDecorationColor: 'white',
  }
  });

export default CarLeaseModal;
