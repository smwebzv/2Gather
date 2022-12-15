import React, { useState } from 'react';
import {TouchableOpacity, View, Text, FlatList } from 'react-native';
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import styles from './SelectLevel.style';

interface IProps{
    selectedItemLevel: ItemPropsLevel,
    onSelectLevel: (item: ItemPropsLevel) => void
}

interface ItemPropsLevel{
    level: string
    id: number
}

const SelectLevel = ({selectedItemLevel, onSelectLevel}: IProps) => {

    const [dropDown, setDropDown] = useState(false);
    const [levels, setLevel] = useState([
        {
            level: "Beginner1",
            id: 1,
        },
        {
            level: "Beginner2",
            id: 2,
        },
        {
            level: "Intermediate1",
            id: 3,
        },
        {
            level: "Intermediate2",
            id: 4,
        },
        {
            level: "Advanced",
            id: 5,
        },
    ]);

    const dropDownGender = () => {
        setDropDown(!dropDown);
    };

    const onSelectedItem = (item) => {
        setDropDown(false)
        onSelectLevel(item)
    }

  return (
    <>
    <View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow}>
            <Text style={[styles.text, selectedItemLevel.level !== "" &&{color: "#2D2D2D"}]}>{selectedItemLevel.level !== "" ? selectedItemLevel.level : `Select level`}</Text>
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
                    <TouchableOpacity key={index} onPress={() => onSelectedItem(item)}>
                        <Text style={[styles.text, {height: 30}]}>{item.level}</Text>
                    </TouchableOpacity>
                    }
            />
        }
    </>
  );
};
export default SelectLevel;