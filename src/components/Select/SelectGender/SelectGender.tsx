import React, { useRef, useState } from 'react';
import {TouchableOpacity, View, Text, ScrollView} from 'react-native';
import styles from './SelectGender.style';
import ArrowDown from "../../../assets/icons/arrowDown.svg";
import {Picker} from '@react-native-picker/picker';


const SelectGender = () => {
    const [gender, setGender] = useState();

  return (
    <View style={styles.containter}>
        <Picker
        selectedValue={gender}
        onValueChange={(itemValue, itemIndex) => setGender(itemValue)}
        style={{width: "100%", color: "#2D2D2D"}}
        >   
            <Picker.Item label="Select gender" value="select gender" style={styles.text}/>
            <Picker.Item label="Male" value="male" style={styles.text}/>
            <Picker.Item label="Female" value="female" style={styles.text}/>
        </Picker>
    </View>
  );
};

export default SelectGender;