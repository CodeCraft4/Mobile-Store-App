import {StyleSheet} from 'react-native';

export const styles = ({} = {}) =>
  StyleSheet.create({
    container: {
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      width:'100%',
    },
    text: {
      fontSize: 17,
      fontWeight: '600',
      color: 'black',
    },
  });
