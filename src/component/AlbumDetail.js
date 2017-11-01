import React from 'react';
import {View, Text} from 'react-native';
import Card from './card';
import CardSection from './cardSection';

const AlbumDetails = (props) => {
    return (
        <Card>
            <CardSection>
                <View></View>
                <View>
                    <Text>{props.album.title}</Text>
                    <Text>{props.album.artist}</Text>
                </View>

            </CardSection>
        </Card>
    );
};
const styles={
    headerContentStyle:{
        flexDirection:'column',
        justifyContent:'space-around'
    }
}
export default AlbumDetails;