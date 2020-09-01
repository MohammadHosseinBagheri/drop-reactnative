import React from 'react';
import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import {Icon} from 'native-base';
import {connect} from 'react-redux';
import {
  addToCart,
  removeFromCart,
  deleteCart,
} from '../../redux/cart/action/cart';
const ShoppingCartItem = (props) => {
  const {addedItem, addItemToCart, removeItemFromCart, deleteFromCart} = props;
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#37474F',
        width: '100%',
        height: '100%',
        flexDirection: 'row',
        alignItems: 'flex-start',
        padding: 10,
      }}>
      <View
        style={{
          position: 'absolute',
          left: 50,
          right: 0,
          backgroundColor: '#FFD600',
          width: 50,
          zIndex: 20,
          marginTop: 5,
          height: 25,
          borderRadius: 8,
        }}>
        <Text style={{textAlign: 'center', fontSize: 14, fontWeight: 'bold'}}>
          {'\u00A3'}
          {addedItem.srm}
        </Text>
      </View>

      <View
        style={{
          width: 80,
          height: 110,
          backgroundColor: '#263238',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: 15,
        }}>
        <Image
          source={{uri: addedItem.image_url}}
          style={{width: '50%', height: '60%'}}
          resizeMode="stretch"
        />
      </View>

      <View
        style={{
          flexDirection: 'column',
          marginLeft: 15,
          justifyContent: 'center',
          alignItems: 'flex-start',
          alignSelf: 'center',
          marginBottom: 20,
          flex: 1,
        }}>
        <Text style={{color: 'white', fontSize: 16, fontWeight: 'bold'}}>
          {addedItem.name}
        </Text>
        <Text
          style={{fontWeight: 'bold', fontSize: 12, color: '#EEEEEE'}}
          numberOfLines={1}>
          {addedItem.tagline}
        </Text>
      </View>

      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-around',
          flex: 1,
          alignItems: 'center',
          alignSelf: 'center',
          marginBottom: 20,
        }}>
        <TouchableOpacity
          style={{
            borderTopLeftRadius: 8,
            borderBottomLeftRadius: 8,
            borderColor: 'white',
            borderWidth: 1,
            height: 20,
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',zIndex:20
          }}
          onPress={() => {removeItemFromCart(addedItem);
          console.log('clicked')}}>
          <Icon
            name="remove"
            style={{fontSize: 25, color: 'white', fontWeight: 'bold'}}
          />
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            height: 20,
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <Text style={{color: 'white', fontSize: 15, fontWeight: 'bold'}}>
            {addedItem.quantity}
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => addItemToCart(addedItem)}
          style={{
            borderTopRightRadius: 8,
            borderBottomRightRadius: 8,
            borderColor: '#FFD600',
            borderWidth: 1,
            height: 20,
            width: '25%',
            justifyContent: 'center',
            alignItems: 'center',
            backgroundColor: '#FFD600',
          }}>
          <Icon name="add" style={{fontSize: 25}} />
        </TouchableOpacity>
        <TouchableOpacity
          onPress={() => deleteFromCart(addedItem)}
          style={{
            marginLeft: 'auto',
          }}>
          <Icon name="trash" style={{fontSize: 20, color: '#d50000'}} />
        </TouchableOpacity>
      </View>
    </View>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    addItemToCart: (item) => dispatch(addToCart(item)),
    removeItemFromCart: (item) => dispatch(removeFromCart(item)),
    deleteFromCart: (item) => dispatch(deleteCart(item)),
  };
};
export default connect(null, mapDispatchToProps)(ShoppingCartItem);

const styles = StyleSheet.create({});
