import React from 'react';
import {StyleSheet, Text, View, TouchableOpacity, Image,Dimensions} from 'react-native';
import {connect} from 'react-redux';
import {openModalItem} from '../../redux/cart/action/cart'
const {width} = Dimensions.get('window');

const RenderItem = ({item, open,selectedItem}) => {
  return (
    <TouchableOpacity
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
      <Text numberOfLines={1}>{item.description}</Text>
    </TouchableOpacity>
  );
};

const mapDispatchToProps = (dispatch) => {
    return {
      fetchCollectionsStart: () => dispatch(fetchCollectionsStart()),
      selectedItem: (item) => dispatch(openModalItem(item)),
    };
  };
export default connect(null,mapDispatchToProps)(RenderItem);

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
