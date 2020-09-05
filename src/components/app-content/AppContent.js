import React, {useRef} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import MyHeader from '../header/Haeder';
import Routes from '../../routes';
import AddToCartModal from '../add-to-cart-modal/AddToCartModal';
import ShoppingCart from '../shopping-cart/ShoppingCart';
import {connect} from 'react-redux';
import EmptyShoppingCart from '../empty-shopping-cart/EmptyShoppingCart';
const AppContent = ({addedItem}) => {
  const addTocartModal = useRef(null);

  const open = () => {
    addTocartModal.current.open();
  };
  return (
    <>
      <MyHeader
        backgroundColor={'red'}
        body={<Text style={styles.header}>Demo App</Text>}
      />
      {/* <Home open={open} /> */}
      <Routes open={open} />
      {/* <Button onPress={() => open()}>
        <Text>open</Text>
      </Button> */}
      <AddToCartModal ref={addTocartModal} />
      {addedItem.length == 0 ? <EmptyShoppingCart /> : <ShoppingCart />}
    </>
  );
};

const mapStateToProps = (state) => {
  return {
    addedItem: state.cart.addedToCart,
  };
};
export default connect(mapStateToProps)(AppContent);

const styles = StyleSheet.create({
  header: {fontSize: 20, fontWeight: 'bold'},
});
