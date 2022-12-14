import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { styles } from "./Menu.style";
import MapIcon from "../../assets/icons/mapIcon.svg";
import PlusIcon from "../../assets/icons/plusIcon.svg";
import ProfileIcon from "../../assets/icons/profileIcon.svg";

const Menu = () => {
    
    return(
        <View style={styles.mainContainer}>
           <TouchableOpacity>
            <MapIcon/>
           </TouchableOpacity>
           <TouchableOpacity>
            <PlusIcon/>
           </TouchableOpacity>
           <TouchableOpacity>
            <ProfileIcon/>
           </TouchableOpacity>
        </View>
    )
}

export default Menu;