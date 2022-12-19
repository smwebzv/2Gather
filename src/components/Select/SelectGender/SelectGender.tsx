import React, { useRef, useState } from 'react';
import {TouchableOpacity, View, Text} from 'react-native';
import styles from './SelectGender.style';
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import {Picker} from '@react-native-picker/picker';

interface IProps{
    selectedItem: ItemProps,
    onSelect: (item: ItemProps) => void
}

interface ItemProps{
    label: string
    id: number
}

const SelectGender = ({selectedItem, onSelect}: IProps) => {
    const [gender, setGender] = useState('Select gender');

  return (
    <View style={styles.containter}>
        <Picker
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        mode={'dropdown'}
        style={{width: "100%", backgroundColor: "#fff", color: "#2D2D2D"}}
        >   
            <Picker.Item label="Select gender" value="select gender" style={styles.text}/>
            <Picker.Item label="Male" value="male" style={styles.text}/>
            <Picker.Item label="Female" value="female" style={styles.text}/>
        </Picker>
    </View>
  );
};

export default SelectGender;