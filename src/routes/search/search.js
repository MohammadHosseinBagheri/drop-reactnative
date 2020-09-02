import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PagesTitle from '../../components/pages-title/PagesTitle';

const Search = () => {
  return (
    <View style={styles.container}>
      <PagesTitle title={'Search'} />
    </View>
  );
};

export default Search;
const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
