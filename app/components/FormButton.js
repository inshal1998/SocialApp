import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import { windowHeight } from "../utils/Dimensions";
const FormButton = ({buttonTitle , ...rest}) => {
    return (
            <TouchableOpacity style={styles.btnContainer} {...rest}>
                <Text style={styles.btnText}>{buttonTitle}</Text>
            </TouchableOpacity>
    )
}

export default FormButton

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
    btnText : {
        fontSize:18,
        fontWeight:'bold',
        color:'#ffffff',
        fontFamily:'Lato-Regular'
    }
})
