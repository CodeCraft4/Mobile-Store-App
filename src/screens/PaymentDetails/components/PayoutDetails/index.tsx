import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {Calender, CardNumber, Coupons, Profile} from '@assets';
import {CustomTextFields, LoginButton, ThankYouModals} from '@commons';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {accountFormSchema} from '@validations';

interface FormValues {
  holderName: string;
  cardNumber: string;
  date: string;
  coupon: string;
}

export const PayoutDetails = () => {
  const [thanks, setThanks] = useState<boolean>(false);

  const methods = useForm<FormValues>({
    resolver: yupResolver(accountFormSchema),
  });

  const onSubmit = (data: FormValues) => {
    console.log('Submitted Data:', data);
    setTimeout(() => {
      setThanks(!thanks);
    }, 2000);
  };

  return (
    <View>
      <FormProvider {...methods}>
        <Text style={styles().title}>Card Details</Text>
        <CustomTextFields
          icons={<Profile />}
          placeHolder="Holder Name"
          name="holderName"
          type="text"
        />
        <CustomTextFields
          icons={<CardNumber />}
          placeHolder="Card Number"
          name="cardNumber"
          type="text"
        />
          <CustomTextFields
            icons={<Calender />}
            placeHolder="MM/YY"
            name="date"
            type="text"
          />
        <CustomTextFields
          icons={<Coupons />}
          placeHolder="Coupon/ Promo Code"
          name="coupon"
          type="text"
        />
        <LoginButton
          title="Confirm"
          bgcolor="rgba(56, 151, 46, 1)"
          type="submit"
          onClick={() => {
            methods.handleSubmit(onSubmit)();
          }}
        />
      </FormProvider>
      {thanks && (
        <ThankYouModals open={thanks} onClose={() => setThanks(!thanks)} />
      )}
    </View>
  );
};
