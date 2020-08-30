import React from 'react';
import {StyleSheet, Text, TouchableOpacity, Dimensions} from 'react-native';

const {width} = Dimensions.get('window');
const ButtonWidth = (width * 20) / 100;

const TitleBar = ({title, index, scrollPress}) => {
  return (
    <TouchableOpacity
      onPress={() => scrollPress(index)}
      style={styles.container}>
      <Text style={styles.textContent}>{title}</Text>
    </TouchableOpacity>
  );
};

export default TitleBar;

const styles = StyleSheet.create({
  container: {
    marginHorizontal: '2%',
    flexDirection: 'row',
    width: ButtonWidth,
    justifyContent: 'center',
  },
  textContent: {
    textAlign: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    color: 'white',
  },
});
