import { StyleSheet } from "react-native";
 
const styles = StyleSheet.create({
    container:{
        flex:1
    },
    hamButton: {
        position:'absolute', 
        zIndex:1, 
        left: 24, 
        top: 24
    },
    likeButton: {
        position:'absolute', 
        zIndex:1, 
        right: 24, 
        top: 24
    }
})

export default styles;