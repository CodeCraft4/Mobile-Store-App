import React from 'react';
import {Modal, Text, View} from 'react-native';
import {styles} from './style';
import {LoginButton} from '../LogInButtons';

export const LanguageModal = (props: any) => {
  const {open, onClose} = props;

  const Languages = [
    'English',
    'Portogus',
    'Pycken',
    'Frances',
    'Esponal',
    'Italian',
    'Polaski',
    'NoderLand',
  ];

  return (
    <View>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={onClose}>
        <View style={styles().modalView}>
          <Text style={styles().title}>Language</Text>
          {Languages.map((lan, key) => (
            <View style={styles().options} key={key}>
              <Text style={styles().selectOption}>{lan}</Text>
            </View>
          ))}
          <LoginButton
            title="Save Changes"
            bgcolor="black"
            onClick={() => {
              onClose();
            }}
            type="button"
          />
        </View>
      </Modal>
    </View>
  );
};
