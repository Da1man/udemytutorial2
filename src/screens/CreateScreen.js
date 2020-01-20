import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  Button,
  ScrollView,
  TouchableWithoutFeedback,
  Keyboard,
  TouchableOpacity,
} from 'react-native';
import {useDispatch} from 'react-redux';
import {HeaderButtons, Item} from 'react-navigation-header-buttons';
import {AppHeaderIcon} from '../components/AppHeaderIcon';
import {AboutScreen} from './AboutScreen';
import {THEME} from '../theme';
import {addPost} from '../store/actions/postActions';
import {PhotoPicker} from '../components/PhotoPicker';

export const CreateScreen = ({navigation}) => {
  const dispatch = useDispatch();
  const [text, setText] = useState('');

  const img = 'http://www.bighouse.ru/images/slides/%D0%B2%D0%B8%D0%B4%202%20%D0%B1%D1%80%D0%B5%D0%B2%D0%BD%D0%BE_s.jpg';

  const saveHandler = () => {
    const post = {
      date: new Date().toJSON(),
      text: text,
      img: img,
      booked: false,
    };
    dispatch(addPost(post));
    navigation.navigate('Main');
  };


  return <ScrollView>
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.wrapper}>
        <Text style={styles.title}>Создай новый пост</Text>
        <TextInput
          style={styles.textArea}
          placeholder={'Введите текст поста'}
          value={text}
          onChangeText={setText}
          multiline
        />
        <PhotoPicker />
        <Button title={'Создать пост'} color={THEME.MAIN_COLOR} onPress={saveHandler}/>
      </View>
    </TouchableWithoutFeedback>
  </ScrollView>;
};

CreateScreen.navigationOptions = ({navigation}) => ({
  headerTitle: 'Создать пост',
  headerLeft: () => <HeaderButtons HeaderButtonComponent={AppHeaderIcon}>
    <Item title="Toggle drawer" iconName='ios-menu' onPress={() => navigation.toggleDrawer()}/>
  </HeaderButtons>,
});

const styles = StyleSheet.create({
  wrapper: {
    padding: 10,
  },
  title: {
    fontSize: 20,
    textAlign: 'center',
    fontFamily: 'OpenSans-Regular',
    marginVertical: 10,
  },
  textArea: {
    padding: 10,
    marginBottom: 10,
  },
});
