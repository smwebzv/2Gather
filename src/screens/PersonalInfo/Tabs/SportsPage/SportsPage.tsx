import React, { useEffect, useState } from "react";
import {View, Text, TouchableOpacity} from "react-native";
import styles from "./SportPage.style";
import SelectSports from "../../../../components/Select/SelectSports/SelectSports";
import MinusCircle from "../../../../assets/icons/minusCircle.svg";
import SelectLevel from "../../../../components/Select/SelectLevel/SelectLevel";
import { sportsData } from "../../../../helpers/sportsData";
import { useDispatch } from "react-redux";
import { setSubmitProfile } from "../../../../redux/actions/AuthAction";


interface ItemProps{
    sport: string,
    id: number
}

interface ItemPropsLevel{
    level: string
    id: number
}

const SportsPage = () => {
    const dispatch = useDispatch();
    const [sports, setSports] = useState(sportsData);
    const [cart, setCart] = useState([
        {
            sport: "",
            id: 0,
            level: ""
        }
    ])

    const handleSelectedSport = (index, outsideIndex) => {
        let oldCart = [...sports];
        let cartt = [...cart]
        if(oldCart[index]?.selected === true){
            oldCart[index].selected = false
            cartt[outsideIndex] = oldCart[index]
        }else{
            oldCart[index].selected = true;
            oldCart.map((item, indx)=> {
                if(item.sport === cartt[outsideIndex].sport){
                    item.selected = false
                }
            })
            cartt[outsideIndex] = oldCart[index]

        }
        setSports(oldCart);
        setCart(cartt);
     }

    const handleSelectedType = (index, item) => {
        let oldCart = [...cart];
        oldCart[index].level = item
        setCart(oldCart);
    }
    const handleAddSports = () => {
        const oldCart = cart.slice();
            oldCart.push({
                sport: "",
                id: 0,
                level: ""
            })
        setCart(oldCart);
    };

    const removeFromCart = (index) => {
        const oldCart = cart.slice();
        const oldSports = [...sports];
        console.log(index);
        oldSports.map((item, indx) => {
            if(oldCart[index].sport == item.sport){
                item.selected = false
            }
        })
        setSports(oldSports);
        oldCart.splice(index, 1);
        setCart(oldCart);
    }

    useEffect(() => {
        if(((cart[0]?.sport === "" && cart[0]?.level === "") || cart.length === 0)){
            dispatch(setSubmitProfile(false))
        }else{
            dispatch(setSubmitProfile(true))
        }
    }, [cart])

    return(
        <View style={styles.container}>
            <Text style={[styles.textTitle, {paddingBottom: 30}]}>What sports are you into?</Text>
            {
            cart.map((item, index) =>
            <>
            <View style={styles.selectFrame} key={index}>
                <Text style={[styles.textTitle, {paddingTop: 0, paddingRight: 12}]}>{index +1}.</Text>
                <View style={{width: "100%"}}>
                    <View style={{marginBottom: 16}}>
                        <View style={{marginBottom: 8}} key={index}>
                            <SelectSports selectedItem={cart} onSelect={handleSelectedSport} sports={sports} handleAddSports={handleAddSports} outsideIndex={index}/>
                        </View>
                        <View>
                            <SelectLevel selectedItemLevel={cart} onSelectLevel={handleSelectedType} outsideIndex={index}/>
                        </View>
                    </View>
                </View>
                <TouchableOpacity onPress={() => removeFromCart(index)} style={styles.circleFrame}>
                    <MinusCircle />
                </TouchableOpacity>
            </View>
            </>
            )
            }
            <View style={styles.buttonFrame}>
                <TouchableOpacity 
                    style={[styles.button, ((cart[0]?.sport === "" && cart[0]?.level === "") || cart.length === 0) &&{backgroundColor: "#F4F3FF4D"}]} 
                    onPress={() =>  handleAddSports()}
                >
                    <Text style={styles.buttonText}>Add sports</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default SportsPage;