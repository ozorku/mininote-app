import React from 'react';

import {StyleSheet, View, Text} from 'react-native';

function truncate(str) {
  return str.slice(0, 100) + '...';
}

let body =
  'This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. This is body for title one. Make sense This is body for title one. ';

const notes = [
  {
    num: 1,
    title: 'This is title',
    body,
  },
  {
    num: 2,
    title: 'This is title',
    body,
  },
  {
    num: 3,
    title: 'This is title',
    body,
  },
  {
    num: 4,
    title: 'This is title',
    body,
  },
  {
    num: 5,
    title: 'This is title',
    body,
  },
  {
    num: 6,
    title: 'This is title',
    body,
  },
  {
    num: 7,
    title: 'This is title',
    body,
  },
];

const NoteCard = ({title, num}) => {
  return (
    <View style={styles.noteContainer}>
      <View style={styles.noteHeading}>
        <Text style={styles.noteTitle}>{title}</Text>
        <Text style={styles.noteNum}>{num}</Text>
      </View>
      <Text style={styles.noteBody}>{truncate(body)}</Text>
    </View>
  );
};

const Notes = () => {
  return (
    <View style={styles.notes}>
      {notes.map((note) => {
        return <NoteCard title={note.title} body={note.body} num={note.num} />;
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
  noteNum: {
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
