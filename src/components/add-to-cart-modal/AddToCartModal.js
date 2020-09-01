import React, {Component} from 'react';
import {
  Text,
  View,
  Dimensions,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Modal from 'react-native-modalbox';
import {Button} from 'native-base';
import {connect} from 'react-redux';
import {addToCart, openModalItem} from '../../redux/cart/action/cart';
import ModalContent from './ModalContent';
const {width} = Dimensions.get('window');

class AddToCartModal extends Component {
  constructor(props) {
    super(props);
  }
  open = () => {
    this.refs.addToCartModal.open();
  };
  close = () => {
    this.refs.addToCartModal.close();
  };
  render() {
    return (
      <Modal
        ref={'addToCartModal'}
        backdrop={true}
        position={'center'}
        style={styles.modalContainer}>
        <View style={styles.viewContainer}>
          <TouchableOpacity onPress={() => this.close()}>
            <Text style={styles.closeButton}>Close</Text>
          </TouchableOpacity>
        </View>
        <ModalContent  modalItem={this.props.modalItem} />
      </Modal>
    );
  }
}
const styles = StyleSheet.create({
  modalContainer: {
    height: 200,
    width: (90 * width) / 100,
    flex: 1,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 15,
    top: 0,
  },
  viewContainer: {
    position: 'absolute',
    top: -28,
    backgroundColor: 'red',
    height: 25,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 10,
    zIndex: 20,
  },
  closeButton: {textTransform: 'uppercase', fontWeight: 'bold'},
  viewContent: {flex: 1, flexDirection: 'row'},
  addToCartButton: {
    backgroundColor: 'white',
    borderRadius: 15,
    marginHorizontal: 5,
    paddingHorizontal: 15,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
const mapDispatchToProps = (dispatch) => {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    openModalItem: (item) => dispatch(openModalItem(item)),
  };
};
const mapStateToProps = (state) => {
  return {
    modalItem: state.cart.openModalItem,
  };
};
export default connect(mapStateToProps, mapDispatchToProps, null, {
  forwardRef: true,
})(AddToCartModal);
