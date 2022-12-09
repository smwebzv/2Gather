import React, { useState } from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import styles from "./PersonalInfoStyle";

const NamePage = ({setTab}) => {

    return(
        <View style={{width: "100%"}}>
            <Text style={styles.textTitle}>What’s your name?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128}]}>
                <TextInput
                style={styles.input}
                >
                </TextInput>
            </View>
            <View style={styles.buttonFrame}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => setTab(2)}>Next</Text>
                </Pressable>
            </View>
        </View>        
    );
}

export default NamePage;