import React, {useState} from 'react';
import {TextInput, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {Filter, Search} from '@assets';
import {LanguageModal} from '../LanguagesModal';

export const SearchBar = () => {
  const [lan, setLan] = useState<boolean>(false);

  return (
    <View style={styles().container}>
      <View style={styles().inputContainer}>
        <Search />
        <TextInput placeholder="Search" style={styles().input} />
      </View>
      <View style={styles().button}>
        <TouchableOpacity onPress={() => setLan(!lan)}>
          <Filter width={24} height={24} />
        </TouchableOpacity>
      </View>
      {lan && <LanguageModal open={lan} onClose={() => setLan(!lan)} />}
    </View>
  );
};
