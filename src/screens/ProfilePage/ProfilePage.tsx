import React from 'react';
import { View,Image, Text,  TouchableOpacity } from 'react-native';
import styles from './ProfilePage.style';
import ArrowLeft from "../../assets/icons/leftArrow.svg";

const ProfilePage = ({}) => {
    return(
    <View style={styles.container}>
        <View style={styles.topContainer}>
            <TouchableOpacity style={styles.backArrow}>
            <ArrowLeft/>
            </TouchableOpacity>   
            <Text style={styles.profileTitle}>Iclal's Profile</Text>
        </View>
        <View
        style={styles.lineStyle}
        />
        <View style={styles.profileContent}>
            <View style={styles.profileContent}>
                <Image 
                style={styles.logo}
                source={{
                    uri: 'https://cdn-icons-png.flaticon.com/512/3135/3135715.png',
                  }}
                />
                <Text style={styles.profileName}>Iclal Keskin</Text>
                <Text style={styles.username}>@icllk</Text>
                <View style={styles.box}>
                    <View style={styles.profileStat}>
                        <Text style={styles.number}>13</Text>
                        <Text style={styles.stats}>followers</Text>
                    </View>
                    <View style={styles.profileStat}>
                        <Text style={styles.number}>11</Text>
                        <Text style={styles.stats}>following</Text>
                    </View>
                    <View style={styles.profileStat}>
                        <Text style={styles.number}>3</Text>
                        <Text style={styles.stats}>activities</Text>
                    </View>
                </View>
               
                
            </View>
        </View>
        
    </View>
    );
};
export default ProfilePage;
