import React from 'react';
import { FlatList, StyleSheet } from 'react-native';

import colors from '../config/colors';
import Screen from '../components/Screen';
import ListItem from '../components/ListItem';

const donors = [
  {
    id: 1,
    title: 'Bilal Mir',
    subtitle: 'O+',
    image: require('../assets/person.jpg'),
  },
  {
    id: 2,
    title: 'Bilal Mir',
    subtitle: 'O+',
    image: require('../assets/person.jpg'),
  },
];

const Donors = () => {
  return (
    <Screen style={styles.screen}>
      <FlatList
        data={donors}
        keyExtractor={listing => listing.id}
        renderItem={({ item }) => (
          <ListItem title={item.title} subtitle={item.subtitle} image={item.image} />
        )}
      />
    </Screen>
  );
};

const styles = StyleSheet.create({
  screen: {
    padding: 20,
    backgroundColor: colors.light,
  },
});

export default Donors;
