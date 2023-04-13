import React from 'react';
import { Image, StyleSheet, View } from 'react-native';

const ProfilePicture = ({ url, size }) => {
  return (
        <Image
      source={{ uri: url }}
      style={[styles.image, { width: size, height: size }]}
      borderRadius={size / 2}
    />
  );
};

const styles = StyleSheet.create({
  image: {
    resizeMode: 'cover',
  }
});

export default ProfilePicture;
