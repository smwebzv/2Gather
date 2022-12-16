import { TouchableOpacity, View, Text } from "react-native";
import React from "react";
import styles from "./Button.style";

interface IProps {
    title: string;
    onPress: () => void;
}

const Button = ({title, onPress} : IProps) =>  {

    return(
        <View>
            <TouchableOpacity style={styles.button} onPress={() => onPress()}>
                <Text style={styles.buttonText}>{title}</Text>
            </TouchableOpacity>
        </View>
    );
}

export default Button;