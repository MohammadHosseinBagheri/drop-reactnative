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

const {width} = Dimensions.get('window');

export class AddToCartModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      item: [],
    };
  }
  open = (item) => {
    this.refs.addToCartModal.open();
    this.setState({
      item,
    });
    console.log(item);
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
          <View style={styles.viewContent}>
            <View style={{flex: 1, marginLeft: 35, marginTop: 10}}>
              <Text style={{color: 'white', fontSize: 18, fontWeight: 'bold'}}>
                {this.state.item.name}
              </Text>
              <Text style={{color: 'white', fontSize: 12, marginTop: 5}}>
                {this.state.item.tagline}
              </Text>
              <Text style={{color: 'white', fontSize: 12}}>
                {this.state.item.abv}
              </Text>
              <Text
                numberOfLines={2}
                style={{color: 'white', fontSize: 12, marginTop: 5}}>
                {this.state.item.description}
              </Text>
              <Text
                numberOfLines={3}
                style={{color: 'white', fontSize: 12, marginTop: 8}}>
                {this.state.item.food_pairing}
              </Text>
            </View>
            <View style={{flex: 1, marginTop: 25}}>
              <View
                style={{
                  width: '55%',
                  height: '55%',
                  backgroundColor: '#fff',
                  justifyContent: 'center',
                  alignItems: 'center',
                  alignSelf: 'center',
                  borderRadius: 15,
                }}>
                <Image
                  resizeMode={'stretch'}
                  source={{uri: this.state.item.image_url}}
                  style={{width: '30%', height: '80%'}}
                />
              </View>
            </View>
          </View>
          <Button onPress={() => this.close()} style={styles.addToCartButton}>
            <Text style={{fontWeight: 'bold'}}>ADD TO CART</Text>
          </Button>
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
    position: 'absolute',
    right: 10,
    bottom: 10,
    paddingHorizontal:30,
    borderRadius: 15,
  },
});

export default AddToCartModal;
