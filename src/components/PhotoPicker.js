import React, {useState} from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';

export const PhotoPicker = ({}) => {
  const [image, setImage] = useState(null)
  const takePhoto = () => {
    ImagePicker.showImagePicker({noData: true, mediaType: 'photo'}, (response) => {
      console.log('Response = ', response);

      if (response.didCancel) {
        console.log('User cancelled image picker');
      } else if (response.error) {
        console.log('ImagePicker Error: ', response.error);
      } else if (response.customButton) {
        console.log('User tapped custom button: ', response.customButton);
      } else {

        // You can also display the image using data:
        // const source = { uri: 'data:image/jpeg;base64,' + response.data };

        setImage(response.uri)
      }
    });
  }
  return <View style={styles.wrapper}>
  <Button title={'Сделать фото'} onPress={takePhoto} />
    {image && <Image style={styles.image} source={{uri: image}} /> }
  </View>
}

const styles = StyleSheet.create({
  wrapper: {
    marginBottom: 10,
  },
  image: {
    width: '100%',
    height: 200,
    marginTop: 10,
  }
})
