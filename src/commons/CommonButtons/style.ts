import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    button: {
      backgroundColor: 'rgba(56, 151, 46, 1)',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 32,
      padding: 6,
      width: 102,
      textAlign: 'center',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },

    buttonText: {
      color: 'white',
      fontSize:12,
    },
  });
