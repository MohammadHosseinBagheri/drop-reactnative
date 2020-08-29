import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Right, Left, Body} from 'native-base';

const MyHeader = ({left, body, right,backgroundColor}) => {
  return (
    <View style={[styles.container,{backgroundColor}]}>
      <Left style={styles.headerItem}>{left || null}</Left>
      <Body style={styles.headerItem}>{body || null}</Body>
      <Right style={styles.headerItem}>{right || null}</Right>
    </View>
  );
};

export default MyHeader;

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 55,
    alignItems: 'center',
    justifyContent: 'center',
  },
  headerItem: {
    height: '100%',
    justifyContent: 'center',
  },
});
