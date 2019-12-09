/* eslint-disable no-undef */
import React, { Component } from "react";

import {
  StyleSheet,
  Text,
  View,
  TextInput,
  TouchableOpacity,
  ToastAndroid
} from "react-native";

export default class Logo extends Component<{}> {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  signIn = async () => {
    const { email, password } = this.state;
    const params = { email, password };
    try {
      const result = await ENDPOINT.login(params);
      const myJSON = JSON.stringify(params);
      alert(myJSON);
      console.log({ result });
      if (result.token.length > 0) {
        this.props.navigation.navigate("Home");
      } else {
        ToastAndroid.show("Failed to login", ToastAndroid.SHORT);
      }
    } catch (error) {
      ToastAndroid.show("error.networkError", ToastAndroid.SHORT);
    }
  };
  render() {
    const { email, password } = this.state;
    return (
      <View style={styles.container}>
        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Email"
          placeholderTextColor="#fff"
          editable
          value={email}
          onChangeText={email => this.setState({ email })}
        />

        <TextInput
          style={styles.inputBox}
          underlineColorAndroid="rgba(0,0,0,0)"
          placeholder="Password"
          secureTextEntry={true}
          placeholderTextColor="#fff"
          editable
          value={password}
          onChangeText={password => this.setState({ password })}
        />

        <TouchableOpacity style={styles.button} onPress={this.signIn}>
          <Text style={styles.buttonText}>{this.props.type}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    justifyContent: "center",

    alignItems: "center"
  },

  inputBox: {
    width: 300,

    backgroundColor: "#6E757B",

    borderRadius: 25,

    paddingHorizontal: 16,

    fontSize: 16,

    color: "#fff",

    marginVertical: 10
  },

  button: {
    width: 300,

    backgroundColor: "#1c313a",

    borderRadius: 25,

    marginVertical: 10,

    paddingVertical: 13
  },

  buttonText: {
    fontSize: 16,

    fontWeight: "500",

    color: "#fff",

    textAlign: "center"
  }
});
