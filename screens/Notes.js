import React from 'react';

import {StyleSheet, View, Text, TouchableOpacity} from 'react-native';

function truncate(str) {
  return str.slice(0, 100) + '...';
}

let body =
  'This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. ';

const notes = [
  {
    id: 1,
    title: 'This is title',
    body,
  },
  {
    id: 2,
    title: 'This is title',
    body,
  },
  {
    id: 3,
    title: 'This is title',
    body,
  },
  {
    id: 4,
    title: 'This is title',
    body,
  },
  {
    id: 5,
    title: 'This is title',
    body,
  },
  {
    id: 6,
    title: 'This is title',
    body,
  },
  {
    id: 7,
    title: 'This is title',
    body,
  },
];

const NoteCard = ({title, id}) => {
  const openNote = () => {
    alert();
  };
  return (
    <TouchableOpacity onPress={openNote} style={styles.noteContainer}>
      <View style={styles.noteHeading}>
        <Text style={styles.noteTitle}>{title}</Text>
        <Text style={styles.noteId}>{id}</Text>
      </View>
      <Text style={styles.noteBody}>{truncate(body)}</Text>
    </TouchableOpacity>
  );
};

const Notes = () => {
  return (
    <View style={styles.notes}>
      {notes.map((note) => {
        return <NoteCard title={note.title} body={note.body} id={note.id} />;
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
    color: '#ccc',
  },
  noteBody: {
    fontSize: 18,
    marginTop: 20,
  },
  noteContainer: {
    height: 250,
    backgroundColor: 'white',
    width: '48%',
    marginBottom: 15,
    paddingHorizontal: 20,
    paddingTop: 20,
    borderTopColor: 'black',
    borderTopWidth: 5,
  },
});

export default Notes;
