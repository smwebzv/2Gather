import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        alignItems: "center",
        justifyContent: "center",
        paddingHorizontal: 24
    },
    skip:{
        alignItems: "center",
        textAlign: "center",
        position: "absolute",
        top: 48,
        right: 24
    },
    skipText:{
        color: "#FFFFFF",
        fontFamily: 'Roboto',
        fontStyle: "normal",
        fontWeight: "600",
        fontSize: 14,
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
    arrowFrame: {
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        position: "absolute",
        bottom: 63,
    },
    dotsFrame: {
        width: 85,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
    },
    dots:{
        width: 9,
        height: 9,
        backgroundColor: "#fff",
        borderRadius: 100
    },
    picture:{
        width: "100%",
        height: 312,
        backgroundColor: "#fff",
        borderRadius: 8,
        alignItems: "center",
        justifyContent: "center",
    },
    pictureIcon:{
        width: 64,
        height: 64
    },
    checkFrame:{
        width: "100%",
        flexDirection: "row",
        alignItems: "flex-start",
        justifyContent: "flex-start",
        paddingVertical: 18
    },
    text:{
        fontFamily: 'Inter',
        fontWeight: "600",
        fontSize: 24,
        color: "#FFFFFF",
    },
    pictureFrame:{
        width: "100%",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "space-between",
        paddingBottom: 31
    },
    pictureIcons: {
        width: 62,
        height: 62,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#fff",
        borderRadius: 4
    },
    close:{
        position: "absolute",
        left: 45,
        bottom: 45,
    }
})

export default styles;