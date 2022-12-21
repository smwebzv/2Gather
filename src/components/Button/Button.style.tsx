import { StyleSheet } from "react-native";
import fonts from "../../helpers/fonts";

const styles = StyleSheet.create({
    button: {
        width: "100%",
        height: 36,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4A5EE5",
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: fonts.interSemiBold
    }
})

export default styles;