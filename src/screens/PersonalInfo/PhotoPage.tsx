import React, { useState } from "react";
import {View, Text, Pressable, ImageBackground, TouchableOpacity} from "react-native";
import styles from "./PersonalInfoStyle";
import PictureIcon from "../../assets/icons/pictureIcon.svg";
import Check from "../../assets/icons/check.svg";
import Uncheck from "../../assets/icons/uncheck.svg";
import Plus from "../../assets/icons/plus.svg";
import ImagePicker from 'react-native-image-crop-picker';
import Close from "../../assets/icons/close.svg";


const PhotoPage = ({setTab}) => {
    const [check, setCheck] = useState(true);
    const [image, setImage] = useState("");
    const [show, setShow] = useState(false);
    const [selectPicture, setSelectPicture] = useState();

    const onSelectImage = () => {
        ImagePicker.openPicker({
            mediaType: "photo",
          }).then(image => {
            console.log(image);
            setImage(image.path);
            setShow(true);
          });
    }

    const cropImage = () => {
        ImagePicker.openCropper({
            path: image,
            mediaType: "photo",
            cropperCircleOverlay: true,
            freeStyleCropEnabled: true,
            compressImageQuality: 1,
        }).then(image => {
            console.log(image);
            setImage(image.path);
          });
    }

    const deletePicture = () => {
        setShow(false);
    }

    return(
        <View style={{width: "100%"}}>
            <Text style={[styles.textTitle, {paddingBottom: 24}]}>Okay Orhan, let’s add {"\n"} some photos to your profile.</Text> 
                <TouchableOpacity onPress={cropImage}>
                    <View style={styles.picture}>
                            <ImageBackground 
                                source={{
                                    uri: image
                                }}
                                style={{width: "100%", height: 312, position: "absolute"}}
                            />
                        <View style={styles.pictureIcon}>
                            <PictureIcon />
                        </View>
                    </View>
                </TouchableOpacity>
            <View style={styles.checkFrame}>
                {
                check ? <Check onPress={() => setCheck(!check)}/> : 
                <Uncheck onPress={() => setCheck(!check)}/>
                }
                <Text style={[styles.text, {fontSize: 14, paddingLeft: 12}]}>Set as profile image</Text>
            </View>
            <View style={styles.pictureFrame}>
                {
                [...Array(3)].map((item, index) =>
                <View style={styles.pictureIcons} key={index}>
                    {
                        show && 
                        <>
                            <ImageBackground 
                            source={{
                                uri: image
                            }}
                            style={{width: "100%", height: "100%", position: "absolute"}}
                            />
                            <TouchableOpacity style={styles.close} onPress={() => deletePicture()}>
                                <Close />
                            </TouchableOpacity>
                        </>
                    }
                    <PictureIcon width={24} height={24}/>
                </View>
                )
                }
                <View style={styles.pictureIcons} >
                    <Plus onPress={onSelectImage}/>
                </View>
            </View>
            <View style={[styles.buttonFrame, {marginBottom: 43}]}>
                <TouchableOpacity style={[styles.button ,check === true &&{backgroundColor: "#F4F3FF4D"}]}>
                    <Text style={styles.buttonText} onPress={() => check === true ? null : setTab(5)}>Next</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export default PhotoPage;


