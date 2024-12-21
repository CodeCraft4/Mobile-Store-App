import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import { useNavigation } from '@react-navigation/native';

export const CommonButtons = () => {
  const navigation = useNavigation()
  return (
    <View>
      <TouchableOpacity style={styles().button} onPress={() => navigation.navigate('Favourite')}>
        <Text style={styles().buttonText}>Shop Now</Text>
      </TouchableOpacity>
    </View>
  );
};
