import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Navbar, NewArrivalCard} from '@commons';
import ScanMobile from './components/ScanMobile';
import {ARRIVALS_CARDS} from '@constants';
import { useNavigation } from '@react-navigation/native';
// import { useRoute } from '@react-navigation/native';

export const Scanners = ({route}) => {
  // const route = useRoute()

  const poster = route?.params?.item?.poster;
  const {navigate} = useNavigation()

  return (
    <View style={styles.container}>
      <Navbar title="Screener" />
      <ScanMobile  poster = {poster} />
      <View style={styles.title}>
        <Text style={styles.text1}>Popular Item</Text>
        <Text style={styles.text2} onPress={()=> navigate('Discover')}>See All</Text>
      </View>
      <ScrollView>
        <View>
          {ARRIVALS_CARDS.map(i => (
            <NewArrivalCard
              id={i.id}
              poster={i.poster}
              title={i.title}
              reveiws={i.rating}
              price={i.price}
            />
          ))}
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 10,
    flex: 1,
  },
  title: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 5,
    marginTop: 200,
  },

  text1: {
    fontSize: 16,
    fontWeight: '700',
    color: 'black',
    padding: 5,
  },
  text2: {
    fontSize: 14,
    fontWeight: '400',
    color: 'rgba(56, 151, 46, 1)',
    padding: 5,
  },
});
