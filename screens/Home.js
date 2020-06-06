/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
} from 'react-native';

import Notes from './Notes';
// import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
// import Icon from 'react-native-vector-icons/AntDesign';

const Home = () => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView>
        <View style={styles.container}>
          {/* header */}
          <View
            style={[styles.header, {display: showSearch ? 'none' : 'flex'}]}>
            <Text style={styles.title}>My Notsses</Text>
            {/* <Icon
              onPress={toggleSearch}
              name="search1"
              size={25}
              color="#000"
            /> */}
            {/* <FontAwesome5 name={'comments'} /> */}
          </View>
          {/* search */}
          <View
            style={[
              styles.searchArea,
              {display: showSearch ? 'flex' : 'none'},
            ]}>
            <TextInput placeholder="Search note" style={styles.searchInput} />
            <TouchableOpacity onPress={toggleSearch}>
              <Text>Cancel</Text>
            </TouchableOpacity>
          </View>
          {/* notes */}
          <Notes />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
        {/* <Icon name="plus" size={25} color="#fff" /> */}
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  safeArea: {
    backgroundColor: '#eee',
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  container: {
    backgroundColor: '#eee',
    marginTop: 32,
    paddingHorizontal: 24,
  },
  searchArea: {
    position: 'absolute',
    top: 0,
    left: 0,
    backgroundColor: 'white',
    width: '100%',
    height: 60,
    borderColor: '#0038FF',
    borderBottomWidth: 3,
    padding: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  searchInput: {
    width: '80%',
    fontSize: 18,
  },
  floatingButton: {
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    width: 70,
    position: 'absolute',
    bottom: 35,
    right: 25,
    height: 70,
    backgroundColor: '#0038FF',
    padding: 10,
    borderRadius: 100,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
});

export default Home;
