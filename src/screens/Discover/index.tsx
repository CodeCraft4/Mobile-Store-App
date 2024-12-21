import React from 'react';
import {ScrollView, Text, View} from 'react-native';
import {styles} from './style';
import {HotSales, Navbar, NewArrivalCard, SearchBar} from '@commons';
import {ARRIVALS_CARDS, DISCOVER_CARD} from '@constants';
import {useNavigation} from '@react-navigation/native';

export const DiscoverScreen = () => {
  const {navigate} = useNavigation();
  return (
    <View style={styles().discoverContainer}>
      <Navbar title="Discover" />
      <SearchBar />
      <ScrollView horizontal style={styles().scrollView}>
        <View style={styles().cardContainer}>
          {DISCOVER_CARD.map((item, index) => (
            <View key={index} style={styles().card}>
              {item.poster}
              <Text style={styles().title2}>{item.title}</Text>
              <Text style={styles().quantity}>{item.quantity} Items</Text>
            </View>
          ))}
        </View>
      </ScrollView>
      <View style={styles().title}>
        <Text style={styles().text1}>New Arrivals</Text>
        <Text style={styles().text2} onPress={() => navigate('Favourite')}>
          See All
        </Text>
      </View>
      <ScrollView style={styles().verticleScroll}>
        {ARRIVALS_CARDS.map((i,index )=> (
          <NewArrivalCard
            id={i.id}
            index={index}
            poster={i.poster}
            title={i.title}
            reveiws={i.rating}
            price={i.price}
          />
        ))}
        <HotSales />
        <View style={styles().title}>
          <Text style={styles().text1}>Best Sellar</Text>
          <Text style={styles().text2} onPress={() => navigate('Favourite')}>
            See All
          </Text>
        </View>
        {ARRIVALS_CARDS.map(i => (
          <NewArrivalCard
            id={i.id}
            poster={i.poster}
            title={i.title}
            reveiws={i.rating}
            price={i.price}
          />
        ))}
      </ScrollView>
    </View>
  );
};
