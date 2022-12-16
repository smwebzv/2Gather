import React, { useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import SelectDays from "../../../../components/Select/SelectDays/SelectDays";
import SelectMonth from "../../../../components/Select/SelectMonth/SelectMonth";
import SelectYears from "../../../../components/Select/SelectYears/SelectYears";
import styles from "./BirthdayPage.style";


const BirthdayPage = ({setTab}) => {
    const [selectedItemDay, setSelectedItemDay] = useState(false);
    const [selectedItemMonth, setSelectedItemMonth] = useState(false);
    const [selectedItemYear, setSelectedItemYear] = useState(false);

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>What’s your birthday?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128, flexDirection: "row", justifyContent: "space-between"}]}>
                <View style={styles.dateFrame}>
                    <SelectDays selectedItemDay={selectedItemDay} setSelectedItemDay={setSelectedItemDay}/>
                </View>
                <View style={styles.dateFrame}>
                    <SelectMonth selectedItemMonth={selectedItemMonth} setSelectedItemMonth={setSelectedItemMonth}/>
                </View>
                <View style={styles.dateFrame}>
                    <SelectYears selectedItemYear={selectedItemYear} setSelectedItemYear={setSelectedItemYear}/>
                </View>
            </View>
            <View style={styles.buttonFrame}>
                <TouchableOpacity style={[styles.button, (!selectedItemDay || !selectedItemMonth || !selectedItemYear) &&{backgroundColor: "#F4F3FF4D"}]}>
                    <Text style={styles.buttonText} onPress={() => (!selectedItemDay || !selectedItemMonth || !selectedItemYear)? null : setTab(4)}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>  
    );
}

export default BirthdayPage;