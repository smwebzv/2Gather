import React, { useState } from "react";
import styles from "./SelectStyle";
import { Text, TouchableOpacity } from 'react-native';
import ArrowDown from "../../assets/icons/arrowDown.svg";
import { Item } from "react-native-paper/lib/typescript/components/Drawer/Drawer";

interface IProps {
    label: string;
}

const Select = ({ label }: IProps) => {

    const [visible, setVisible] = useState(false);
    const genders = ["Male", "Female"];

    const toggleDropdown = () => {
        setVisible(!visible);
    };

    const renderDropdown = () => {
        if (visible) {
            return (
                <Text style={styles.dropdown}>
                    {genders.map((item, index) =>
                        <Text key={index}>{item}</Text>
                    )    
                    }
                </Text>
            );
        }
    };

    return (
        <TouchableOpacity
            style={styles.button}
            onPress={toggleDropdown}
        >
            {renderDropdown()}
            <Text style={styles.buttonText}>{label}</Text>
            <ArrowDown />
        </TouchableOpacity>
    );
}

export default Select;