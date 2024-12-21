import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    homeContainer: {
      flexDirection:'column',
      alignItems: 'center',
      justifyContent:'center',
      padding:5,
    },
    title: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      marginTop: 30,
      marginBottom: 10,
      width: '100%',
    },
    text1: {
      fontSize: 16,
      fontWeight: '700',
      color: 'black',
      padding: 5,
    },
    text2: {
      fontSize: 11,
      fontWeight: '400',
      color: 'rgba(56, 151, 46, 1)',
      padding: 5,
    },
    container: {
      justifyContent: 'space-around',
      flexDirection: 'row',
      flexWrap: 'wrap',
      gap: 20,
      marginBottom:300,
    },
  });
