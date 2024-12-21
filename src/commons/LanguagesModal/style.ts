import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    modalView: {
      backgroundColor: 'white',
      borderTopRightRadius: 15,
      borderTopLeftRadius: 15,
      width: '100%',
      height: 750,
      padding: 15,
      shadowColor: '#000',
      marginTop: 80,
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
      elevation: 8,
    },
    title: {
      color: 'black',
      fontWeight: '600',
      padding: 4,
    },
    selectOption: {
      color: 'black',
      padding: 10,
    },
    options: {
      flexDirection: 'row',
      alignItems: 'center',
      borderRadius: 5,
      marginVertical: 10,
      backgroundColor: 'white',
      shadowColor: 'gray',
      elevation: 2,
      padding:5,
    },

    button: {
      borderRadius: 20,
      padding: 10,
      elevation: 2,
    },
    buttonOpen: {
      backgroundColor: '#F194FF',
    },
    buttonClose: {
      backgroundColor: '#2196F3',
    },
    textStyle: {
      color: 'white',
      fontWeight: 'bold',
      textAlign: 'center',
    },
  });
