import {StyleSheet} from "react-native";
import fonts from "../../../../helpers/fonts";

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: "100%",
        justifyContent: "flex-start",
        alignItems: "center",
        paddingHorizontal: 24
    },
    selectFrame: {
        flexDirection: "row", 
        alignItems: "flex-start"
    },
    textTitle: {
        fontFamily: fonts.interBold,
        fontSize: 18,
        textAlign: "center",
        color: "#ffffff",
        paddingTop: 100
    },
    buttonFrame: {
        alignItems: "flex-start",
        width: "100%",
    },
    button: {
        borderRadius: 4,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4A5EE5",
        paddingHorizontal: 16,
        paddingVertical: 8
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: fonts.interSemiBold
    },
    circleFrame: {
        paddingLeft: 12,
        paddingTop: 13
    }
})

export default styles;