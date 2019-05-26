/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View, Image} from 'react-native';
import { thisExpression } from '@babel/types';

const instructions = Platform.select({
  ios: 'Press Cmd+R to reload,\n' + 'Cmd+D or shake for dev menu',
  android:
    'Double tap R on your keyboard to reload,\n' +
    'Shake or press menu button for dev menu',
});

class Blink extends Component {
  constructor(props) {
    super(props);
    this.state = { isShowingText: true };

    setInterval(() => (
      this.setState(previousState => (
        { isShowingText: !previousState.isShowingText }
      ))
    ), 1000);
  }
  render() {
    if (!this.state.isShowingText) {
      return null;
    } else {
      return (<Text>{this.props.text}</Text>);
    }
  }
}

export default class App extends Component {
  render() {
    return (
      <View>
        <Blink text="This text will blink a lot lmao"/>
     </View>
    );
  }
}
