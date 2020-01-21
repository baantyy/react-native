import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  screen: {
    backgroundColor: '#f7f8fa',
    width: window.width,
    flex: 1,
  },
  container: {
    padding: 50,
  },
  title: {
    fontSize: 25,
    textAlign: 'center',
    fontWeight: 'bold',
    marginBottom: 30,
  },
  customBtn: {
    backgroundColor: '#1c69fa',
    width: 100,
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 20,
    textAlign: 'center',
    color: 'white',
    padding: 10,
    borderRadius: 30,
  },
  customText: {
    color: 'white',
    textAlign: 'center',
  },
});

export default styles;
