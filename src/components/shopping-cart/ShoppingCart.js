import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  Image,
  TouchableOpacity,
  Dimensions,
  FlatList,
} from 'react-native';
import SwipeUpDown from 'react-native-swipe-up-down';
import {connect} from 'react-redux';
import {Icon, Button} from 'native-base';
import {addToCart, removeFromCart} from '../../redux/cart/action/cart';
import ShoppingCartItem from '../shoping-cart-item/ShoppingCartItem';
import TotalPrice from './TotalPrice';
import FullItemContent from './FullItemContent';
const ItemMini = (props) => {
  const {addedItem, addItemToCart, removeItemFromCart} = props;
  return <ShoppingCartItem addedItem={addedItem} />;
};
const ItemFull = (props) => {
  const {addedItem, addItemToCart, removeItemFromCart, totalPrice} = props;
  return (
    <View
      style={{flex: 1, zIndex: 20}}>
      <FlatList
      style={{flex:0.5,zIndex:10}}
        data={addedItem}
        ListEmptyComponent={() => <Text>s</Text>}
        renderItem={({item, index}) => <ShoppingCartItem addedItem={item} />}
      />
      <FullItemContent
        addedItem={addedItem}
        removeItemFromCart={removeItemFromCart}
        addItemToCart={addItemToCart}
        totalPrice={totalPrice}
      />
    </View>
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
      style={{padding: 0, backgroundColor: '#37474F', zIndex: 0}}
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
