import { TouchableOpacity } from "react-native";
import { StyleSheet, TextInput } from 'react-native';
import React, { Component } from 'react';
import style from "./styles";

export default class BlankTextInput extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <TextInput
        style={this.props.style}
        onChangeText={(text) => this.setState({text})}
        // value={this.props.text}
        placeholder={this.props.text}
      />
    );
  }
}

BlankTextInput.defaultProps = {
  style: style.textinput,
  text: "BlankInput"
}