import React, { useEffect, useState } from 'react'
import { StyleSheet, View, Text } from 'react-native';
import { Modal, RadioButton, TextInput } from 'react-native-paper';
import { FilterAccessory, SearchModelYearColor } from '../Functions/SearchFunctions';
import carsData from '../Testi/testi';
import { Button } from 'react-native-paper';


const SearchModal = ({ visible, toggleModal, Search, data }) => {

    const [text, setText] = useState("");
    const [SearchData, setSearchData] = useState(data);
    const [selected, SetSelected] = useState([]);
    const [combinedData, setCombinedData] = useState([]);

    useEffect(() => {
        handleSearch()
    }, [text, selected])


    const handleSearch = () => {
        console.log("sel", selected)
        const searchedData = SearchModelYearColor(text, data)
        if (selected.length <= 0 || text.length <= 0) {
            Search(searchedData)
        }
        if (selected.length > 0) {
            const searchedData2 = FilterAccessory(selected, searchedData)
            console.log("searchedData", searchedData, "+", searchedData2)
            Search(searchedData2)
        }
        else {
            Search(searchedData)
        }



    }

    const handleFilter = (filter) => {
        console.log("filter", filter)
        SetSelected((prevselected) => {
            if (prevselected.includes(filter)) {
                return prevselected.filter((item) => item !== filter)
            }
            return [...prevselected, filter]
        })
    }
    const isSelected = (filter) => selected.includes(filter)

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
                    theme={{colors:{primary:'#DC3545'}}}
                        mode='outlined'
                        label="Search"
                        value={text}
                        onChangeText={text => setText(text)}
                        onSubmitEditing={() => {
                            //    handleSearch()
                            //   toggleModal()
                        }}
                    />
                    <Button theme={{
                        colors: {
                            primary: '#DC3545',
                            onPrimary: 'white',
                            outline: '#DC3545',
                            surfaceVariant: '#DC3545',
                            onSurfaceVariant: '#DC3545',
                        },
                    }} mode={isSelected('child') ? 'contained' : 'outlined'}
                        onPress={() => handleFilter('child')
                        }>
                        Child
                    </Button>
                    <Button theme={{
                        colors: {
                            primary: '#DC3545',
                            onPrimary: 'white',
                            outline: '#DC3545',
                            surfaceVariant: '#DC3545',
                            onSurfaceVariant: '#DC3545',
                        },
                    }}mode={isSelected('roof') ? 'contained' : 'outlined'} onPress={() => handleFilter('roof')
                    }>
                        Roof Rails
                    </Button>
                    <Button theme={{
                        colors: {
                            primary: '#DC3545',
                            onPrimary: 'white',
                            outline: '#DC3545',
                            surfaceVariant: '#DC3545',
                            onSurfaceVariant: '#DC3545',
                        },
                    }} mode={isSelected('animal') ? 'contained' : 'outlined'} onPress={() => handleFilter('animal')
                    }>
                        Animal
                    </Button>
                </View>
            </View>
        </Modal >
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
    button: {
        fontFamily: 'sans-serif-medium',
        // borderColor:'#DC3545',
        //buttonColor:'#DC3545',
        // backgroundColor:'#DC3545'
    },
});

export default SearchModal;