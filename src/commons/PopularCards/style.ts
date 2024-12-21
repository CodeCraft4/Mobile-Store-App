import {StyleSheet} from 'react-native';

export const styles = ({} = {}) =>
  StyleSheet.create({
    disscountOffer: {
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
    },
    offer: {
      backgroundColor: 'rgba(56, 151, 46, 1)',
      color: 'white',
      padding: 6,
      borderRadius: 5,
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
    text3: {
      color: 'black',
      fontSize: 11,
      fontWeight: '400',
      display: 'flex',
      flexDirection: 'row',
    },
    card: {
      padding: 5,
      width: 155,
      borderRadius: 6,
      elevation: 3,
      shadowRadius: 4,
      backgroundColor: 'rgba(255, 255, 255, 1)',
      paddingHorizontal: 10,
    },
    info: {
      alignItems: 'center',
      justifyContent: 'center',
    },
    heart:{
      backgroundColor:'rgba(56, 151, 46, 1)',
      padding:2,
      borderRadius:50,
      width:22,
      height:22,
      flexDirection:'row',
      display:'flex',
      justifyContent:'center',
      alignItems:'center',
      textAlign:'center',
    },
  });
