import React from 'react';
import {StyleSheet, Text, View, Dimensions} from 'react-native';
import {Button} from 'native-base';
import TotalPrice from './TotalPrice';
const FullItemContent = ({
  addedItem,
  removeItemFromCart,
  addItemToCart,
  totalPrice,
}) => {
  return (
    <View style={{flex: 1.7, marginHorizontal: 40, justifyContent: 'center'}}>
      <Text style={{marginTop: 10, color: '#B0BEC5', fontWeight: 'bold'}}>
        Tips for waiters
      </Text>
      <View
        style={{
          justifyContent: 'space-between',
          flexDirection: 'row',
          marginTop: 10,
          width: '100%',
        }}>
        <Button
          style={{
            backgroundColor: '#FFD600',
            paddingHorizontal: (Dimensions.get('window').width * 1.5) / 100,
            borderTopLeftRadius: 20,
            borderBottomLeftRadius: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>ZERO</Text>
        </Button>
        <Button
          style={{
            backgroundColor: '#FFD600',
            paddingHorizontal: (Dimensions.get('window').width * 1.5) / 100,
          }}>
          <Text style={{fontWeight: 'bold'}}>ROUNDUP</Text>
        </Button>
        <Button
          style={{
            backgroundColor: '#FFD600',
            paddingHorizontal: (Dimensions.get('window').width * 1.5) / 100,
          }}>
          <Text style={{fontWeight: 'bold'}}>10%</Text>
        </Button>
        <Button
          style={{
            backgroundColor: '#FFD600',
            paddingHorizontal: (Dimensions.get('window').width * 1.5) / 100,
            borderTopRightRadius: 20,
            borderBottomRightRadius: 20,
          }}>
          <Text style={{fontWeight: 'bold'}}>CUSTOM</Text>
        </Button>
      </View>
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
        <Button style={{backgroundColor: '#FFD600', borderRadius: 20}} full>
          <Text style={{fontSize: 15, fontWeight: 'bold'}}>
            Confirm Payment
          </Text>
        </Button>
      </View>
    </View>
  );
};

export default FullItemContent;

const styles = StyleSheet.create({});
