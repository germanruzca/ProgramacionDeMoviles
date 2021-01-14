import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, Alert, Header } from 'react-native';
import { Actions, Scene, Router } from 'react-native-router-flux';
import ArtistList from './ArtistList';
import { getMusicInfo } from './api-client';


export default class HomeView extends Component {

    state = {
        artists: null
    }

    componentDidMount() {
        getMusicInfo().then(data => this.setState({ artists: data }));

    }

  
    ButtonAlert = () =>
        Alert.alert(
            "Atención ",
            `Vas a cerrar sesión`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => Actions.login() }
            ],
            { cancelable: false }
        );

    render() {
        const artists = this.state.artists
        const data = this.props;
        if (data.email != '') {
            return (
                
                <View style={styles.container}>
                    {artists && <ArtistList artist={artists} />}
                    {/* <Button
                        style={styles.button}
                        onPress={() => this.ButtonAlert()}
                        title="Cerrar sesión"
                        accessibilityLabel="Boton para iniciar sesión"
                        color="gray"
                    /> */}
                </View>
            )
        }
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'gray',
    }
});
