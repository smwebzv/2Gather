import { StyleSheet, Dimensions } from "react-native";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
    mainContainer: {
        position: 'absolute',
        width: dimensions.width,
        height: 70,
        bottom: 0,
        left: 0,
        flex: 1,
        backgroundColor: 'white',
        flexDirection: 'row',
        alignItems:'center',
        justifyContent:'space-around'
    }
});