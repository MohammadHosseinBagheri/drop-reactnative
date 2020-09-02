import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PagesTitle from '../../components/pages-title/PagesTitle';

const Gifts = () => {
  return (
    <View style={styles.container}>
      <PagesTitle title={"Gifts"} />
    </View>
  );
};

export default Gifts;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
