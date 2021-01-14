import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';
export default class ArtistBox extends Component<Props>{

    onPressArtist=(artist)=>{
Actions.detailsView({artistDetails:artist})
    }
    render() {
        const artist= this.props.artist.item;
        return (
            <TouchableOpacity onPress={()=>this.onPressArtist(artist)} key={artist.id} >
            <View style={styles.artistBox}>
               
                    <Image style={styles.image} source={{ uri: artist.image }} />
                    <View style={styles.info}>
                        <Text style={styles.name}>{artist.name}</Text>
                    </View>
           
            </View>
            </TouchableOpacity>

        )
    }
}

const styles = StyleSheet.create({
    artistBox: {
        margin: 5,
        backgroundColor: 'white',
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOpacity: .1,
        shadowOffset: {
            height: 1,
            width: -2
        },
        elevation: 2
    },
    image: {
        width: 150,
        height: 150
    },
    info: {
        flex: 1,
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center'
    },
    name: {
        fontSize: 20,
        marginTop: 10,
        color: '#333'
    }
});