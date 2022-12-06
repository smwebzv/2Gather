import React from "react";
import {ImageBackground, Pressable, SafeAreaView, Text, View } from "react-native";
import styles from "./OnboardingStyle";
import Logo from "../../assets/logo/GATHER.svg";

const Onboarding = ({navigation}) => {
    
    return(
        <SafeAreaView>
            <ImageBackground
                source={require('../../assets/backgroundImages/backgroundOne.png')}
                style={styles.image} 
            >
                <Logo width={112} height={24}/>
                <Text style={styles.textTitle}>FIND PEOPLE & DO SPORTS</Text>
                <Text style={styles.text}>Explore sports activities nearby & Get together with like-minded people</Text>
                <View style={[styles.buttonFrame, {width: "100%"}]}>
                    <Pressable style={[styles.button, {width: "100%"}]} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Let's Go</Text>
                    </Pressable>
                </View>
            </ImageBackground>
        </SafeAreaView>
    )
}

export default Onboarding;