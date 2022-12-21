import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList } from 'react-native';
import styles from './SelectMonth.style';
import ArrowDown from "../../../assets/icons/arrowDown.svg";

const SelectMonth = ({selectedItemMonth, setSelectedItemMonth}) => {

    const [dropDown, setDropDown] = useState(false);
 
    const dropDownGender = () => {
        setDropDown(!dropDown);
    };

    const onSelect = (item) => {
        setSelectedItemMonth(item)
    }

    const onSelectedItem = (item) => {
        setDropDown(false)
        onSelect(item)
    }

    const month = (new Date()).getMonth();
    const months = Array.from(new Array(12),( val, index) => index+1);

  return (
    <>
    <View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow} onPress={dropDownGender}>
            <Text style={[styles.text, selectedItemMonth &&{color: "#2D2D2D"}]}>{selectedItemMonth ? selectedItemMonth : `MM`}</Text>
            <TouchableOpacity style={styles.arrow}>
                <ArrowDown />
            </TouchableOpacity>
        </TouchableOpacity>            
    </View>
        { dropDown && 
       
            <FlatList
            style={styles.dropDownStyle} 
                data={months}
                renderItem={({item, index}) =>
                <TouchableOpacity key={index} onPress={() => onSelectedItem(item)}>
                    <Text style={[styles.text, {height: 30}]}>{index +1}</Text>
                </TouchableOpacity>
            }
            /> 
        }
    </>
  );
};

export default SelectMonth;