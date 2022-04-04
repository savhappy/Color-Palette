import React from 'react';

import { View, Text, StyleSheet } from 'react-native';

const ColorBox = ({ colorName, hexCode }) => {
  const boxColor = {
    backgroundColor: hexCode,
  };
  return (
    <View style={[styles.box, boxColor]}>
      <Text style={styles.boxText}>
        {colorName}: {hexCode}
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    margin: 5,
    padding: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    elevation: 2,
  },
  cyan: {
    backgroundColor: '#2aa198',
  },
  boxText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default ColorBox;
