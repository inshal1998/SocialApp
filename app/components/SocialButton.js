import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { windowHeight , windowWidth } from "../utils/Dimensions";
import FontAwesome  from "react-native-vector-icons/FontAwesome";
const SocialButton = ({buttonTitle , color , backgroundColor , btnType , ...rest}) => {
    let bgColor = backgroundColor
    return (
            <TouchableOpacity style={[styles.btnContainer , {backgroundColor:bgColor}]} {...rest}>
                <View style={styles.iconWrapper}>
                    <FontAwesome name={btnType} size={22} color={color}  />
                </View>
                <View style={styles.btnTxtWrapper}>
                    <Text style={[styles.btnText , {color:color}]}>{buttonTitle}</Text>
                </View>
            </TouchableOpacity>
    )
}

export default SocialButton

const styles = StyleSheet.create({
    btnContainer :{
        marginTop: 10,
        width:'100%',
        height:windowHeight/15,
        backgroundColor:"#2e64e5",
        padding:10,
        alignItems:'center',
        justifyContent:'center',
        borderRadius:5
    },
    iconWrapper:{
        width:30,
        justifyContent:'center',
        alignItems:'center'
    },
    btnTxtWrapper:{
        flex:1,
        justifyContent:'center',
        alignItems:'center'
    },
    btnText : {
        fontSize:18,
        fontWeight:'bold',
        fontFamily:'Lato-Regular'
    }
})
