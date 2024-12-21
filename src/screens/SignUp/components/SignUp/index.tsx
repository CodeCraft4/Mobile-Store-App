import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {styles} from './style';
import {Account, Email, Lock} from '@assets';
import {CustomTextFields, LanguageModal, LoginButton} from '@commons';
import {FormProvider, useForm} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {signUpSchema} from '@validations';
import CheckBox from '@react-native-community/checkbox';

interface FormValues {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
}
export const SignUpForm = () => {
  const [lanModal, setLanModa] = useState<boolean>(false);
  const [isChecked, setChecked] = useState(false);

  const methods = useForm<FormValues>({
    resolver: yupResolver(signUpSchema),
    mode:'onChange'
  });

  const onSubmit = (data: any) => {
    console.log('Submitted Data:', data);
  };

  return (
    <View>
      <Text style={styles().baseText}>
        Sign
        <Text style={styles().innerText}> Up </Text>
      </Text>
      <Text style={styles().account}>Create a new account!</Text>
      <FormProvider {...methods}>
        <View style={styles().form}>
          <CustomTextFields
            icons={<Account />}
            name="fullName"
            placeHolder="Full Name"
            type="text"
          />
          <CustomTextFields
            icons={<Email />}
            name="email"
            placeHolder="Email or Phone"
            type="email"
          />
          <CustomTextFields
            icons={<Lock />}
            name="password"
            placeHolder="Password"
            type="password"
          />
          <CustomTextFields
            icons={<Lock />}
            name="confirmPassword"
            placeHolder="Confirm Password"
            type="password"
          />
          <View style={styles().checkboxContainer}>
            <CheckBox
              value={isChecked}
              onValueChange={newValue => setChecked(newValue)}
              boxType="square"
              tintColors={{true: 'rgba(56, 151, 46, 1)', false: '#C4C4C4'}}
            />
            <Text style={styles().label}>Agree with terms and conditions.</Text>
          </View>
          <LoginButton
            title="Sign Up"
            bgcolor="rgba(65, 65, 56, 1)"
            type="submit"
            onClick={() => {
              methods.handleSubmit(onSubmit)();
            }}
          />
        </View>
      </FormProvider>

      <Text style={styles().accountText}>
        Have an account?
        <Text
          style={styles().innerAccountText}
          onPress={() => setLanModa(!lanModal)}>
          Log In
        </Text>
      </Text>

      {lanModal && (
        <LanguageModal open={lanModal} onClose={() => setLanModa(!lanModal)} />
      )}
    </View>
  );
};
