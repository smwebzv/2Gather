import React, { useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import SelectGender from "../../../../components/Select/SelectGender/SelectGender";
import styles from "./GenderPage.style";

const GenderPage = ({setTab}) => {
    
    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>What’s your gender?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128}]}>
                <SelectGender />
            </View>
            <View style={styles.buttonFrame}>
                <TouchableOpacity style={[styles.button, {backgroundColor: "#F4F3FF4D"}]}>
                    <Text style={styles.buttonText} onPress={() => setTab(3)}>Next</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
}

export default GenderPage;