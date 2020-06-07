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
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from 'react-native';

import styles from './styles';
import generalStyles from '../../assets/styles/generalStyles';

import Notes from '../../components/Notes';

const Home = ({navigation}) => {
  const [showSearch, setShowSearch] = useState(false);
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };
  return (
    <SafeAreaView style={generalStyles.safeArea}>
      <ScrollView>
        <View style={generalStyles.container}>
          {/* header */}
          <View
            style={[styles.header, {display: showSearch ? 'none' : 'flex'}]}>
            <Text style={styles.title}>My Notes</Text>
            <TouchableOpacity onPress={toggleSearch}>
              <Image source={require('../../assets/images/search.png')} />
            </TouchableOpacity>
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
          <Notes navigation={navigation} />
        </View>
      </ScrollView>
      <TouchableOpacity style={styles.floatingButton}>
        <Image source={require('../../assets/images/add.png')} />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default Home;
