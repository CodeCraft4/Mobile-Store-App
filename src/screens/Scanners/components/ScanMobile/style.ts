import {StyleSheet} from 'react-native';

export const styles = () =>
  StyleSheet.create({
    container: {
      position: 'relative',
      justifyContent: 'center',
      flex: 1,
      alignItems: 'center',
      marginTop: 200,
    },
    insideContainer: {
      position: 'absolute',
    },
    gradient: {
      position: 'absolute',
      borderBottomLeftRadius: 25,
      borderBottomRightRadius: 25,
      top: '50%',
      width: '100%',
      height: 100,
    },
  });
