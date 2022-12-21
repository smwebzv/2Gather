import { StyleSheet, Dimensions } from "react-native";
const dimensions = Dimensions.get("screen");

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: 'white'
    },
    map: {
        ...StyleSheet.absoluteFillObject
    }
});