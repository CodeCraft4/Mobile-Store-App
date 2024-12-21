import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    baseText: {
      fontWeight: 'bold',
      color: 'black',
      fontSize: 40,
      marginTop: 30,
    },
    innerText: {
      color: 'rgba(56, 151, 46, 1)',
    },
    account: {
      fontSize: 20,
      fontWeight: '400',
    },
    form: {
      marginTop: 40,
    },

    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },

    checkboxContainer: {
      flexDirection: 'row',
      marginBottom: 10,
    },
    label: {
      margin: 8,
    },
    accountText: {
      textAlign: 'center',
      marginBottom:10,
    },
    innerAccountText: {
      color: 'rgba(56, 151, 46, 1)',
    },
  });
