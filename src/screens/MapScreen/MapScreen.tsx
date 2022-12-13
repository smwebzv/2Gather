import React from "react";
import styles from "./MapScreen.style";
import { SafeAreaView, TouchableOpacity, View } from "react-native";
import Map from "../../components/Map/Map";
import HamMenuIcon from "../../assets/icons/hamMenuIcon.svg";
import LikeIcon from "../../assets/icons/likeIcon.svg"

const MapScreen = ({}) => {
   
    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.hamButton}>
                <HamMenuIcon/>
            </TouchableOpacity>
            <TouchableOpacity style={styles.likeButton}>
                <LikeIcon/>
            </TouchableOpacity>
            <Map/>
        </SafeAreaView>
    );
}

export default MapScreen;