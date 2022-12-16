import React  from "react";
import {View, Text, TextInput, TouchableOpacity} from "react-native";
import styles from "./NamePage.style";

const NamePage = ({setTab}) => {

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>What’s your name?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128}]}>
                <TextInput
                style={styles.input}
                >
                </TextInput>
            </View>
            <View style={styles.buttonFrame}>
                <TouchableOpacity style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => setTab(2)}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>        
    );
}

export default NamePage;