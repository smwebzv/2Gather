import React, { useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./SportPage.style";
import SelectSports from "../../../../components/Select/SelectSports/SelectSports";
import MinusCircle from "../../../../assets/icons/minusCircle.svg";
import SelectLevel from "../../../../components/Select/SelectLevel/SelectLevel";
import { sportsData } from "../../../../helpers/sportsData";

interface ItemProps{
    sport: string,
    id: number
}

interface ItemPropsLevel{
    level: string
    id: number
}

const SportsPage = () => {
    const [sports, setSports] = useState(sportsData);
    const [cart, setCart] = useState([
        {
            sport: "",
            id: 0
        }
    ])
    const [selectedSports, setSelectedSports] = useState([]);
    
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

    const handleSelectedSport = (index) => {
        let oldCart = [...sports];
        if(oldCart[index]?.selected === true){
            oldCart[index].selected = false
        }else{
            oldCart[index].selected = true
        }
        setSports(oldCart);
     }

    const handleAddSports = () => {
        const oldCart = cart.slice();
            oldCart.push({
                sport: "",
                id: 0
            })
        setCart(oldCart);
    };

    const removeFromCart = (index) => {
        const oldCart = cart.slice();
        oldCart.splice(index, 1);
        setCart(oldCart)
    }

    return(
        <View style={styles.container}>
            <Text style={[styles.textTitle, {paddingBottom: 30}]}>What sports are you into?</Text>
            {
            cart.map((item, index) =>
            <>
            <View style={styles.selectFrame}key={index}>
                <Text style={[styles.textTitle, {paddingTop: 0, paddingRight: 12}]}>{index +1}.</Text>
                <View style={{width: "100%"}}>
                    <View style={{marginBottom: 16}}>
                        <View style={{marginBottom: 8}} key={index}>
                            <SelectSports selectedItem={selectedItem} onSelect={handleSelectedSport} sports={sports} handleAddSports={handleAddSports} outsideIndex={index}/>
                        </View>
                        <View>
                            <SelectLevel selectedItemLevel={selectedItemLevel} onSelectLevel={onSelectLevel}/>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => removeFromCart()} style={styles.circleFrame}>
                    <MinusCircle />
                </TouchableOpacity>
            </View>
            </>
            )
            }
            <View style={styles.buttonFrame}>
                <TouchableOpacity 
                    style={[styles.button, (selectedItem.sport === "" || selectedItemLevel.level === "") &&{backgroundColor: "#F4F3FF4D"}]} 
                    onPress={() =>  handleAddSports()}
                >
                    <Text style={styles.buttonText}>Add sports</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SportsPage;