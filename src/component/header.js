//import lib for making comp
import React from 'react';
import {Text, View} from 'react-native';

//make a component
const Header = () => {
    const {textStyle,viewStyle} = styles;
    return (
        <View style={viewStyle}>
            <Text style={textStyle}>Albums !</Text>
        </View>
    );
};
const styles = {
    viewStyle: {
        backgroundColor: '#F8F8F8',
        justifyContent:'center',
        alignItems:'center',
        height:60,
        paddingTop:15,
        
    },
    textStyle: {
        fontSize: 20
    }
};
//make component avail to other parts of the app
export default Header;
