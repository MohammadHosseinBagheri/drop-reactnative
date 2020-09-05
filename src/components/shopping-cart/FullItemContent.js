import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button} from 'native-base';
import TotalPrice from './TotalPrice';
import CustomButton from './CustomButton';
import ButtonView from './ButtonView';
const FullItemContent = ({totalPrice}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Tips for waiters</Text>
      <ButtonView />
      <View style={{marginTop: 25}}>
        <TotalPrice color={'#B0BEC5'} title={'Tips'} totalPrice={totalPrice} />
        <TotalPrice
          color={'#B0BEC5'}
          mt={10}
          title={'Subtotal'}
          totalPrice={totalPrice}
        />
        <TotalPrice
          size={15}
          mt={25}
          mb={8}
          title={'Total'}
          totalPrice={totalPrice}
        />
        <Button style={styles.payment} full>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Confirm Payment
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default FullItemContent;

const styles = StyleSheet.create({
  container: {flex: 1.7, marginHorizontal: 40, justifyContent: 'center'},
  title: {marginTop: 10, color: '#B0BEC5', fontWeight: 'bold'},
  payment: {backgroundColor: '#FFD600', borderRadius: 20},
});
