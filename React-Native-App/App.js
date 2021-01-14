import React, { Component } from 'react';
import {Actions, Scene, Router} from 'react-native-router-flux';
import LoginView from './src/LoginView';
import HomeView from './src/HomeView';
import DetailView from './src/DetailView';

const scenes = Actions.create(
<Scene key='root'>
  <Scene key='login' component={LoginView}/>
  <Scene key='home'  hideNavBar  component={HomeView}/>
  <Scene key='detailsView'  component={DetailView}/>
  </Scene>
)

export default class App extends Component {
  render(){
    return <Router scenes={scenes}/>
  }
}