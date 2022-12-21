import React, {useState } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './SelectGender.style';
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import SelectDropdown from 'react-native-select-dropdown'

interface IProps{
  selectedItem: ItemProps,
  onSelect: (item: ItemProps) => void
}

interface ItemProps{
  label: string
  id: number
}

const SelectGender = ({selectedItem, onSelect}: IProps) => {

    const [dropDown, setDropDown] = useState(false);
    const [gender, setGender] = useState([
        {
            label: "Male",
            id: 1,
        },
        {
            label: "Female",
            id: 2,
        },
    ]);

    const dropDownGender = () => {
        setDropDown(!dropDown);
    };

    const onSelectedItem = (item) => {
        setDropDown(false)
        onSelect(item)
    }

  return (
    <>
    {/*<View style={[styles.containter, dropDown &&{borderBottomLeftRadius: 0, borderBottomRightRadius: 0}]}>
        <TouchableOpacity style={styles.textAndArrow} onPress={dropDownGender}>
            <Text style={[styles.text, selectedItem.label !== "" &&{color: "#2D2D2D"}]}>{selectedItem.label !== "" ? selectedItem.label : `Select gender`}</Text>
            <TouchableOpacity style={styles.arrow} onPress={dropDownGender}>
                <ArrowDown />
            </TouchableOpacity>
        </TouchableOpacity>            
    </View>*/}
      <SelectDropdown
        buttonStyle={styles.containter}
        defaultButtonText="Select gender"
        buttonTextStyle={styles.text}
        rowStyle={{backgroundColor: "#fff"}}
        rowTextStyle={styles.text}
      	data={gender}
        onSelect={(selectedItem, index) => {
          console.log(selectedItem, index)
        }}
        buttonTextAfterSelection={ (selectedItem, index) => {
          return selectedItem.label
        }}
        rowTextForSelection={(item, index) => {
          return item.label
        }}
      />
        {/*{ dropDown && 
            <View style={styles.dropDownStyle}>
            {
                gender.map((item, index) => 
                <TouchableOpacity key={index} onPress={() => onSelectedItem(item)}>
                    <Text style={[styles.text, {height: 30, minWidth: "100%"}]}>{item.label}</Text>
                </TouchableOpacity>
                )
            }
            </View>
        }*/}
    </>
  );
};

export default SelectGender;