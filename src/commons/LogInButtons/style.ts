import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    button: {
      padding: 10,
      display: 'flex',
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      borderRadius:6,
    },
    buttonText: {
      color: 'white',
      fontSize: 12,
      fontWeight: '600',
      padding: 10,
    },
  });
