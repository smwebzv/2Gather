import React, {useState}from "react";
import {ImageBackground, SafeAreaView, View, Text, Touchable, TouchableOpacity, Pressable} from "react-native";
import BirthdayPage from "./BirthdayPage";
import GenderPage from "./GenderPage";
import NamePage from "./NamePage";
import styles from "./PersonalInfoStyle";
import PhotoPage from "./PhotoPage";
import SportsPage from "./SportsPage";
import ArrowLeft from "../../assets/icons/leftArrow";
import ArrowRight from "../../assets/icons/rightArrow";
import { useDispatch } from "react-redux";
import { setProfile, setToken } from "../../redux/actions/AuthAction";

const PersonalInfo = () => {
    const [tab, setTab] = useState(1);
    const dispatch = useDispatch()
    
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

    const submitPersonalInfo = () => {
        dispatch(setToken(true))
        dispatch(setProfile(true))
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
                {tab === 5 && <SportsPage setTab={undefined} />}

                <View style={[styles.arrowFrame, tab === 5 && {justifyContent: "flex-start"}]}>
                    <TouchableOpacity onPress={() => changeTab("back")}>
                        <ArrowLeft/>
                    </TouchableOpacity>
                    {
                        tab !== 5 ? 
                        <View style={styles.dotsFrame}>
                        {[...Array(5)].map((item, index)=>
                            <View style={[styles.dots, (index + 1) === tab &&{width: 17, backgroundColor: "#48C5B5"}]} key={index}></View>
                        )}
                        </View>
                        :
                        <View style={{marginLeft: 95}}>
                            <TouchableOpacity style={styles.button} onPress={() => submitPersonalInfo()}>
                                <Text style={styles.buttonText}>Done</Text>
                            </TouchableOpacity>
                        </View>
                    }
                    {
                        tab !== 5 && 
                        <TouchableOpacity onPress={() => changeTab("skip")}>
                            <ArrowRight />
                        </TouchableOpacity>
                    }
                </View>         
        </SafeAreaView>
    );
}

export default PersonalInfo;