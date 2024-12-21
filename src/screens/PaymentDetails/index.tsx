import React from 'react';
import {StyleSheet, View} from 'react-native';
import {PayoutDetails} from './components/PayoutDetails';
import { AccountCard } from '@assets';

export const PaymentDetailsScreens = () => {
  return (
    <View style={styles.container}>
      <AccountCard/>
      <PayoutDetails />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignSelf: 'center',
    marginTop:10,
  },
});
