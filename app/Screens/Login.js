import React ,{useState} from 'react'
import { Image, StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { FormInput,FormButton,SocialButton } from '../components'

const Login = () => {
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    return (
        <View style={styles.container}>
            <Image style={styles.logo} source={require('../assets/rn-social-logo.png')} />
             <Text style={styles.text}>My Social App</Text>
             <FormInput
                labelValue={email}
                onChangeText = {(userEmail)=>{setemail(userEmail)}}
                placeHolderTxt='Email'
                iconType='user'
                keyboardType = 'email-address'
                autoCapitalize = "none"
                autoCorrect = {false}
             />
             <FormInput
                labelValue={password}
                onChangeText = {(userPassword)=>{setpassword(userPassword)}}
                placeHolderTxt='Password'
                iconType='lock'
                secureTextEntry = {true}
                autoCapitalize = "none"
                autoCorrect = {false}
             />
             <FormButton
                buttonTitle="Sign In"
                onPress = {()=>alert("Sign In Clicked")}
             />
            <TouchableOpacity style={styles.forgoBtn}>
                <Text style={styles.navButtonText}>Forgot Password ? </Text>
            </TouchableOpacity>

            <SocialButton
                buttonTitle="Sign In With Facebook"
                btnType='facebook'
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress = {()=>{alert("Login with facebook")}}
            />

            <SocialButton
                buttonTitle="Sign In With Google"
                btnType='google'
                color="#4867aa"
                backgroundColor="#e6eaf4"
                onPress = {()=>{alert("Login with Google")}}
            />


            <TouchableOpacity style={styles.forgoBtn}>
                <Text style={styles.navButtonText}>Dont have an Account ? Create One </Text>
            </TouchableOpacity>


        </View>
    )
}

export default Login

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#f9fafd',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 10
    },
    logo :{
        height:150,
        width:150,
        resizeMode:'cover'
    },
    text:{
        fontFamily:'Kufam-SemiBoldItalic',
        fontSize:28,
        marginBottom:10,
        color:'#051d5f'
    },
    navButton :{
        marginTop:15,
    },
    navButtonText :{
        fontSize:18,
        fontFamily:'Lato-Regular',
        color:'#2e64e5',
        fontFamily:'Lato-Regular'
    },
    forgoBtn :{
        marginVertical:35,
    }
})
