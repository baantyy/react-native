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
  label: {
    fontSize: 15,
    marginBottom: 5,
    marginTop: 5,
  },
  input: {
    borderBottomWidth: 1,
    borderColor: '#ddd',
    padding: 5,
    paddingLeft: 0,
    paddingRight: 0,
    marginBottom: 10,
  },
  switch: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    marginBottom: 20,
  },
  radio: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  radioItem: {
    marginBottom: 10,
    marginRight: 20,
    flexDirection: 'row',
  },
  radioIcon: {
    backgroundColor: 'white',
    width: 15,
    height: 15,
    borderRadius: 50,
    marginRight: 7,
    transform: [
      {
        translateY: 3,
      },
    ],
    position: 'relative',
    borderWidth: 1,
    borderColor: 'green',
    borderStyle: 'solid',
  },
  radioText: {
    fontSize: 15,
  },
  radioActive: {
    backgroundColor: 'green',
    width: 5,
    height: 5,
    borderRadius: 50,
    position: 'absolute',
    left: 4,
    top: 4,
    zIndex: 2,
  },
  check: {
    display: 'flex',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  checkItem: {
    marginBottom: 10,
    marginRight: 20,
    flexDirection: 'row',
  },
  checkIcon: {
    backgroundColor: 'white',
    width: 15,
    height: 15,
    marginRight: 7,
    transform: [
      {
        translateY: 3,
      },
    ],
    position: 'relative',
    borderWidth: 1,
    borderColor: 'green',
    borderStyle: 'solid',
  },
  checkText: {
    fontSize: 15,
  },
  checkActive: {
    backgroundColor: 'green',
    width: 5,
    height: 5,
    borderRadius: 50,
    position: 'absolute',
    left: 4,
    top: 4,
    zIndex: 2,
  },
});

export default styles;
