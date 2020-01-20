/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ActivityIndicator,
  ScrollView,
  SafeAreaView,
  Button,
  Alert,
  FlatList,
  TouchableOpacity,
  // TouchableHighlight,
  Image,
  ImageBackground,
  TextInput,
  // InputAccessoryView,
  // KeyboardAvoidingView,
  Modal,
  Picker,
  ProgressBarAndroid,
  RefreshControl,
  SectionList,
  StatusBar,
  Switch,
  TouchableNativeFeedback,
} from 'react-native';
import styles from './style';

const S = StyleSheet.create(styles);

const wait = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};

const Reference = () => {
  const [refreshing, setRefreshing] = useState(false);
  const [data, setData] = useState([
    {id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba', title: 'First Item'},
    {id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63', title: 'Second Item'},
    {id: '58694a0f-3da1-471f-bd96-145571e29d72', title: 'Third Item'},
  ]);
  const [data2] = useState([
    {title: 'Main dishes', data: ['Pizza', 'Burger', 'Risotto']},
    {title: 'Sides', data: ['French Fries', 'Onion Rings', 'Fried Shrimps']},
    {title: 'Drinks', data: ['Water', 'Coke', 'Beer']},
    {title: 'Desserts', data: ['Cheese Cake', 'Ice Cream']},
  ]);
  const [text, setText] = useState('Placeholder');
  const [modal, setModal] = useState(false);
  const [language, setLanguage] = useState('java');
  const [switchValue, setSwitch] = useState(false);
  const select = id => {
    const newData = data.map(item => {
      if (item.id === id) {
        return {
          ...item,
          ...{
            active: !item.active,
          },
        };
      }
      return item;
    });
    setData(newData);
  };
  const onRefresh = () => {
    setRefreshing(true);
    wait(2000).then(() => setRefreshing(false));
  };
  const onPressNativeButton = () => {};
  return (
    <>
      <SafeAreaView>
        <ScrollView
          refreshControl={
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          }>
          <View style={{marginBottom: 50}}>
            {/* Status Bar - dark/light-content - hidden */}
            <StatusBar backgroundColor="black" barStyle="light-content" />
            <View style={S.wrapper}>
              <Text>Demo Text</Text>
              {/* Loader */}
              <ActivityIndicator style={S.loader} size="small" color="black" />
              {/* Default Button */}
              <Button
                title="Click Here"
                color="green"
                onPress={() => Alert.alert('Button Pressed')}
                disabled={false}
              />
            </View>
            <View>
              {/* List Items */}
              <FlatList
                data={data}
                renderItem={({item, index}) => (
                  <View key={index} style={S.flatList}>
                    {/* Customizable Button */}
                    {/* TouchableHighlight :- without animation */}
                    <TouchableOpacity
                      style={[
                        S.customBtn,
                        item.active ? S.activeBtn : S.inActiveBtn,
                      ]}
                      onPress={() => select(item.id)}>
                      <Text style={S.flatText}>{item.title}</Text>
                    </TouchableOpacity>
                  </View>
                )}
                keyExtractor={item => item.id}
              />
            </View>
            <View style={S.imageWrapper}>
              {/* Image */}
              <Image
                style={S.image}
                source={{
                  uri:
                    'http://passionventures.000webhostapp.com/assets/img/banner4.jpg',
                }}
              />
            </View>
            {/* Background Image */}
            <ImageBackground
              source={{
                uri:
                  'http://passionventures.000webhostapp.com/assets/img/banner4.jpg',
              }}
              style={S.imgBg}>
              <View style={S.insideTextWrapper}>
                <Text style={S.insideText}>Inside Text</Text>
              </View>
            </ImageBackground>
            <View style={S.inputWrapper}>
              {/* Input Field */}
              <TextInput
                style={S.textInput}
                value={text}
                onChangeText={e => setText(e)}
                editable
                maxLength={40}
                multiline={false}
                numberOfLines={2}
                keyboardType="number-pad"
                secureTextEntry={true}
              />
              <Button
                onPress={() => setText('Button Text')}
                title="Reset Text"
              />
            </View>
            <View style={{marginBottom: 30}}>
              <Button
                onPress={() => {
                  setModal(true);
                }}
                title="Open Modal"
              />
              {/* Modal Popop */}
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
            {/* Select Box */}
            <Picker
              selectedValue={language}
              style={{height: 50, width: 300}}
              onValueChange={(value, index) => setLanguage(value)}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
            <View>
              {/* Progress Bar */}
              <ProgressBarAndroid />
              <ProgressBarAndroid styleAttr="Horizontal" />
              <ProgressBarAndroid
                styleAttr="Horizontal"
                indeterminate={false}
                progress={0.5}
              />
            </View>
            {/* List items with heading */}
            <SectionList
              sections={data2}
              keyExtractor={(item, index) => index}
              renderItem={({item}) => <Text style={S.sectionList}>{item}</Text>}
              renderSectionHeader={({section: {title}}) => (
                <Text style={S.sectionHeader}>{title}</Text>
              )}
            />
            {/* Switch - on/off */}
            <Switch
              value={switchValue}
              onChange={e => setSwitch(!switchValue)}
              // thumbColor="grey"
            />
            {/* Transition color effect */}
            <TouchableNativeFeedback
              onPress={onPressNativeButton}
              background={TouchableNativeFeedback.SelectableBackground()}>
              <View style={S.nativeBtnBg}>
                <Text style={S.nativeBtnText}>Button</Text>
              </View>
            </TouchableNativeFeedback>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

export default Reference;
