import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    button: {
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
        height: 50,
        width: "100%",
        justifyContent: "flex-start",
        borderRadius: 6,
        paddingHorizontal: 17
      },
      buttonText: {
        width: "100%",
        flex: 1,
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "flex-start",
        color: "#757F8C",
        fontFamily: 'Inter',
        fontWeight: "400",
        fontSize: 14,
      },
      dropdown: {
        width: 200,
        position: 'absolute',
        backgroundColor: '#fff',
        top:50,
      },
})

export default styles;