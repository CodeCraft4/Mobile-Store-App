import React from 'react';
import {View} from 'react-native';
import {PaymentMethodsModule} from './components/PayomentMethod';
import {Navbar} from '@commons';

export const PaymentMethods = () => {
  return (
    <View>
      <Navbar title="Payment Method" />
      <PaymentMethodsModule />
    </View>
  );
};
