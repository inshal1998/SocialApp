import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'
import AntDesign from "react-native-vector-icons/AntDesign";
import { windowHeight, windowWidth } from '../utils/Dimensions';
const FormInput = ({labelValue , placeHolderTxt , iconType , ...rest}) => {
    return (
        <View style={styles.inputContainer}>
            <View style={styles.iconStyle}>
                <AntDesign
                    name={  iconType }
                    size={25}
                    color="#666"
                />
            </View>
            <TextInput
                style={styles.input}
                placeholder={placeHolderTxt}
                value={labelValue}
                placeholderTextColor='#666'
                {...rest}

            />
        </View>
    )
}

export default FormInput

const styles = StyleSheet.create({
    inputContainer: {
        marginTop: 5,
        marginBottom: 5,
        width: '100%',
        height: windowHeight/15,
        borderColor: '#ccc',
        borderRadius: 5,
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: '#fff',
    },
    iconStyle :{
        padding: 10,
        height:'100%',
        justifyContent: 'center',
        alignItems: 'center',
        borderRightColor: '#ccc',
        borderRightWidth: 1,
        width: 50,
    },
    input :{
        padding: 10,
        flex: 1,
        fontSize: 16,
        fontFamily:'Lato-Regular',
        color: '#333',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputField :{
        padding: 10,
        marginTop: 5,
        marginBottom: 10,
        width:windowWidth/1.2,
        height: windowHeight/15,
        fontSize: 16,
        borderRadius: 5,
        borderWidth: 1,
    }
})