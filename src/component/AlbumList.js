import React, {Component} from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';

// const AlbumList = () => {
//     return (
//         <View>
//             <Text>Album List !!!</Text>
//         </View>
//     );
// };

class AlbumList extends Component {
    state = {albums: []};

    componentWillMount() {
        //use cmd +d for open debugger
        console.log("component will mount in album");
        axios.get('https://rallycoding.herokuapp.com/api/music_albums')
            .then(response => this.setState({
                albums: response.data
            }))
        ;

    }

    render() {
        console.log("state change",this.state);
        return (
            <View>
                <Text>
                    AlbumList !!!
                </Text>
            </View>
        );

    }
};
export default AlbumList;