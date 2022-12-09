import React, {useState}from "react";
import {ImageBackground, SafeAreaView, View, Text} from "react-native";
import BirthdayPage from "./BirthdayPage";
import GenderPage from "./GenderPage";
import NamePage from "./NamePage";
import styles from "./PersonalInfoStyle";
import PhotoPage from "./PhotoPage";
import SportsPage from "./SportsPage";
import ArrowLeft from "../../assets/icons/leftArrow";
import ArrowRight from "../../assets/icons/rightArrow";
import Map from "../Map/Map";

const PersonalInfo = () => {
    const [tab, setTab] = useState(1);

    return(
        <SafeAreaView style={styles.container}>
            <Text style={styles.skip}>SKIP</Text>
                {tab === 1 && <NamePage setTab={setTab}/>}
                {tab === 2 && <GenderPage setTab={setTab}/>}
                {tab === 3 && <BirthdayPage setTab={setTab}/>}
                {tab === 4 && <PhotoPage setTab={setTab}/>}
                {tab === 5 && <SportsPage />}

                <View style={styles.arrowFrame}>
                    <ArrowLeft/>
                    <View style={styles.dotsFrame}>
                        <View style={styles.dots}></View>
                        <View style={styles.dots}></View>
                        <View style={styles.dots}></View>
                        <View style={styles.dots}></View>
                        <View style={styles.dots}></View>
                    </View>
                    <ArrowRight />
                </View>         
        </SafeAreaView>
    );
}

export default PersonalInfo;