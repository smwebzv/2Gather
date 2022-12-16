import React, {useState} from "react";
import styles from "./Login.style";
import { SafeAreaView, Text, View, TextInput, TouchableOpacity, Linking, KeyboardAvoidingView} from "react-native";
import GoogleLogo from "../../assets/icons/googleLogo.svg";
import AppleLogo from "../../assets/icons/appleLogo.svg";
import Eye from "../../assets/icons/eye.svg";
import EyeOff from "../../assets/icons/eyeOff.svg";
import { useDispatch } from "react-redux";
import { setProfile, setToken } from "../../redux/actions/AuthAction";
import Button from "../../components/Button/Button";

const Login = ({navigation}) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(true);
    
    const login = () => {
        dispatch(setToken(true));
        dispatch(setProfile(true))
    }
    return(
        <SafeAreaView style={styles.container}>
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
                    <Button title={"Login"} onPress={login}/>
                    <Text style={[styles.text, {fontSize: 14, paddingVertical: 36, textAlign: "center"}]}>OR</Text>
                    <TouchableOpacity style={styles.google} onPress={() => Linking.openURL('https://accounts.google.com')}>
                        <GoogleLogo />
                        <Text style={styles.googleText}>Login with Google</Text>
                    </TouchableOpacity>
                    <TouchableOpacity style={[styles.google, {backgroundColor: "#000000", marginBottom: 0}]} onPress={() => Linking.openURL('https://developer.apple.com')}>
                        <AppleLogo />
                        <Text style={[styles.googleText, {color: "#fff"}]}>Login with Apple</Text>
                    </TouchableOpacity>
                    <View style={styles.textFrame}>
                        <Text style={[styles.text, {fontSize: 14, paddingTop: 68, paddingRight: 11}]}>Don’t have an account yet?</Text>
                        <Text 
                            style={[styles.text, {fontSize: 14, color: "#4A5EE5"}]}
                            onPress={() => navigation.navigate("SignUp")}
                        >
                        Sign Up
                        </Text>
                    </View>
                </View>
            </View>
        </SafeAreaView>
    );
}

export default Login;