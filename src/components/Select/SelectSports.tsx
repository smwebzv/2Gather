import React, { useState } from 'react';
import {TouchableOpacity, View, Text } from 'react-native';
import styles from './SelectLevelStyle';
import ArrowDown from "../../assets/icons/arrowDown.svg";

interface IProps{
    selectedItem: ItemProps,
    onSelect: (item: ItemProps) => void,
    handleAddSports:() => void,
    sports: any
}

interface ItemProps{
    sport: string
    id: number
}

const SelectSport = ({selectedItem, onSelect, sports}: IProps) => {

    const [dropDown, setDropDown] = useState(false);

    const dropDownGender = () => {
        setDropDown(!dropDown);
    };

    const onSelectedItem = (item) => {
        setDropDown(false)
        onSelect(item)
    }

  return (
    <>
    <View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow}>
            <Text style={styles.text}>{selectedItem.sport !== "" ? selectedItem.sport : `Select sports`}</Text>
            <TouchableOpacity style={styles.arrow} onPress={dropDownGender}>
                <ArrowDown />
            </TouchableOpacity>
        </TouchableOpacity>            
    </View>
        { dropDown && 
            <View style={styles.dropDownStyle}>
            {
                sports.map((item, index) => 
                <TouchableOpacity key={index} onPress={() => onSelectedItem(item)}>
                    <Text style={[styles.text, {height: 30}]}>{item.sport}</Text>
                </TouchableOpacity>
                )
            }
            </View>
        }
    </>
  );
};

export default SelectSport;