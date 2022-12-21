import {StyleSheet} from "react-native";
import fonts from "../../helpers/fonts";


const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    textTitle: {
        fontFamily: fonts.interBold,
        fontSize: 18,
        textAlign: "center",
        color: "#ffffff",
        paddingTop: 60
    },
    text: {
        width: 312,
        color: "#ffffff",
        fontSize: 15,
        fontFamily: fonts.interMedium,
        textAlign: "center",
        paddingTop: 16,
        paddingBottom: 100
    },
    buttonFrame: {
        paddingHorizontal: 31,
        width: "100%"
    },
    button: {
        width: "100%",
        height: 36,
        borderRadius: 4,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#4A5EE5",
        paddingHorizontal: 16
    },
    buttonText: {
        color: "#ffffff",
        fontSize: 14,
        fontFamily: fonts.interSemiBold
    }
})

export default styles;