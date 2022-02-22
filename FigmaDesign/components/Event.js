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
import DatePicker from 'react-native-neat-date-picker';

export default CreateEvent = ({route, navigation}) => {
  return (
    <View>
      {/* {CoverPhoto} */}
      <View style={styles.coverPhotoWrapper}>
        <Image
          source={require('../assets/images/CoverPhoto.png')}
          style={styles.coverPhoto}
        />
      </View>

      {/* {Title Icon} */}
      <View style={styles.titleIconWrapper} />

      {/* {Title} */}
      <View style={styles.titleWrapper}>
        <Text style={styles.titleText}>Anica’s 22nd Birthday</Text>
      </View>

      {/* {Host Name} */}
      <View style={styles.hostNameWrapper}>
        <Text style={styles.hostNameText}>Hosted by Anica</Text>
      </View>
    </View>
  );
};

// After clicking the ‘create my next event’ button,
// the user should be directed to a new page where they can input their
// event name, host name, start and end time/date, location and event photo.
// Ensure there is a “next” button on the page.

const styles = StyleSheet.create({
  coverPhotoWrapper: {},
  coverPhoto: {
    height: 210,
    width: '100%',
  },

  titleWrapper: {},

  titleText: {
    fontSize: 26,
    fontFamily: 'OpenSans-Bold',
    color: '#501FC1',
    width: '50%',
    marginLeft: 69,
    paddingTop: 10,
  },

  hostNameWrapper: {},

  hostNameText: {
    fontSize: 16,
    fontFamily: 'OpenSans-Bold',
    color: '#501FC1',
    opacity: 0.3,
    width: '50%',
    marginLeft: 69,
    paddingTop: 3,
  },
});
