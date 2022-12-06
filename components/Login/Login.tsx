import React, {useState} from "react";
import styles from "./LoginStyle";
import { SafeAreaView, ImageBackground, Text, View, TextInput, Pressable} from "react-native";
import GoogleLogo from "../../assets/icons/googleLogo.svg";
import AppleLogo from "../../assets/icons/appleLogo.svg";
import Eye from "../../assets/icons/eye.svg";
import EyeOff from "../../assets/icons/eyeOff.svg";

const Login = ({navigation}) => {

    const [showPassword, setShowPassword] = useState(true);

    return(
        <SafeAreaView>
            <ImageBackground
                source={require('../../assets/backgroundImages/backgroundOne.png')}
                style={styles.image} 
            >
            <Text style={styles.text}>Login</Text>
            <View style={styles.inputHolder}>
                <Text style={styles.emailText}>Email</Text>
                <TextInput 
                    style={styles.input}
                    placeholder="email@example.com"
                    placeholderTextColor="#757F8C"
                    >    
                </TextInput>
            </View>
            <View style={[styles.inputHolder, {marginBottom: 36}]}>
                <Text style={styles.emailText}>Password</Text>
                <TextInput 
                    style={styles.input}
                    placeholder= "at least 8 characters"
                    placeholderTextColor="#757F8C"
                    keyboardType={showPassword ? "numeric" : "visible-password"}
                    >           
                </TextInput>
                {
                    showPassword ? <Eye style={styles.eye} onPress={() => setShowPassword(!showPassword)} /> : 
                    <EyeOff style={styles.eye} onPress={() => setShowPassword(!showPassword)}/>
                }
                
            </View>
            <View style={styles.buttonFrame}>
                <View>
                    <Pressable style={styles.button} onPress={() => navigation.navigate("Login")}>
                        <Text style={styles.buttonText}>Login</Text>
                    </Pressable>
                    <Text style={[styles.text, {fontSize: 14, paddingVertical: 36, textAlign: "center"}]}>OR</Text>
                    <Pressable style={styles.google}>
                        <GoogleLogo />
                        <Text style={styles.googleText}>Login with Google</Text>
                    </Pressable>
                    <Pressable style={[styles.google, {backgroundColor: "#000000", marginBottom: 0}]}>
                        <AppleLogo />
                        <Text style={[styles.googleText, {color: "#fff"}]}>Login with Apple</Text>
                    </Pressable>
                    <View style={styles.textFrame}>
                        <Text style={[styles.text, {fontSize: 14, paddingTop: 68, paddingRight: 11}]}>Don’t have an account yet?</Text>
                        <Text 
                            style={[styles.text, {fontSize: 14, color: "#4A5EE5", textDecorationLine: "underline"}]}
                            onPress={() => navigation.navigate("SignUp")}
                        >
                        Sign Up
                        </Text>
                    </View>
                </View>
            </View>
            </ImageBackground>
        </SafeAreaView>
    );
}

export default Login;