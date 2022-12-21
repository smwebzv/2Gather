import {StyleSheet} from "react-native";
import fonts from "../../../../helpers/fonts";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    textTitle: {
        fontFamily: fonts.interBold,
        fontSize: 18,
        textAlign: "center",
        color: "#ffffff",
        paddingBottom: 36
    },
    inputHolder:{
        width: "100%"
    },
    dateFrame: {
        width: 94
    },
    buttonFrame: {
        paddingHorizontal: 31,
        alignItems: "center",
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
})

export default styles;