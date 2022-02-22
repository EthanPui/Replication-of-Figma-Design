import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TextInput,
  Button,
} from 'react-native';
import * as React from 'react';
import colors from '../assets/colors/colors';

export default CreateEvent = ({route, navigation}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}>
        {/* {Logo} */}
        <View style={styles.logoFront}>
          <Image
            source={require('../assets/images/logo.png')}
            style={styles.logo}></Image>
        </View>

        {/* {Title} */}
        <View style={styles.titleWrapper}>
          <Text style={styles.titleText}>Create your event today!</Text>
        </View>

        {/* {Input Event Name} */}
        <View style={styles.EventNameWrapper}>
          <TextInput
            style={styles.EventNameInput}
            placeholder="Event Name"></TextInput>
        </View>

        {/* {Input Host Name} */}
        <View style={styles.HostNameWrapper}>
          <TextInput
            style={styles.HostNameInput}
            placeholder="Host Name"></TextInput>
        </View>

        {/* {Button Next} */}
        <View style={styles.buttonInput}>
          <Button
            title="Next"
            color="#06D6A0"
            accessibilityLabel="Create Event"
          />
        </View>
      </ImageBackground>
    </View>
  );
};

// After clicking the ‘create my next event’ button,
// the user should be directed to a new page where they can input their
// event name, host name, start and end time/date, location and event photo.
// Ensure there is a “next” button on the page. For this page, there is no Figma template to go off,

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  logoFront: {
    backgroundColor: colors.white,
    width: 100,
    height: 100,
    marginTop: 100,
    marginHorizontal: 140,
    borderRadius: 25,
  },

  logo: {
    height: 100,
    width: 100,
    marginVertical: -4,
    alignSelf: 'center',
  },

  titleWrapper: {
    alignSelf: 'center',
  },

  titleText: {
    fontSize: 25,
    fontFamily: 'OpenSans-SemiBold',
    color: colors.white,
    width: '100%',
    marginHorizontal: 40,
    paddingTop: 10,
  },

  EventNameWrapper: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    borderRadius: 20,
    marginTop: 20,
  },

  EventNameInput: {
    paddingLeft: 20,
  },

  HostNameWrapper: {
    backgroundColor: colors.white,
    marginHorizontal: 10,
    borderRadius: 20,
    marginTop: 20,
  },

  HostNameInput: {
    paddingLeft: 20,
  },

  buttonInput: {
    marginTop: 20,
    borderRadius: 25,
    marginHorizontal: 20,
    borderColor: colors.white,
  },
});
