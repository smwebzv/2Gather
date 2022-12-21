import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    container:{
        width: "100%",
        height: "100%",
        backgroundColor: "#FFFFFF",
    },
    topContainer:{
        width: "100%",
        height: "10%",
        borderBottomColor:"#F5F5F5",
        boxShadow: "0px 1px 4px rgba(122, 122, 123, 0.12)",
        marginBottom: 1, 
    },
    backArrow:{
        display: "flex",
        paddingTop: 52,
        paddingRight:  10,
        paddingBottom: 0,
        paddingLeft: 20,
        width: 44,
        height: 24,
    },
    profileTitle:{
        width:340,
        height: 24,
        paddingLeft: 40,
        paddingBottom: 2,
        color: "#000000",
        textAlign: "center",
        fontSize: 18,
        fontWeight: "700",
    },
    lineStyle:{
        borderWidth: 1,
        borderColor:'#F5F5F5',
   },
    profileContent:{
        width: "100%",
    },
    profileInfo:{
        display:"flex",
        flexDirection: "row",
        width: "100%",
        marginLeft: 10,
    },
    logo:{
        position:"absolute",
        left: 30,
        display: "flex",
        width: 60,
        height: 60,
        marginTop:20,
    },

    profileName:{
        width: 86,
        marginLeft:120,
        marginTop:20,
        color:"#000000",
        fontSize: 16,
        
    },
    username:{
        display: "flex",
        width: 86,
        height:39,
        marginLeft:120,
        color:"#808080",
    },

    number:{
        fontSize: 18,
        textAlign: "center",
        color:"#000000"
    },
    stats:{
        fontSize: 13,
        textAlign: "center",
        color: "#808080",
    },
    profileStat:{
        
        width: 80,
        height: 50,
        marginTop:10,
        paddingLeft: 18,
    },
    box:{
        width: 100,
        display:'flex',
        flexDirection:"row",
        paddingLeft: 10,
    }
})

export default styles;