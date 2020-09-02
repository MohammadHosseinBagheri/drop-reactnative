import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const PagesTitle = ({title}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
    </View>
  );
};

export default PagesTitle;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: '#37474F',
    paddingVertical: 20,
  },
  text: {textAlign: 'center', fontSize: 16, color: 'white'},
});
