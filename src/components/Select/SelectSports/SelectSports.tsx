import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList } from 'react-native';
import styles from './SelectSports.style';
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import MinusCircle from "../../../../assets/icons/minusCircle.svg";

interface IProps{
    selectedItem: ItemProps [],
    onSelect: (index: number, outsideIndex: number) => void,
    handleAddSports:() => void,
    sports: any
    outsideIndex: number
}

interface ItemProps{
    sport: string
    id: number
}

const SelectSport = ({selectedItem, onSelect, sports, outsideIndex}: IProps) => {

    const [dropDown, setDropDown] = useState(false);

    const dropDownGender = () => {
        setDropDown(!dropDown);
    };

    const onSelectedItem = (index, outsideIndex) => {
        setDropDown(false)
        onSelect(index, outsideIndex)
    }
    
  return (
    <>
    <View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow}>
            <Text style={[styles.text, selectedItem[outsideIndex]?.sport !== "" &&{color: "#2D2D2D"}]}>{selectedItem[outsideIndex]?.sport !== "" ? selectedItem[outsideIndex]?.sport : `Select sports`}</Text>
            <TouchableOpacity style={styles.arrow} onPress={dropDownGender}>
                <ArrowDown />
            </TouchableOpacity>
        </TouchableOpacity>            
    </View>
        { dropDown && 
            <FlatList 
                style={styles.dropDownStyle}
                data={sports}
                renderItem={({item, index}) => 
                (item.selected === false && outsideIndex !== -1) ?
                <TouchableOpacity key={index} onPress={() =>  onSelectedItem(index, outsideIndex)}>
                    <Text style={[styles.text, {height: 30}]}>{item.sport}</Text>
                </TouchableOpacity>
                :
                null
                }
            />
        }
    </>
  );
};

export default SelectSport;