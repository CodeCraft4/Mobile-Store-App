import React from 'react';
import {Modal, Text, TouchableOpacity, View} from 'react-native';
import {styles} from './style';
import {ConfirmIcons} from '@assets';

export const ThankYouModals = (props: any) => {
  const {open, onClose} = props;
  return (
    <View style={styles().centeredView}>
      <Modal
        animationType="slide"
        transparent={true}
        visible={open}
        onRequestClose={onClose}>
        <View style={styles().centeredView}>
          <View style={styles().modalView}>
            <ConfirmIcons />
            <Text style={styles().title}>Thank You</Text>
            <Text style={styles().description}>
              Your order is completed. Please check the delivery status at order
              tracking page.
            </Text>
            <TouchableOpacity onPress={onClose} style={styles().button}>
              <Text>ok</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
    </View>
  );
};
