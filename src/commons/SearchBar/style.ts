import {StyleSheet} from 'react-native';

export const styles = ({} = {}) =>
  StyleSheet.create({
    container: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      gap: 8,
    },
    inputContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      marginVertical: 10,
      shadowColor: 'lightgray',
      elevation: 5,
      gap: 20,
      width: 300,
      height:50,
      borderRadius: 6,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      paddingHorizontal: 10,
      padding: 10,
    },
    input: {
      height:50,
    },
    button: {
      width: 50,
      height: 50,
      borderRadius: 6,
      backgroundColor: 'black',
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
  });
