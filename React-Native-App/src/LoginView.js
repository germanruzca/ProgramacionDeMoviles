import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, Button, TextInput, Alert, } from 'react-native';
import {Actions, Scene, Router} from 'react-native-router-flux';

export default class LoginView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            input1: "",
            input2: ""
        }
    }

    onChangeTextInput1 = (text) => {

        this.setState({ input1: text })
    }
    onChangeTextInput2 = (text) => {
        this.setState({ input2: text })
    }
    onPressBtn = () => {
        Actions.home({email:this.state.input1, password: this.state.input2})
        this.setState({input1:'', input2:''})
}
    render() {
        return (
            <View style={styles.container}>
                <Image style={styles.logo} source={require('../assets/tenor.gif')} />
                <TextInput
                    placeholder="Email"
                    style={styles.input}
                    onChangeText={text => this.onChangeTextInput1(text)}
                    value={this.state.input1}
                />
                <TextInput
                    placeholder="Password"
                    style={styles.input}
                    onChangeText={text => this.onChangeTextInput2(text)}
                    value={this.state.input2}
                />
                <Button
                    style={styles.button}
                    onPress={() => this.onPressBtn()}
                    title="Click me!"
                    accessibilityLabel="Learn more button"
                    color="gray"
                />

            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'flex-start',
        marginTop: '30%'
    },

    logo: {
        width: 300,
        height: 170,
        alignSelf: 'center',
        marginBottom: 50,

    },
    input: {
        width: 300,
        height: 50,
        alignSelf: 'center',
        backgroundColor: '#e7a616',
        marginBottom: 40
    },
    button: {
        color: 'red',
        width: 200,
        height: 50,
        alignSelf: 'center',
        backgroundColor: 'gray'
    }
});
