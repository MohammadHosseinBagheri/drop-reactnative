import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import PagesTitle from '../../components/pages-title/PagesTitle';

const Food = () => {
  return (
    <View style={styles.container}>
      <PagesTitle title={'All Food'} />
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
        <Text style={{fontSize: 16, fontWeight: 'bold'}}>Nothing</Text>
      </View>
    </View>
  );
};

export default Food;

const styles = StyleSheet.create({
  container: {flex: 1, backgroundColor: '#fff'},
});
