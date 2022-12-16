import React from "react";
import {SafeAreaView, Text, TouchableOpacity, View } from "react-native";
import styles from "./OnboardingGet.style";
import Logo from "../../assets/logo/GATHER.svg";

const OnboardingGet = ({navigation}) => {
    return(
    <SafeAreaView style={styles.container}>
            <Logo width={112} height={24}/>
            <Text style={styles.textTitle}>Welcome to 2GATHER</Text>
            <Text style={[styles.text, {width: 288, paddingBottom: 124}]}>Help us to get to know you better. We {"\n"} have a few questions for you. Ready?</Text>
            <View style={styles.buttonFrame}>
                <TouchableOpacity style={styles.button} onPress={() => navigation.navigate("PersonalInfo")}>
                    <Text style={styles.buttonText}>Get started</Text>
                </TouchableOpacity>
            </View>
    </SafeAreaView>
    );
}

export default OnboardingGet;