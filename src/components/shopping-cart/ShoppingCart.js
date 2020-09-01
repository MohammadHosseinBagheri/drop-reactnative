import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import {connect} from 'react-redux';
import {Icon, Button} from 'native-base';
import {addToCart, removeFromCart} from '../../redux/cart/action/cart';
import ShoppingCartItem from '../shoping-cart-item/ShoppingCartItem';
import TotalPrice from './TotalPrice';
const ItemMini = (props) => {
  const {addedItem, addItemToCart, removeItemFromCart} = props;
  return <ShoppingCartItem addedItem={addedItem} />;
};
const ItemFull = (props) => {
  const {addedItem, addItemToCart, removeItemFromCart, totalPrice} = props;
  console.log(props);
  return (
    <ScrollView style={{flex: 1,zIndex:20}} contentContainerStyle={{flex: 1,zIndex:20}}>
      <ScrollView style={{flex: 0.5}}>
        {addedItem.map((item) => (
          <ShoppingCartItem addedItem={item} />
        ))}
      </ScrollView>
      <View style={{flex: 1.5, marginHorizontal: 40, justifyContent: 'center'}}>
        <Text style={{marginTop: 10, color: '#B0BEC5', fontWeight: 'bold'}}>
          Tips for waiters
        </Text>
        <View
          style={{
            justifyContent: 'space-between',
            flexDirection: 'row',
            marginTop: 10,
            width:'100%'
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
          <TotalPrice
            color={'#B0BEC5'}
            title={'Tips'}
            totalPrice={totalPrice}
          />
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
    </ScrollView>
  );
};

const ShoppingCart = ({
  addedItem,
  addItemToCart,
  removeItemFromCart,
  totalPrice,
}) => {
  return (
    <SwipeUpDown
      style={{padding: 0, backgroundColor: '#37474F',zIndex:0}}
      animation="spring"
      swipeHeight={150}
      itemMini={
        addedItem.length != 0 ? (
          <ItemMini
            addedItem={addedItem[0]}
            removeItemFromCart={removeItemFromCart}
            addItemToCart={addItemToCart}
          />
        ) : null
      }
      itemFull={
        <ItemFull
          addedItem={addedItem}
          removeItemFromCart={removeItemFromCart}
          addItemToCart={addItemToCart}
          totalPrice={totalPrice}
        />
      }
    />
  );
};
const acumulateTotalPrice = (state) => {
  return state.reduce(
    (acumulatePrice, item) => acumulatePrice + item.quantity * item.srm,
    0,
  );
};
const mapStateToProps = (state) => {
  return {
    addedItem: state.cart.addedToCart,
    totalPrice: acumulateTotalPrice(state.cart.addedToCart),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addToCart(item)),
    removeItemFromCart: (item) => dispatch(removeFromCart(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCart);

const styles = StyleSheet.create({});
