import React, {useState}from "react";
import {ImageBackground, SafeAreaView, View, Text, Touchable, TouchableOpacity} from "react-native";
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

    const changeTab = (type: string) => {
        if(type === "skip"){
            if(tab === 5){
                setTab(5)
            }else{
                setTab(tab +1)
            }
        }else{
            if(tab === 1){
                setTab(1)
            }else{
                setTab(tab - 1)
            }
        }
    }

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.skip} onPress={() => changeTab("skip")}>
                <Text style={{color: "#fff"}}>SKIP</Text>
            </TouchableOpacity>
                {tab === 1 && <NamePage setTab={setTab}/>}
                {tab === 2 && <GenderPage setTab={setTab}/>}
                {tab === 3 && <BirthdayPage setTab={setTab}/>}
                {tab === 4 && <PhotoPage setTab={setTab}/>}
                {tab === 5 && <SportsPage />}

                <View style={styles.arrowFrame}>
                    <TouchableOpacity onPress={() => changeTab("back")}>
                        <ArrowLeft/>
                    </TouchableOpacity>
                    <View style={styles.dotsFrame}>
                        {[...Array(5)].map((item, index)=>
                            <View style={[styles.dots, (index + 1) === tab &&{width: 17, backgroundColor: "#48C5B5"}]} key={index}></View>
                        )}
                    </View>
                    <TouchableOpacity onPress={() => changeTab("skip")}>
                        <ArrowRight />
                    </TouchableOpacity>
                </View>         
        </SafeAreaView>
    );
}

export default PersonalInfo;