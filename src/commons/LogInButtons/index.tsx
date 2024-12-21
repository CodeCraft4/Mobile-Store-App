import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';

type Props = {
  title: string;
  bgcolor: string;
  onClick?: () => void;
  type?: string;
};

export const LoginButton = (props: Props) => {
  const {bgcolor, title, onClick, type} = props;

  const handlePress = () => {
    if (type === 'submit' && onClick) {
      onClick();
    } else if (type === 'button' && onClick) {
      onClick();
    }
  };

  return (
    <View>
      <TouchableOpacity
        style={[styles().button, {backgroundColor: bgcolor}]}
        onPress={handlePress}>
        <Text style={styles().buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};
