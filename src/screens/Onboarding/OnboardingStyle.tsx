import {StyleSheet} from "react-native";


const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
    },
    textTitle: {
        fontFamily: 'Inter',
        fontSize: 18,
        fontWeight: "700",
        textAlign: "center",
        color: "#ffffff",
        paddingTop: 60
    },
    text: {
        width: 312,
        color: "#ffffff",
        fontSize: 15,
        fontWeight: "700",
        fontFamily: 'Inter',
        textAlign: "center",
        paddingTop: 16,
        paddingBottom: 100
    },
    buttonFrame: {
        paddingHorizontal: 31,
    },
    button: {
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
        fontWeight: "600",
        fontFamily: "Inter"
    }
})

export default styles;