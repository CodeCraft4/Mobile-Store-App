import React from 'react';
import {View} from 'react-native';
import {Frame, Gradient, Mobile1} from '@assets';
import {styles} from './style';

const ScanMobile = (props: any) => {
  const {poster} = props;

  const posterWidth = 300;
  const posterHeight = 300;

  return (
    <View style={styles().container}>
      <Frame />
      <View style={styles().insideContainer}>
        {poster ? (
          React.cloneElement(poster, {width: posterWidth, height: posterHeight})
        ) : (
          <Mobile1 width={posterWidth} height={posterHeight} />
        )}
        <View style={styles().gradient}>
          <Gradient width={300} />
        </View>
      </View>
    </View>
  );
};

export default ScanMobile;
