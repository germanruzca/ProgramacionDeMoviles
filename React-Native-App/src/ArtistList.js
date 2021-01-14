import React, { Component } from 'react';
import { render } from 'react-dom';
import { StyleSheet, View, Text, Image, FlatList, SafeAreaView } from 'react-native';
import ArtistBox from './ArtistBox';

export default class ArtistList extends Component<Props> {
    constructor(props) {
        super(props)
        this.state = {
            dataSource: null
        }
    }
    componentDidMount() {
        this.updateDataSource(this.props.artist);
    }
    componentWillReceivedNewProps(newProps) {
        if (newProps.artist !== this.props.artist) {
            this.updateDataSource(newProps.artist)
        }
    }
    updateDataSource(data) {
        this.setState({
            dataSource:data
        }
        )
    }
    render() {
            return (
                <SafeAreaView>
                <FlatList
                data={this.state.dataSource}
                renderItem={(artist) => {
                            return <ArtistBox artist={artist} />
                        }}
                keyExtractor={artist=> artist.id}
              />
              </SafeAreaView>
            ) 
    }
}