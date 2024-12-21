// style.js
import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      borderRadius: 15,
      overflow: 'hidden',
    },
    image: {
      width: '100%',
      height: 200,
      borderRadius: 15,
    },
    overlay: {
      backgroundColor: 'rgba(0,0,0,.5)',
      flex: 1,
      justifyContent: 'center',
      padding: 40,
    },
    text1: {
      color: '#fff',
      fontSize: 12,
      fontWeight: '500',
      zIndex: 1,
      paddingBottom: 5,
    },
    text2: {
      color: '#fff',
      fontSize: 24,
      fontWeight: '800',
      zIndex: 1,
    },
    button: {
      backgroundColor: 'transparent',
      borderWidth: 1,
      borderColor: 'white',
      borderRadius: 32,
      padding: 8,
      width: 102,
      textAlign: 'center',
      justifyContent: 'center',
      display: 'flex',
      alignItems: 'center',
      marginTop: 10,
    },

    buttonText: {
      color: 'white',
    },
  });
