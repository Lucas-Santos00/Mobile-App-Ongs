import React from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

export default function BtnFilter({ backgroundColor, text, onPress }) {
  return (
    <TouchableOpacity 
      style={[styles.button, { backgroundColor }]} 
      onPress={onPress}
    >
      <Text style={styles.buttonText} numberOfLines={1}>{text}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    marginTop: 10,
    marginBottom: 10,
    paddingRight: 15,
    paddingLeft: 15,
    paddingBottom: 10,
    paddingTop: 10,
    borderRadius: 5,
    alignItems: 'center',
  },
  
  buttonText: {
    color: '#FFFFFF',
    fontSize: 13,
  },
});
