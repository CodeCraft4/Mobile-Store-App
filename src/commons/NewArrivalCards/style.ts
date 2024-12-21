import {StyleSheet} from 'react-native';

export const styles = ({} = {}) =>
  StyleSheet.create({
    title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      padding: 5,
    },

    text1: {
      fontSize: 16,
      fontWeight: '700',
      color: 'black',
      padding: 5,
    },
    text2: {
      fontSize: 14,
      fontWeight: '400',
      color: 'rgba(56, 151, 46, 1)',
      padding: 5,
    },
    text3: {
      fontSize: 11,
      fontWeight: '400',
      display: 'flex',
      flexDirection: 'row',
    },

    card: {
      height: 100,
      borderRadius: 15,
      elevation: 2,
      shadowRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      display: 'flex',
      flexDirection: 'row',
      margin: 6,
      gap: 10,
    },
    outerImg: {
      backgroundColor: 'rgba(236, 233, 241, 1)',
      borderRadius: 15,
      width: 100,
      height: 100,
      justifyContent: 'center',
      alignItems: 'center',
    },

    button: {
      marginTop: 20,
      marginLeft: 30,
    },
  });
