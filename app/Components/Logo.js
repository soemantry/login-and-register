import React, { Component } from "react";

import { StyleSheet, Text, View, Image } from "react-native";

export default class Logo extends Component<{}> {
  render() {
    return (
      <View style={styles.container}>
        <Image
          style={{ width: 80, height: 70 }}
          source={require("./logo.png")}
        />

        <Text style={styles.logoText}>SubChapter App</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,

    justifyContent: "flex-end",

    alignItems: "center"
  },

  logoText: {
    marginVertical: 15,

    fontSize: 18,

    color: "rgba(255, 255, 255, 0.7)"
  }
});
