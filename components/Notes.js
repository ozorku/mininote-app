import React from 'react';
import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';
import notes from '../assets/notes';

const NoteCard = ({navigation, note}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('ViewNote', note)}
      style={[styles.noteContainer, {borderTopColor: note.color}]}>
      <View style={styles.noteHeading}>
        <Text style={styles.noteTitle}>{note.title}</Text>
        <Text style={styles.noteId}>{note.id}</Text>
      </View>
      <Text style={styles.noteBody}>{note.body.slice(0, 100) + '...'}</Text>
    </TouchableOpacity>
  );
};

const Notes = ({navigation}) => {
  return (
    <View style={styles.notes}>
      {notes.map((note) => {
        return <NoteCard note={note} navigation={navigation} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  notes: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    marginTop: 28,
  },
  noteHeading: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  noteTitle: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  noteId: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#FF005C',
  },
  noteBody: {
    fontSize: 18,
    marginTop: 20,
    lineHeight: 25,
  },
  noteContainer: {
    // height: 250,
    backgroundColor: 'white',
    width: '47%',
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    paddingBottom: 20,
    borderTopColor: 'black',
    borderTopWidth: 5,
    borderRadius: 12,
    shadowColor: '#ddd',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 100,
    shadowRadius: 30,
    elevation: 5,
  },
});

export default Notes;
