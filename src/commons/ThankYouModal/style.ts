import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    centeredView: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 22,
    },
    modalView: {
      margin: 20,
      backgroundColor: 'white',
      borderRadius: 10,
      width: 325,
      height: 400,
      padding: 35,
      alignItems: 'center',
      shadowColor: 'black',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 30,
    },
    title: {
      fontSize: 34,
      fontWeight: '500',
      color: 'black',
      marginTop: 20,
    },
    description: {
      fontSize: 14,
      fontWeight: '300',
    },
    button: {
      padding: 10,
      backgroundColor: 'rgba(56, 151, 46, 0.04)',
      width: 150,
      height: 44,
      display: 'flex',
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
      marginTop: 50,
    },
  });
