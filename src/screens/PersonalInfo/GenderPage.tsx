import React, { useState } from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import Select from "../../components/Select/Select";
import styles from "./PersonalInfoStyle";

const GenderPage = ({setTab}) => {

    return(
        <View style={{width: "100%"}}>
            <Text style={styles.textTitle}>What’s your gender?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128}]}>
                <Select label="Select gender" />
            </View>
            <View style={styles.buttonFrame}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => setTab(3)}>Next</Text>
                </Pressable>
            </View>
        </View> 
    );
}

export default GenderPage;