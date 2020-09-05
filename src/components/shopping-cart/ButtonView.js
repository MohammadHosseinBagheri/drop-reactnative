import React from 'react';
import {StyleSheet, View,Dimensions} from 'react-native';
import CustomButton from './CustomButton';
const ButtonView = () => {
  return (
    <View style={styles.contentView}>
      <CustomButton style={styles.leftButton} title={'ZERO'} />
      <CustomButton style={styles.button} title={'ROUNDUP'} />
      <CustomButton style={styles.button} title={'10%'} />
      <CustomButton style={styles.rightButton} title={'CUSTOM'} />
    </View>
  );
};

export default ButtonView;

const styles = StyleSheet.create({
    contentView: {
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: 10,
        width: '100%',
      },
      leftButton: {
        backgroundColor: '#FFD600',
        paddingHorizontal: (Dimensions.get('window').width * 1.5) / 100,
        borderTopLeftRadius: 20,
        borderBottomLeftRadius: 20,
      },
      button: {
        backgroundColor: '#FFD600',
        paddingHorizontal: (Dimensions.get('window').width * 1.5) / 100,
      },
      rightButton: {
        backgroundColor: '#FFD600',
        paddingHorizontal: (Dimensions.get('window').width * 1.5) / 100,
        borderTopRightRadius: 20,
        borderBottomRightRadius: 20,
      },
});
