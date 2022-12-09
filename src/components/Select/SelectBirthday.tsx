import React, { useState } from 'react';
import {TouchableOpacity, View, Text } from 'react-native';
import styles from './SelectBirthdayStyle';
import ArrowDown from "../../assets/icons/arrowDown.svg";



const SelectBirthday = () => {

    const [dropDown, setDropDown] = useState(false);
    const [selectedItem, setSelectedItem] = useState(false);
    const [date, setDate] = useState([{ year: "", month: "", day: "" }]);

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

  return (
    <>
    <View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow}>
            <Text style={[styles.text, selectedItem &&{color: "#2D2D2D"}]}>{selectedItem ? selectedItem.label : `DD`}</Text>
            <TouchableOpacity style={styles.arrow} onPress={dropDownGender}>
                <ArrowDown />
            </TouchableOpacity>
        </TouchableOpacity>            
    </View>
        { dropDown && 
            <View style={styles.dropDownStyle}>
            {
                date.map((item, index) => 
                <TouchableOpacity key={index} onPress={() => onSelectedItem(item)}>
                    <Text style={[styles.text, {height: 30}]}>{item.year}</Text>
                </TouchableOpacity>
                )
            }
            </View>
        }
    </>
  );
};

export default SelectBirthday;