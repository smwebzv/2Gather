import {StyleSheet} from "react-native";
import fonts from "../../../helpers/fonts";

const styles = StyleSheet.create({
    containter: {
      minWidth: "100%",
      height: 50,
      borderRadius: 6,
      backgroundColor: "#fff",
      paddingLeft: 13
    },
    textAndArrow: {
      width: "100%",
      flexDirection: "row",
      alignItems: 'center',
      justifyContent: "space-between"
    },
    text:{
      color: "#2D2D2D",
      fontSize: 14,
      fontFamily: fonts.interRegular,
      position: "absolute",
      right: 7,
    },
    dropDownText:{
      fontSize: 14,
      fontFamily: fonts.interRegular,
      color: "#757F8C",
      position: "absolute",
      left: 7,
    },
    arrow:{
      width: 24,
      height: 24,
      alignItems: "center",
      justifyContent: "center"
    },
    dropDownStyle:{
      borderBottomLeftRadius: 6,
      borderBottomRightRadius: 6,
      backgroundColor: "#fff",
      shadowColor: "transparent",
    },
})

export default styles;