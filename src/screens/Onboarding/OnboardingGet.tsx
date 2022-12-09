import React from "react";
import {ImageBackground, Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./OnboardingStyle";
import Logo from "../../assets/logo/GATHER.svg";

const OnboardingGet = ({navigation}) => {
    return(
    <SafeAreaView style={styles.container}>
            <Logo width={112} height={24}/>
            <Text style={styles.textTitle}>Welcome to 2GATHER</Text>
            <Text style={[styles.text, {width: 288, paddingBottom: 124}]}>Help us to get to know you better. We have a few questions for you. Ready?</Text>
            <View style={styles.buttonFrame}>
                <Pressable style={styles.button} onPress={() => navigation.navigate("PersonalInfo")}>
                    <Text style={styles.buttonText}>Get started</Text>
                </Pressable>
            </View>
    </SafeAreaView>
    );
}

export default OnboardingGet;