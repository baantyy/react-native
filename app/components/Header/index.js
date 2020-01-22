import React from 'react';
import {View, Text, TouchableHighlight} from 'react-native';
import {Actions} from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/FontAwesome';
import s from './style';

const Header = props => {
  const {title, currentRoute} = props;
  const handleRoute = () => {
    switch (currentRoute) {
      case 'loader':
        return Actions.buttons();
      default:
        return Actions.reference();
    }
  };
  return (
    <View style={s.wrapper}>
      <TouchableHighlight onPress={() => handleRoute()} style={s.backBtn}>
        <Text style={s.iconWrapper}>
          <Icon name="bars" size={20} color="black" />
        </Text>
      </TouchableHighlight>
      <View style={s.titleWrapper}>
        <Text style={s.title}>{title}</Text>
      </View>
    </View>
  );
};

export default Header;
