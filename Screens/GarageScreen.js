import React from 'react'
import GarageCarSearch from '../Components/GarageCarSearch'
import { View, Text, SectionList, FlatList, ScrollView } from 'react-native'
import { StyleSheet } from 'react-native'
import { useState, useRef, useEffect } from 'react'
import SearchModal from '../Components/SearchModal'
import { SafeAreaView, SafeAreaProvider } from 'react-native-safe-area-context';
import CarSmallCard from '../Components/CarSmallCard'
import carsData from '../Testi/testi'




export default function GarageScreen() {
  const numColumns1 = 2;
  const [modalVisible, setModalVisible] = useState(false);
  const [SearchData, setSearchData] = useState([]);

  const toggleModal = () => {
    setModalVisible(!modalVisible);
  };

  const Search = (SearchData) => {
    setSearchData(SearchData);
  };


  useEffect(() => {
    console.log("Gara",SearchData)
    console.log("Gara2",carsData)
  }, [])




  return (

    <SafeAreaProvider>
      <SafeAreaView style={styles.container}>
       
        <FlatList
          numColumns={numColumns1}
          data={SearchData}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => (
            <View style={styles.column}>
            <CarSmallCard item={item} />
            </View>
          )}
        />

        <GarageCarSearch onPress={toggleModal} modalVisible={modalVisible} />
        <SearchModal visible={modalVisible} toggleModal={toggleModal} Search={Search} data={carsData} />
       
      </SafeAreaView>

    </SafeAreaProvider>

  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    alignContent: 'flex-start',
    backgroundColor: 'white',
  },
  column: {
    width: '50%', // 50% -> 2 columns | 33% -> 3 columns | 25% -> 4 columns
    height: '100px',
    backgroundColor: 'white',
    paddingHorizontal: 5,
    paddingVertical: 5
  },

});