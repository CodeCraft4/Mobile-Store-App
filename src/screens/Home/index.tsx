import React from 'react';
import {ScrollView, Text, TouchableOpacity, View} from 'react-native';
import {Banner} from '@assets';
import {Navbar, PopularCards, SearchBar} from '@commons';
import {styles} from './style';
import {MOBILES_CARD} from '@constants';
import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '@types';
import {StackNavigationProp} from '@react-navigation/stack';

type ExploreScreenNavigationProp = StackNavigationProp<
  RootStackParamList,
  'Explore'
>;

export const Home = () => {
  const navigation = useNavigation<ExploreScreenNavigationProp>();

  return (
    <View style={styles().homeContainer}>
      <Navbar title="Home" />
      <SearchBar />
      <Banner width={380} height={200} />
      <View style={styles().title}>
        <Text style={styles().text1}>Popular Item</Text>
        <Text
          style={styles().text2}
          onPress={() => navigation.navigate('Discover')}>
          See All
        </Text>
      </View>
      <ScrollView style={styles().scrollView}>
        <View style={styles().container}>
          {MOBILES_CARD.map(item => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigation.navigate('Explore', {item})}>
              <PopularCards
                id={item.id}
                poster={item.poster}
                discount={item.discount}
                title={item.title}
                price={item.price}
                reviews={item.rating}
              />
            </TouchableOpacity>
          ))}
        </View>
      </ScrollView>
    </View>
  );
};
