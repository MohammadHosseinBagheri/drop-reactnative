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
const {width} = Dimensions.get('window');

const CoffeeContent = ({title, items, open}) => {
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
        renderItem={({item, index}) => (
          <TouchableOpacity
            onPress={() => open(item)}
            style={{
              justifyContent: 'center',
              alignItems: 'center',
              height: width / 3,
              width: width / 3.5,
              alignSelf: 'center',
              marginHorizontal: 10,
              marginVertical: 5,
            }}>
            <View
              style={{
                flex: 1,
                justifyContent: 'center',
                alignItems: 'center',
                borderRadius: 15,
                borderWidth: 1,
                margin: 0,
                width: '100%',
                paddingVertical: 10,
              }}>
              <Image
                resizeMode={'stretch'}
                source={{uri: item.image_url}}
                style={{width: '30%', height: '100%'}}
              />
            </View>
            <Text numberOfLines={1}>{item.name}</Text>
            <Text numberOfLines={1}>{item.name}</Text>
          </TouchableOpacity>
        )}
      />
    </Animated.View>
  );
};

const mapStateToProps = (state) => {
  return {
    items: state.collections.items,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(CoffeeContent);

const styles = StyleSheet.create({});
