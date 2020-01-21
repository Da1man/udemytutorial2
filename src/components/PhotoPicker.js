import React, {useState} from 'react';
import {View, StyleSheet, Image, Button} from 'react-native';
import ImagePicker from 'react-native-image-picker';
import {THEME} from '../theme';

export const PhotoPicker = ({onPick}) => {
  const [image, setImage] = useState(null)

  const options = {
    title: 'Загрузить фотографию',
    cancelButtonTitle: 'Отмена',
    takePhotoButtonTitle: 'Фото с камеры',
    chooseFromLibraryButtonTitle: 'Загрузить из библиотеки',
    tintColor: THEME.MAIN_COLOR,
    mediaType: 'photo',
    noData: true,

  }

  const takePhoto = () => {
    ImagePicker.showImagePicker(options, (response) => {
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
        onPick(response.uri)
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
