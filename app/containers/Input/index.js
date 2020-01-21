/* eslint-disable react-native/no-inline-styles */
import React, {useState} from 'react';
import {
  View,
  Text,
  TextInput,
  ScrollView,
  Picker,
  Switch,
  TouchableHighlight,
} from 'react-native';
import s from './style';

const data = [
  {id: 1, title: 'Apple'},
  {id: 2, title: 'Ball'},
  {id: 3, title: 'Cat'},
  {id: 4, title: 'Dog'},
  {id: 5, title: 'Eye'},
  {id: 6, title: 'Frog'},
  {id: 7, title: 'Goat'},
  {id: 8, title: 'Hello'},
];

const Input = () => {
  const [text, setText] = useState('');
  const [language, setLanguage] = useState('js');
  const [switchValue, setSwitch] = useState(false);
  const [radio, setRadio] = useState(data[0].id);
  const [checkboxes, setCheckbox] = useState([]);
  const handleCheckItem = checkedItem => {
    if (checkboxes.some(i => i.id === checkedItem.id)) {
      setCheckbox(checkboxes.filter(item => item.id !== checkedItem.id));
    } else {
      setCheckbox([...checkboxes, ...[checkedItem]]);
    }
  };
  return (
    <ScrollView>
      <View style={s.screen}>
        <View style={s.container}>
          <Text style={s.title}>Input Fields</Text>
          <View>
            <View style={s.switch}>
              <Switch
                value={switchValue}
                onChange={e => setSwitch(!switchValue)}
                // thumbColor="green"
              />
            </View>
            {/* radio */}
            <Text style={[s.label, {marginBottom: 10}]}>Radio:</Text>
            <View style={s.radio}>
              {data.map(item => (
                <TouchableHighlight
                  key={item.id}
                  style={s.radioItem}
                  onPress={() => setRadio(item.id)}
                  underlayColor="transparent">
                  <>
                    <View style={s.radioIcon}>
                      {radio === item.id && <Text style={s.radioActive} />}
                    </View>
                    <Text style={s.radioText}>{item.title}</Text>
                  </>
                </TouchableHighlight>
              ))}
            </View>
            {/* checkbox */}
            <Text style={[s.label, {marginBottom: 10, marginTop: 20}]}>
              Checkbox:
            </Text>
            <View style={s.check}>
              {data.map(item => {
                const checkValue = checkboxes.some(i => i.id === item.id);
                return (
                  <TouchableHighlight
                    key={item.id}
                    style={s.checkItem}
                    onPress={() => handleCheckItem(item)}
                    underlayColor="transparent">
                    <>
                      <View style={s.checkIcon}>
                        {checkValue && <Text style={s.checkActive} />}
                      </View>
                      <Text style={s.checkText}>{item.title}</Text>
                    </>
                  </TouchableHighlight>
                );
              })}
            </View>
            {/* inputs */}
            <Text style={[s.label, {marginTop: 20}]}>Normal:</Text>
            <TextInput
              style={s.input}
              placeholder="Username"
              onChangeText={e => setText(e)}
              value={text}
            />
            <Text style={s.label}>Password:</Text>
            <TextInput
              style={s.input}
              placeholder="Password"
              secureTextEntry={true}
            />
            <Text style={s.label}>Disabled:</Text>
            <TextInput
              style={s.input}
              editable={false}
              placeholder="Disabled"
            />
            <Text style={s.label}>Number Pad:</Text>
            <TextInput
              style={s.input}
              maxLength={10}
              keyboardType="number-pad"
              placeholder="Phone Number"
            />
            <Text style={s.label}>Textarea:</Text>
            <TextInput
              style={s.input}
              multiline={true}
              numberOfLines={5}
              placeholder="Message"
            />
            {/* select */}
            <Text style={s.label}>Select:</Text>
            <Picker
              selectedValue={language}
              style={s.input}
              onValueChange={(value, index) => setLanguage(value)}>
              <Picker.Item label="Java" value="java" />
              <Picker.Item label="JavaScript" value="js" />
            </Picker>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default Input;
