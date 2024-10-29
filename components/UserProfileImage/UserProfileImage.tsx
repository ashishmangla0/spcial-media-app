import React from 'react';

import {Image, View} from 'react-native';
import style from './style';

const UserProfileImage = (props:any) => {
    const {imageDimensions=58} = props
  return (
    <View
      style={[style.userImageContainer, {borderRadius: imageDimensions}]}>
      <Image
        source={props.profileImage}
        style={{width: imageDimensions, height: imageDimensions}}
      />
    </View>
  );
};

export default UserProfileImage;