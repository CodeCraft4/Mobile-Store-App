import {ImageBackground, Text, TouchableOpacity, View} from 'react-native';
import React from 'react';
import {styles} from './style';

export const HotSales = () => {
  const image = {
    uri: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8bW9iaWxlfGVufDB8fDB8fHww',
  };

  return (
    <View style={styles().container}>
      <ImageBackground source={image} resizeMode="cover" style={styles().image}>
        <View style={styles().overlay}>
          <Text style={styles().text1}>HOT SALE</Text>
          <Text style={styles().text2}>70% OFF</Text>
          <Text style={styles().text1}>OnePlus 9 Pro</Text>
          <View>
            <TouchableOpacity style={styles().button}>
              <Text style={styles().buttonText}>Shop Now</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ImageBackground>
    </View>
  );
};
