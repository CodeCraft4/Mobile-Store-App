import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    discoverContainer: {
      padding: 15,
      marginTop: 20,
      flex: 1,
      marginBottom: 50,
    },
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
      cursor: 'pointer',
    },
    scrollView: {
      height: 0,
    },
    verticleScroll: {
      borderColor: 'blue',
      height: 60,
    },
    card: {
      padding: 8,
      backgroundColor: 'white',
      borderRadius: 10,
      width: '100%',
      justifyContent: 'center',
      alignItems: 'center',
      height: 164,
    },
    cardContainer: {
      flexDirection: 'row',
      gap: 12,
      width: '20%',
      height: 164,
    },
    title2: {
      color: 'black',
      fontWeight: '400',
      marginTop: 10,
    },
    quantity: {
      fontSize: 11,
    },
  });
