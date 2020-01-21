/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  Button,
  TouchableHighlight,
  TouchableOpacity,
  TouchableNativeFeedback,
  Modal,
  Alert,
} from 'react-native';
import s from './style';

const Buttons = () => {
  const [modal, setModal] = useState(false);
  const handleSubmit = () => {
    Alert.alert('Button clicked');
  };
  return (
    <View style={s.screen}>
      <View style={s.container}>
        <Text style={s.title}>Buttons</Text>
        <Button title="Submit" onPress={e => e.preventDefault()} />
        <TouchableHighlight
          onPress={() => handleSubmit()}
          underlayColor="transparent">
          <Text style={s.customBtn}>Submit</Text>
        </TouchableHighlight>
        <TouchableOpacity
          onPress={() => setModal(true)}
          underlayColor="transparent">
          <Text style={[s.customBtn, {backgroundColor: 'orange'}]}>
            Open Modal
          </Text>
        </TouchableOpacity>
        <TouchableNativeFeedback
          onPress={e => e.preventDefault()}
          background={TouchableNativeFeedback.SelectableBackground()}>
          <View
            style={[s.customBtn, {borderRadius: 0, backgroundColor: 'green'}]}>
            <Text style={s.customText}>Button</Text>
          </View>
        </TouchableNativeFeedback>
      </View>
      <Modal
        animationType="slide"
        transparent={false}
        visible={modal}
        onRequestClose={() => {
          Alert.alert('Modal has been closed.');
        }}>
        <View style={{padding: 50}}>
          <Text style={{marginBottom: 30}}>Hello World!</Text>
          <Button
            onPress={() => {
              setModal(false);
            }}
            title="Hide Modal"
          />
        </View>
      </Modal>
    </View>
  );
};

export default Buttons;
