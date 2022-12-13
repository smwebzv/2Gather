import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    containter: {
      width: "100%",
      height: 50,
      alignItems: "flex-end",
      justifyContent: "center",
      paddingLeft: 17,
      paddingRight: 13,
      fontFamily: 'Inter',
      fontWeight: "400",
      fontSize: 14,
      color: "#000",
      backgroundColor: "#ffffff",
      borderRadius: 6,
    },
    textAndArrow: {
      width: "100%",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between"
    },
    text:{
      color: "#757F8C",
      fontSize: 14,
      fontWeight: "400",
      fontFamily: "Inter"
    },
    arrow:{
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center"
    },
    dropDownStyle:{
      width: "100%",
      position: "absolute",
      top: 50,
      left: 0,
      backgroundColor: "#fff",
      paddingLeft: 17,
      paddingTop: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      alignItems: "flex-start",
      justifyContent: "center",
      zIndex: 10,
    },
})

export default styles;