import React, { useState } from 'react';
import { View, Image, StyleSheet, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';

const ProfilePictureBox = ({ pictureUrls }) => {
  const [currentPictureIndex, setCurrentPictureIndex] = useState(0);

  const changePicture = (direction) => {
    if (direction === 'previous') {
      setCurrentPictureIndex(currentPictureIndex === 0 ? pictureUrls.length - 1 : currentPictureIndex - 1);
    } else if (direction === 'next') {
      setCurrentPictureIndex(currentPictureIndex === pictureUrls.length - 1 ? 0 : currentPictureIndex + 1);
    }
  };

  return (
    <View style={styles.container}>
      <TouchableOpacity onPress={() => changePicture('previous')}>
        <Icon name="angle-left" size={30} style={styles.icon} />
      </TouchableOpacity>
      <Image
        key={pictureUrls[currentPictureIndex]}
        source={{ uri: pictureUrls[currentPictureIndex] }}
        style={styles.image}
      />
      <TouchableOpacity onPress={() => changePicture('next')}>
        <Icon name="angle-right" size={30} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'row',
  },
  image: {
    width: 200,
    height: 200,
    marginHorizontal: 10,
  },
  icon: {
    marginHorizontal: 10,
  },
});

export default ProfilePictureBox;
