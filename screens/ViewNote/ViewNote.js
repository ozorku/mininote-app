import React, {useState} from 'react';
import {
  Text,
  View,
  SafeAreaView,
  TouchableOpacity,
  ScrollView,
  Image,
  TextInput,
} from 'react-native';

import styles from './styles';
import generalStyles from '../../assets/styles/generalStyles';

const ViewNote = ({route, navigation}) => {
  let noteDetail = route.params;

  const [editNote, setEditNote] = useState(false);
  const [newNote, setUpdateNewNote] = useState(noteDetail.body);

  const toggleEdit = () => {
    setEditNote(!editNote);
  };

  return (
    <SafeAreaView style={generalStyles.safeArea}>
      <View style={generalStyles.container}>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}>
            <Image source={require('../../assets/images/back.png')} />
          </TouchableOpacity>
          <Text style={styles.noteTitle}>{noteDetail.title}</Text>
          <TouchableOpacity onPress={() => toggleEdit()}>
            <Image
              style={{opacity: editNote ? 0 : 1}}
              source={require('../../assets/images/edit.png')}
            />
          </TouchableOpacity>
        </View>
        <ScrollView
          style={[styles.noteBody, {height: editNote ? '85%' : '90%'}]}>
          <Text
            style={[styles.textArea, {display: editNote ? 'none' : 'flex'}]}>
            {newNote}
          </Text>
          <TextInput
            onChangeText={(newNote) => setUpdateNewNote(newNote)}
            value={newNote}
            style={[styles.textArea, {display: editNote ? 'flex' : 'none'}]}
            multiline={true}
          />
        </ScrollView>
      </View>
      <TouchableOpacity
        onPress={() => toggleEdit()}
        style={[styles.saveButton, {display: editNote ? 'flex' : 'none'}]}>
        <Text style={{color: 'white', fontWeight: 'bold', fontSize: 18}}>
          Save note
        </Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ViewNote;
