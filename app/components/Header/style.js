import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
    paddingLeft: 20,
    paddingRight: 20,
    display: 'flex',
    flexDirection: 'row',
  },
  backBtn: {
    paddingTop: 10,
    paddingBottom: 10,
    borderRadius: 50,
    width: 50,
  },
  iconWrapper: {
    textAlign: 'center',
  },
  titleWrapper: {
    paddingTop: 5,
    paddingLeft: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default styles;
