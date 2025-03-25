import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Modal, TextInput } from 'react-native-paper';
import { SearchModelYearColor } from '../Functions/SearchFunctions';
import carsData from '../Testi/testi';
import { Chip } from 'react-native-paper';


const SearchModal = ({ visible, toggleModal, Search, data }) => {

    const [text, setText] = useState("");
    const [SearchData, setSearchData] =  useState(data);
    console.log("searchmodal", Search, data)

    useEffect(() => {
      handleSearch()
    }, [])
    

   const handleSearch = () => {

        if(text.length > 0){
            const searchedData = SearchModelYearColor(text, data)
            console.log("searchedData", searchedData)
            Search(searchedData)
        }
        else {
            Search(carsData)
        }
    
   }
    

    return (
        <Modal
            animationType="slide"
            visible={visible}
            transparent={true}
            onRequestClose={toggleModal}
        >
            <View style={styles.modalOverlay}>
                <View style={styles.modalContainer}>
                    <TextInput
                        label="Search"
                        value={text}
                        onChangeText={text => setText(text)}
                        onSubmitEditing={() =>{
                            handleSearch()
                            toggleModal()
                        }}
                    />
                </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
    },
    modalContainer: {
        backgroundColor: 'white',
        padding: 10,
        borderRadius: 10,
        width: 300,
        height: 500,
        //  justifyContent: 'center',
        //  alignItems: 'center',
    },
});

export default SearchModal;