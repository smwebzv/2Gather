import React, { useState } from "react";
import {View, Text, Touchable, TouchableOpacity} from "react-native";
import styles from "./PersonalInfoStyle";
import SelectSports from "../../components/Select/SelectSports";
import MinusCircle from "../../assets/icons/minusCircle.svg";
import SelectLevel from "../../components/Select/SelectLevel";

interface ItemProps{
    sport: string,
    id: number
}

interface ItemPropsLevel{
    level: string
    id: number
}

const SportsPage = ({setTab}) => {
    const [sports, setSports] = useState([
        {
            sport: "Football",
            id: 1,
        },
        {
            sport: "Basketball",
            id: 2,
        },
        {
            sport: "Volleyball",
            id: 3,
        },
        {
            sport: "Tennis",
            id: 4,
        },
        {
            sport: "Handball",
            id: 5,
        },
        {
            sport: "Table tennis",
            id: 6,
        }
    ]);

    const [selectedItem, setSelectedItem] = useState<ItemProps>({
        sport: "",
        id: 0,
    }
    );

    const [selectedItemLevel, setSelectedItemLevel] = useState<ItemPropsLevel>({
        level: "",
        id: 0,
    }
    );

    const onSelect = (item) => {
        setSelectedItem(item)
    }

    const onSelectLevel = (item) => {
        setSelectedItemLevel(item)
    }

    const handleAddSports = () => {
        const newSports = {
            sport: "",
            id: 0
        };
        setSports([...sports, newSports]);
    };

    return(
        <View style={{width: "100%"}}>
            <Text style={[styles.textTitle, {paddingBottom: 30}]}>What sports are you into?</Text>
            <View style={{flexDirection: "row", }}>
                <Text style={styles.textTitle}>1.</Text>
                <View style={{flexDirection: "row", alignItems: "flex-start"}}>
                    <View style={{marginHorizontal: 12, width: 300}}>
                        <View style={{marginBottom: 8}}>
                            <SelectSports selectedItem={selectedItem} onSelect={onSelect} handleAddSports={handleAddSports} sports={sports}/>
                        </View>
                        <View>
                            <SelectLevel selectedItemLevel={selectedItemLevel} onSelectLevel={onSelectLevel}/>
                        </View>
                    </View>
                    <TouchableOpacity>
                        <MinusCircle />
                    </TouchableOpacity>
                </View>
            </View>
            <View style={[styles.buttonFrame, {alignItems: "flex-start", marginTop: 16, paddingHorizontal: 27}]}>
                <TouchableOpacity 
                    style={[styles.button, (selectedItem.sport === "" || selectedItemLevel.level === "") &&{backgroundColor: "#F4F3FF4D"}]} 
                    onPress={() => (selectedItem.sport === "" || selectedItemLevel.level === "") ? null : handleAddSports()}
                >
                    <Text style={styles.buttonText}>Add sports</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SportsPage;