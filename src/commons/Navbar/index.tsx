import {Text, View} from 'react-native';
import React from 'react';
import {Category, Notification} from '@assets';
import {styles} from './style';

type Props = {
  title: string;
};

export const Navbar = (props: Props) => {
  const {title} = props;
  return (
    <View style={styles().container}>
      <Category />
      <Text style={styles().text}>{title}</Text>
        <Notification />
    </View>
  );
};
