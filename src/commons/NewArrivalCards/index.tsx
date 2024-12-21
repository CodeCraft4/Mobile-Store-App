import {Text, View} from 'react-native';
import React from 'react';
import {styles} from './style';
import {Star} from '@assets';
import {CommonButtons} from '../CommonButtons';

type Props = {
  id: number;
  poster: React.ReactNode;
  title: string;
  reveiws: string;
  price: number;
  index?: number;
};
export const NewArrivalCard = (props: Props) => {
  const {id, poster, price, reveiws, title} = props;
  return (
    <View style={styles().card} key={id}>
      <View style={styles().outerImg}>{poster}</View>
      <View>
        <Text style={styles().text1}>{title}</Text>
        <Text style={styles().text3}>
          <Star />
          {reveiws}
        </Text>
        <Text style={styles().text2}>{price} AED</Text>
      </View>
      <View style={styles().button}>
        <CommonButtons />
      </View>
    </View>
  );
};
