import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    title: {
      color: 'black',
      fontWeight: '600',
      marginTop: 50,
    },
    paymentOption: {
      padding: 8,
      backgroundColor: 'white',
      height: 60,
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
      borderRadius: 8,
      gap: 5,
    },
    paymentIcons: {
      display: 'flex',
      flexDirection: 'row',
      gap: 15,
    },
    paymentText: {
      color: 'black',
    },
    paymentdesc: {
      fontSize: 12,
    },
    arrow: {
      flexDirection: 'row',
      gap: 20,
    },
  });
