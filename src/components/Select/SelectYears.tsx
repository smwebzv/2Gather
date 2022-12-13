import React, { useState } from 'react';
import {TouchableOpacity, View, Text, ScrollView, FlatList } from 'react-native';
import styles from './SelectYears.style';
import ArrowDown from "../../assets/icons/arrowDown.svg";

const SelectYears = () => {

    const [dropDown, setDropDown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);

    const dropDownGender = () => {
        setDropDown(!dropDown);
    };

    const onSelect = (item) => {
        setSelectedItem(item)
    }

    const onSelectedItem = (item) => {
        setDropDown(false)
        onSelect(item)
    }

    const year = (new Date()).getFullYear();
    const years = Array.from(new Array(70),( val, index) => year -index);

  return (
    <>
    <View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow}>
            <Text style={[styles.text, selectedItem &&{color: "#2D2D2D"}]}>{selectedItem ? selectedItem : `YY`}</Text>
            <TouchableOpacity style={styles.arrow} onPress={dropDownGender}>
                <ArrowDown />
            </TouchableOpacity>
        </TouchableOpacity>            
    </View>
        { dropDown && 
       
            <FlatList
            style={styles.dropDownStyle} 
                data={years}
                renderItem={({item, index}) =>
                <TouchableOpacity key={index} onPress={() => onSelectedItem(item)}>
                    <Text style={[styles.text, {height: 30}]}>{year -index}</Text>
                </TouchableOpacity>
            }
            /> 
        }
    </>
  );
};

export default SelectYears;