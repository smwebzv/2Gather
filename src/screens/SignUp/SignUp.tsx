import React, {useState} from "react";
import styles from "./SignUp.style";
import { SafeAreaView, TouchableOpacity, Text, View, TextInput, Linking} from "react-native";
import GoogleLogo from "../../assets/icons/googleLogo.svg";
import AppleLogo from "../../assets/icons/appleLogo.svg";
import Eye from "../../assets/icons/eye.svg";
import EyeOff from "../../assets/icons/eyeOff.svg";
import Check from "../../assets/icons/check.svg";
import Uncheck from "../../assets/icons/uncheck.svg";
import Button from "../../components/Button/Button";
import { setToken } from "../../redux/actions/AuthAction";
import { useDispatch } from "react-redux";

const SignUp = ({navigation}) => {
    const dispatch = useDispatch();
    const [showPassword, setShowPassword] = useState(true);
    const [check, setCheck] = useState(false);
    const [show, setShow] = useState(false);

    const signUp = () => {
        dispatch(setToken(true));
    }


    return(
    <SafeAreaView style={styles.container}>
        <Text style={[styles.text, { paddingBottom: 48}]}>Sign Up</Text>
        <View style={styles.inputHolder}>
            <Text style={styles.emailText}>Email</Text>
            <TextInput 
                style={styles.input}
                placeholder="email@example.com"
                placeholderTextColor="#757F8C"
                >    
            </TextInput>
        </View>
        <View style={styles.inputHolder}>
            <Text style={styles.emailText}>Password</Text>
            <TextInput 
                style={styles.input}
                placeholder= "at least 8 characters"
                placeholderTextColor="#757F8C"
                secureTextEntry={showPassword}
                >           
            </TextInput>
            {
                showPassword ? <Eye style={styles.eye} onPress={() => setShowPassword(!showPassword)} /> : 
                <EyeOff style={styles.eye} onPress={() => setShowPassword(!showPassword)}/>
            }
            
        </View>
        <View style={styles.checkAndWarrning}>
            <View style={styles.checkFrame}>
                {
                !check ? <Check onPress={() => [setShow(!show), setCheck(!check)]}/> : 
                <Uncheck onPress={() => [setShow(!show), setCheck(!check)]}/>
                }
                <Text style={[styles.text, {fontSize: 14, paddingLeft: 12, paddingBottom: 4}]}>I agree to the Terms and Privacy Policy.</Text>
            </View>
            <View style={styles.warrningHolder}>
                {
                    show && <Text style={styles.warrningTerms}>Please agree to the Terms and Conditions.</Text>
                }
            </View>
        </View>
        <View style={styles.buttonFrame}>
            <View>
                <Button title={"Sign Up"} onPress={() => !show && !check ? setShow(true) : signUp()}/>
                <Text style={[styles.text, {fontSize: 14, paddingVertical: 24, textAlign: "center"}]}>OR</Text>
                <TouchableOpacity style={styles.google} onPress={() => Linking.openURL('https://accounts.google.com')}>
                    <GoogleLogo />
                    <Text style={styles.googleText}>Sign up with Google</Text>
                </TouchableOpacity>
                <TouchableOpacity style={[styles.google, {backgroundColor: "#000000", marginBottom: 0}]} onPress={() => Linking.openURL('https://developer.apple.com')}>
                    <AppleLogo />
                    <Text style={[styles.googleText, {color: "#fff"}]}>Sign up with Apple</Text>
                </TouchableOpacity>
                <View style={styles.textFrame}>
                    <Text style={[styles.text, {fontSize: 14, paddingTop: 48, paddingRight: 11}]}>Don???t have an account yet?</Text>
                    <Text 
                        style={[styles.text, {fontSize: 14, color: "#4A5EE5"}]}
                        onPress={() => navigation.navigate("Login")}
                    >
                    Login
                    </Text>
                </View>
            </View>
        </View>
    </SafeAreaView>
    );
}

export default SignUp;