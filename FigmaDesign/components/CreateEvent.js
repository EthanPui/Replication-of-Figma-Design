import {Text, StyleSheet, View, Image, ImageBackground} from 'react-native';
import * as React from 'react';
import colors from '../assets/colors/colors';

export default CreateEvent = ({route, navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}>
        
        </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },

});

// After clicking the ‘create my next event’ button, 
// the user should be directed to a new page where they can input their 
// event name, host name, start and end time/date, location and event photo. 
// Ensure there is a “next” button on the page. For this page, there is no Figma template to go off, 
