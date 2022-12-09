import React, { useState } from "react";
import {View, Text, TextInput, Pressable} from "react-native";
import SelectBirthday from "../../components/Select/SelectBirthday";
import styles from "./PersonalInfoStyle";


const BirthdayPage = ({setTab}) => {
    return(
        <View style={{width: "100%"}}>
            <Text style={styles.textTitle}>What’s your birthday?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128, flexDirection: "row", justifyContent: "space-between"}]}>
                <View style={{width: 94}}>
                    <SelectBirthday />
                </View>
                <View style={{width: 94}}>
                    <SelectBirthday />
                </View>
                <View style={{width: 94}}>
                    <SelectBirthday />
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