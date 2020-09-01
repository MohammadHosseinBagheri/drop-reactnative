import React, {useRef, useEffect} from 'react';
import {
  StyleSheet,
  Text,
  View,
  Animated,
  Dimensions,
  FlatList,
  TouchableOpacity,
  Image,
} from 'react-native';
import {connect} from 'react-redux';
import AddToCartModal from '../add-to-cart-modal/AddToCartModal';
import {fetchCollectionsStart} from '../../redux/collections/action/collection';
import {openModalItem} from '../../redux/cart/action/cart';
import RenderItem from './RenderItem';
const {width} = Dimensions.get('window');

const CoffeeContent = ({title, items, open, selectedItem}) => {
  console.log(items);
  return (
    <Animated.View
      style={{
        height: '100%',
        width: width,
        flex: 1,
      }}>
      <FlatList
        contentContainerStyle={{justifyContent: 'center', alignItems: 'center'}}
        data={items}
        numColumns={3}
        renderItem={({item, index}) => <RenderItem open={open} item={item} />}
      />
    </Animated.View>
  );
};
{
  /* <TouchableOpacity
            onPress={async () => {
              await selectedItem(item);
              await open();
            }}
            style={styles.flatlistItem}>
            <View style={styles.itemContainer}>
              <Image
                resizeMode={'stretch'}
                source={{uri: item.image_url}}
                style={{width: '30%', height: '100%'}}
              />
            </View>
            <Text numberOfLines={1}>{item.name}</Text>
            <Text numberOfLines={1}>{item.name}</Text>
          </TouchableOpacity> */
}
const mapStateToProps = (state) => {
  return {
    items: state.collections.items,
    selectedItem: state.cart.openModalItem,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
    selectedItem: (item) => dispatch(openModalItem(item)),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContent);

const styles = StyleSheet.create({
  flatlistItem: {
    justifyContent: 'center',
    alignItems: 'center',
    height: width / 3,
    width: width / 3.5,
    alignSelf: 'center',
    marginHorizontal: 10,
    marginVertical: 5,
  },
  itemContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    margin: 0,
    width: '100%',
    paddingVertical: 10,
  },
});
