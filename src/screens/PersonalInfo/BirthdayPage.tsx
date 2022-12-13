import React, { useState } from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import SelectDays from "../../components/Select/SelectDays";
import SelectMonth from "../../components/Select/SelectMonth";
import SelectYears from "../../components/Select/SelectYears";
import styles from "./PersonalInfoStyle";


const BirthdayPage = ({setTab}) => {
    return(
        <View style={{width: "100%"}}>
            <Text style={styles.textTitle}>What’s your birthday?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128, flexDirection: "row", justifyContent: "space-between"}]}>
                <View style={{width: 94}}>
                    <SelectDays />
                </View>
                <View style={{width: 94}}>
                    <SelectMonth />
                </View>
                <View style={{width: 94}}>
                    <SelectYears />
                </View>
            </View>
            <View style={styles.buttonFrame}>
                <Pressable style={styles.button}>
                    <Text style={styles.buttonText} onPress={() => setTab(4)}>Next</Text>
                </Pressable>
            </View>
        </View>  
    );
}

export default BirthdayPage;