/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StatusBar,
  ActivityIndicator,
} from 'react-native';
import s from './style';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

const Loader = () => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  return (
    <ScrollView
      refreshControl={
        <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
      }>
      {/* Status Bar - dark/light-content - hidden */}
      <StatusBar backgroundColor="black" barStyle="light-content" />
      <View style={s.screen}>
        <View style={s.container}>
          <Text style={s.title}>Loader</Text>
          <View>
            <ActivityIndicator style={{}} size="small" color="black" />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Loader;
