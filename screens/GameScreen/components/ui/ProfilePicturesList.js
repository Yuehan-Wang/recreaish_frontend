import React from 'react';
import { View } from 'react-native';
import ProfilePicture from './ProfilePicture';
import { StyleSheet } from 'react-native';

const ProfilePicturesList = ({ urls, size }) => {
  return (
    <View style={styles.picturesContainer}>
      {urls.map((url) => (
        <View style={styles.profilepicture}><ProfilePicture key={url} url={url} size={size} /></View>
      ))}
    </View>
  );
};

const styles = StyleSheet.create({
  picturesContainer:{
    flexDirection:'row',
  },
  profilepicture:{
    margin:'2%',
    marginLeft:0
  }
})
export default ProfilePicturesList;
