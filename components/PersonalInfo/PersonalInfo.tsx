import React, {useState}from "react";
import {ImageBackground, SafeAreaView, View, Text} from "react-native";
import BirthdayPage from "./BirthdayPage";
import GenderPage from "./GenderPage";
import NamePage from "./NamePage";
import styles from "./PersonalInfoStyle";

const PersonalInfo = () => {

    return(
        <SafeAreaView>
            <ImageBackground
                source={require('../../assets/backgroundImages/backgroundOne.png')}
                style={styles.image} 
            >
            {/*<NamePage />*/}
            {/*<GenderPage />*/}
            <BirthdayPage />           
            </ImageBackground>
        </SafeAreaView>
    );
}

export default PersonalInfo;