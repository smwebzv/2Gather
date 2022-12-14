import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container: {
        width: "100%"
    },
    textTitle: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        color: "#ffffff",
        paddingBottom: 36
    },
    inputHolder:{
        width: "100%"
    },
    input:{
        width: "100%",
        height: 50,
        alignItems: "center",
        justifyContent: "flex-start",
        paddingLeft: 17,
        fontFamily: 'Inter',
        fontWeight: "400",
        fontSize: 14,
        color: "#000",
        backgroundColor: "#ffffff",
        borderRadius: 6,
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
        fontWeight: "600",
        fontFamily: "Inter"
    },
})

export default styles;