import React from 'react';
import {StyleSheet, Text, View, Dimensions, Image} from 'react-native';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {addToCart} from '../../redux/cart/action/cart';
const {width} = Dimensions.get('window');

const ModalContent = ({modalItem, addToCart}) => {
  return (
    <View style={styles.viewContent}>
      <View style={styles.leftSide}>
        <Text style={styles.titleText}>{modalItem.name}</Text>
        <Text style={styles.tagLine}>{modalItem.tagline}</Text>
        <Text style={{color: 'white', fontSize: 12}}>{modalItem.srm}</Text>
        <Text numberOfLines={2} style={styles.description}>
          {modalItem.description}
        </Text>
        <Text numberOfLines={2} style={styles.foodParing}>
          {modalItem.food_pairing}
        </Text>
      </View>
      <View style={styles.rightSide}>
        <View style={styles.imgContainer}>
          <Image
            resizeMode={'stretch'}
            source={{uri: modalItem.image_url}}
            style={{width: '30%', height: '80%'}}
          />
        </View>
        <View>
          <Button
            onPress={() => addToCart(modalItem)}
            style={styles.addToCartButton}>
            <Text style={styles.button}>ADD TO CART</Text>
          </Button>
        </View>
      </View>
    </View>
  );
};

const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
  };
};

export default connect(null, mapDispatchToProps)(ModalContent);

const styles = StyleSheet.create({
  closeButton: {textTransform: 'uppercase', fontWeight: 'bold'},
  viewContent: {flex: 1, flexDirection: 'row',marginVertical:10},
  addToCartButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
  leftSide: {flex: 1, marginLeft: 35, marginTop: 10},
  titleText: {color: 'white', fontSize: 18, fontWeight: 'bold'},
  tagLine: {color: 'white', fontSize: 12, marginTop: 5},
  description: {color: 'white', fontSize: 12, marginTop: 5},
  foodParing: {color: 'white', fontSize: 12, marginTop: 8},
  rightSide: {
    flex: 1,
    marginTop: 25,
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  imgContainer: {
    width: '55%',
    height: '55%',
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    borderRadius: 15,
  },
  button: {fontWeight: 'bold', textAlign: 'center'},
});
