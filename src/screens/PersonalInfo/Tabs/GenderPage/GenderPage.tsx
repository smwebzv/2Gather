import React, { useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import SelectGender from "../../../../components/Select/SelectGender/SelectGender";
import styles from "./GenderPage.style";

interface ItemProps{
    label: string
    id: number
}

const GenderPage = ({setTab}) => {

    const [selectedItem, setSelectedItem] = useState<ItemProps>({
        label: "",
        id: 0,
    }
    );
    
    const onSelect = (item) => {
        setSelectedItem(item)
    }

    return(
        <View style={styles.container}>
            <Text style={styles.textTitle}>What’s your gender?</Text>
            <View style={[styles.inputHolder, {marginBottom: 128}]}>
                <SelectGender selectedItem={selectedItem} onSelect={onSelect}/>
            </View>
            <View style={styles.buttonFrame}>
                <TouchableOpacity style={[styles.button, selectedItem.label === "" &&{backgroundColor: "#F4F3FF4D"}]}>
                    <Text style={styles.buttonText} onPress={() => selectedItem.label === "" ? null : setTab(3)}>Next</Text>
                </TouchableOpacity>
            </View>
        </View> 
    );
}

export default GenderPage;