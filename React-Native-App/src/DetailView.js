import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Image } from 'react-native';
import ArtistList from './ArtistList';
import {getDetails} from './api-client';

export default class DetailView extends Component <Props> {
    state = {
        artists: null
    }
    componentDidMount() {
        this.setState({artists:[this.props.artistDetails]});
        
     
    }
    
render(){
    console.log(this.state.artists)
    const artists = this.state.artists;
    return(
        <View>
{artists&& <ArtistList artist={artists}/>}
        </View>
        );
}
}