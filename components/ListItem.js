import React from 'react';
import { View, StyleSheet, Image, TouchableHighlight } from 'react-native';

import colors from '../config/colors';

const ListItem = ({ title, subtitle, image, IconComponent, onPress }) => {
  return (
    <TouchableHighlight underlayColor={colors.light} onPress={onPress}>
      <View style={styles.container}>
        {IconComponent}
        {image && <Image style={styles.image} source={image} />}
        <View style={styles.detailContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <AppText style={styles.subtitle}>{subtitle}</AppText>}
        </View>
      </View>
    </TouchableHighlight>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    padding: 15,
    backgroundColor: colors.white,
  },
  detailContainer: {
    marginLeft: 10,
    justifyContent: 'center',
  },
  image: {
    width: 70,
    height: 70,
    borderRadius: 35,
  },
  title: {
    fontWeight: '500',
  },
  subtitle: {
    color: colors.medium,
    fontSize: 16,
  },
});

export default ListItem;
