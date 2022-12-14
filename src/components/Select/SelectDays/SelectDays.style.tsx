import {StyleSheet} from "react-native";
import fonts from "../../../helpers/fonts";

const styles = StyleSheet.create({
    containter: {
      width: "100%",
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      paddingLeft: 9,
      paddingRight: 5,
      fontFamily: fonts.interRegular,
      fontSize: 14,
      color: "#000",
      backgroundColor: "#ffffff",
      borderRadius: 6,
    },
    textAndArrow: {
      width: "100%",
      height: "100%",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between"
    },
    text:{
      color: "#757F8C",
      fontSize: 14,
      fontFamily: fonts.interRegular
    },
    arrow:{
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center"
    },
    dropDownStyle:{
      width: "100%",
      maxHeight: 300,
      position: "absolute",
      top: 50,
      left: 0,
      backgroundColor: "#fff",
      paddingLeft: 17,
      paddingTop: 10,
      borderBottomLeftRadius: 0,
      borderBottomRightRadius: 0,
      overflow: "hidden",
      zIndex: 1
    },
})

export default styles;