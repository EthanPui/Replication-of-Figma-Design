import {Text, StyleSheet, View, Image, TouchableOpacity} from 'react-native';
import * as React from 'react';

export default Home = ({navigation}) => {
    return (
      <View>
        <Text style={styles.hi}>Hi</Text>
        <Image></Image>
      </View>
    );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  hi: {
    fontSize: 40,
  },
});
