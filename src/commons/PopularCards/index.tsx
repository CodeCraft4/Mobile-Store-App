import React from 'react';
import {Text, View} from 'react-native';
import {HeartContain, HeartOutline, Star} from '@assets';
import {styles} from './style';

type Props = {
  id: number;
  title: string;
  poster: React.ReactNode;
  price: number;
  reviews: string;
  discount?: string;
};

export const PopularCards = (props: Props) => {
  const {id, poster, price, reviews, title, discount} = props;
  return (
    <View>
      <View style={styles().card} key={id}>
        <View style={styles().disscountOffer}>
          {id === 1 ? (
            <Text style={styles().offer}>{discount}</Text>
          ) : (
            <Text
              style={[styles().offer, {backgroundColor: 'transparent'}]}></Text>
          )}
          {id === 1 ? (
            <HeartOutline />
          ) : (
            <Text style={styles().heart}>
              {' '}
              <HeartContain />{' '}
            </Text>
          )}
        </View>
        <View style={styles().info}>
          {poster}
          <Text style={styles().text1}>{title}</Text>
          <Text style={styles().text2}>{price}.00 AED</Text>
          <Text style={styles().text3}>
            <Star />
            {reviews}
          </Text>
        </View>
      </View>
    </View>
  );
};
