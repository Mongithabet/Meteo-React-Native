import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import About from './components/About'
import Search from './components/Search'
import {TabNavigator} from 'react-navigation'

const Tabs = TabNavigator({
  Search:{screen: Search},
  About:{screen: About}
})

export default function App() {
  return (
    <View style={{marginVertical: 40}}>
      <Search/>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
