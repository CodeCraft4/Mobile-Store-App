import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      paddingHorizontal: 10,
      marginVertical: 10,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      shadowColor: 'lightgray',
      padding: 6,
      elevation: 5,
      gap: 10,
    },
    icon: {
      marginRight: 10,
    },
    inputParent: {
      flexDirection: 'column',
    },
    error: {
      fontSize: 11,
      color: 'red',
    },
  });
