import React from 'react';
import {Text, View} from 'react-native';
import {styles} from './styles';
import {
  Apple,
  BackArrow,
  Cash,
  Google,
  LocationPin,
  MasterCard,
  Paypal,
  PlusIcon,
} from '@assets';
import { LoginButton } from '@commons';

const paymentOptions = [
  {
    icon: Google,
    method: 'Google Play',
  },
  {
    icon: Paypal,
    method: 'Paypal',
  },
  {
    icon: MasterCard,
    method: 'MasterCard',
  },
  {
    icon: Apple,
    method: 'Apple Pay',
  },
  {
    icon: Cash,
    method: 'Cash on devlivery',
  },
];
export const PaymentMethodsModule = () => {
  return (
    <View>
      <Text style={styles().title}>Payment</Text>
      {paymentOptions.map((pay, key) => (
        <View style={styles().paymentOption} key={key}>
          <View style={styles().paymentIcons}>
            <pay.icon />
            <Text style={styles().paymentText}>{pay.method}</Text>
          </View>
          <Text style={styles().paymentText}>Radio</Text>
        </View>
      ))}

      <Text style={styles().title}>Address</Text>
      <View style={styles().paymentOption}>
        <View style={styles().paymentIcons}>
          <LocationPin />
          <View>
            <Text style={styles().paymentText}>Home Address</Text>
            <Text style={styles().paymentdesc}>Add the Shipping Address</Text>
          </View>
        </View>
        <PlusIcon />
      </View>
      <View style={styles().arrow}>
        <BackArrow />
        <LoginButton title="Confirm" bgcolor="black" />
      </View>
    </View>
  );
};
