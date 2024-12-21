import {View, TextInput, Text} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Controller, useFormContext} from 'react-hook-form';

type Props = {
  name: string;
  placeHolder: string;
  icons?: React.ReactNode;
  type: string;
};

export const CustomTextFields: React.FC<Props> = ({
  name,
  placeHolder,
  icons,
  type,
}) => {
  const {control} = useFormContext();

  return (
    <View style={styles().inputContainer}>
      {icons}
      <Controller
        name={name}
        control={control}
        render={({field: {onChange, onBlur, value}, fieldState: {error}}) => (
          <View style={styles().inputParent}>
            <TextInput
              placeholder={placeHolder}
              onChangeText={onChange}
              onBlur={onBlur}
              value={value}
              secureTextEntry={type === 'password'}
              keyboardType={type === 'email' ? 'email-address' : 'default'}
            />
            {error && <Text style={styles().error}>{error.message}</Text>}
          </View>
        )}
      />
    </View>
  );
};
