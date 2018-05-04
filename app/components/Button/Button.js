import { TouchableOpacity } from "react-native";
import { StyleSheet, Text, View } from 'react-native';
import React, { PropTypes } from 'react';
import style from "./styles";

const Button = props => {

  const { text, onPress } = props;

  return (
      <TouchableOpacity style={props.style} onPress={onPress}>
          <Text>{text}</Text>
      </TouchableOpacity>
  )
}

// Button.propTypes = {
//   style: React.PropTypes.object,
//   onPress: React.PropTypes.func.isRequired,
//   text: React.PropTypes.string
// }

Button.defaultProps = {
  style: style.button,
  text: "BUTTON DEFAULT TEXT"
}

export default Button