/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  RefreshControl,
  StatusBar,
  ActivityIndicator,
  ProgressBarAndroid,
} from 'react-native';
import Header from '../../components/Header';
import s from './style';

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

const Loader = props => {
  const [refreshing, setRefreshing] = useState(false);
  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  return (
    <View>
      <Header title="Loader" currentRoute="loader" {...props} />
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
            {/* Progress Bar */}
            <View style={{marginTop: 20}}>
              <ProgressBarAndroid />
            </View>
            <View style={{marginTop: 20}}>
              <ProgressBarAndroid styleAttr="Horizontal" />
            </View>
            <View style={{marginTop: 20}}>
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
              />
            </View>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Loader;
