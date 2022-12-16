import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList } from 'react-native';
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import { levelsData } from '../../../helpers/levelsData';
import styles from './SelectLevel.style';

interface IProps{
    selectedItemLevel: ItemPropsLevel [],
    onSelectLevel: (index: number, level: string) => void
    outsideIndex: number
}

interface ItemPropsLevel{
    level: string
    sport: string
    id: number
}

const SelectLevel = ({selectedItemLevel, onSelectLevel, outsideIndex}: IProps) => {

    const [dropDown, setDropDown] = useState(false);
    const [levels, setLevel] = useState(levelsData);

    const dropDownGender = () => {
        setDropDown(!dropDown);
    };

    const onSelectedItem = (level, outsideIndex) => {
        setDropDown(false)
        onSelectLevel(outsideIndex, level)
    }

  return (
    <>
    <View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow}>
            <Text style={[styles.text, selectedItemLevel[outsideIndex].level !== "" &&{color: "#2D2D2D"}]}>{selectedItemLevel[outsideIndex].level !== "" ? selectedItemLevel[outsideIndex].level : `Select level`}</Text>
            <TouchableOpacity style={styles.arrow} onPress={dropDownGender}>
                <ArrowDown />
            </TouchableOpacity>
        </TouchableOpacity>            
    </View>
        { dropDown && 
            <FlatList 
                style={styles.dropDownStyle}
                data={levels}
                renderItem={({item, index}) => 
                    <TouchableOpacity key={index} onPress={() => onSelectedItem(item.level, outsideIndex)}>
                        <Text style={[styles.text, {height: 30}]}>{item.level}</Text>
                    </TouchableOpacity>
                    }
            />
        }
    </>
  );
};
export default SelectLevel;