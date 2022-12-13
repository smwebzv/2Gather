import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import styles from "./ButtonStyle";
import { NavigationProp } from "@react-navigation/native";

interface IProps {
    title: string;
    onPress: () => void;
    isActive?: boolean;
}

const Button = ({title, onPress, isActive} : IProps) =>  {

    return(
        <View>
            <TouchableOpacity style={[styles.button, isActive &&{backgroundColor: "red"}]} onPress={() => onPress()}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;