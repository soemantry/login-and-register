import React, { Component } from 'react';

import {
  StyleSheet,
  Text,
  View,
  StatusBar,
  TouchableOpacity,
  ToastAndroid
} from 'react-native';

import Logo from '../Components/Logo';

import Form from '../Components/Form';

import { Actions } from 'react-native-router-flux';

export default class Login extends Component<{}> {
  signup() {
    Actions.signup();
  }

  render() {
    return (
      <View style={styles.container}>
        <Logo />

        <Form type="Login" />

        <View style={styles.signupTextCont}>
          <Text style={styles.signupText}>Dont have an account yet?</Text>

          <TouchableOpacity onPress={this.signup}>
            <Text style={styles.signupButton}> Signup</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#010327",

    flex: 1,

    alignItems: 'center',

    justifyContent: 'center',
  },

  signupTextCont: {
    flexGrow: 1,
    justifyContent: 'center',

    flexDirection: 'row',
  },

  signupText: {
    color: 'rgba(255,255,255,0.6)',

    fontSize: 16,
  },

  signupButton: {
    color: '#ffffff',

    fontSize: 16,

    fontWeight: '500',
  },
});
