import { StyleSheet } from "react-native";
import fonts from "../../helpers/fonts";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    text:{
        fontFamily: fonts.interSemiBold,
        fontSize: 24,
        color: "#FFFFFF",
    },
    inputHolder:{
        width: "100%",
        paddingHorizontal: 24,
        marginBottom: 24
    },
    emailText:{
        fontFamily: fonts.interSemiBold,
        fontSize: 14,
        color: "#FFFFFF",
        paddingBottom: 8
    },
    input:{
        width: "100%",
        height: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 17,
        fontFamily: fonts.interRegular,
        fontSize: 14,
        color: "#000",
        backgroundColor: "#ffffff",
        borderRadius: 6,
    },
    eye:{
        position: "absolute",
        top: 40,
        right: 40,
    },
    checkAndWarrning:{
        width: "100%"
    },
    checkFrame:{
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingLeft: 24
    },
    warrningTerms: {
        fontFamily: fonts.interMedium,
        fontSize: 12,
        color: "#FB4B4E",
        position: "absolute",
        left: 24,
    },
    warrningHolder: {
        display: "flex",
        width: "100%",
        textAlign: "left",
        paddingBottom: 17
    },
    buttonFrame:{
        width: "100%",
        paddingHorizontal: 31,
        marginBottom: 68,
        marginTop: 17
    },
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
    },
    google:{
        height: 50,
        backgroundColor: "#fff",
        borderRadius: 6,
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 16
    },
    googleText: {
        fontSize: 14,
        fontFamily: fonts.interSemiBold,
        color: "#000",
        paddingLeft: 15,
    },
    textFrame: {
        width: "100%",
        paddingHorizontal: 66,
        flexDirection: "row",
        alignItems: "flex-end",
        justifyContent: "center"
    }
})

export default styles