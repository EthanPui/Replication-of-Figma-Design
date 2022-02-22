import {
  Text,
  StyleSheet,
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
} from 'react-native';
import * as React from 'react';
import colors from '../assets/colors/colors';
import CreateEvent from './CreateEvent';

export default Home = ({navigation}) => {
  //   const createEventData = ({item}) => {
  return (
    <View>
      <ImageBackground
        source={require('../assets/images/background.png')}
        style={styles.backgroundImage}>
        {/* {Image Navbar} */}
        <Image
          source={require('../assets/images/Navbar.png')}
          style={styles.navbarImage}
        />

        {/* {Title} */}
        <Text style={styles.titleText}>Facebook events without Facebook.</Text>

        {/* {Description} */}
        <Text style={styles.descriptiontext}>
          Easily host and share events with your friends across any social
          media.
        </Text>

        <TouchableOpacity onPress={() => navigation.navigate('CreateEvent')}>
          <Image
            source={require('../assets/images/button.png')}
            style={styles.buttonImage}
          />
        </TouchableOpacity>

        <ImageBackground
          source={require('../assets/images/icons-background.png')}
          style={styles.backgroundIcons}>
          {/* {3 Images} */}
          <View style={styles.container}>
            <Image
              source={require('../assets/images/Image-left.png')}
              style={styles.ImageLeft}
            />
            <Image
              source={require('../assets/images/Image-middle.png')}
              style={styles.ImageMiddle}
            />
            <Image
              source={require('../assets/images/Image-right.png')}
              style={styles.ImageRight}
            />
          </View>
        </ImageBackground>
      </ImageBackground>
    </View>
  );
  //   };
};

const styles = StyleSheet.create({
  backgroundImage: {
    width: '100%',
    height: '100%',
  },

  navbarImage: {
    marginHorizontal: 23,
    marginTop: 13,
    height: 30,
    width: 346,
  },

  titleText: {
    fontSize: 32,
    fontFamily: 'OpenSans-ExtraBold',
    color: colors.white,
    width: '90%',
    marginHorizontal: 40,
    paddingTop: 76,
  },

  descriptiontext: {
    fontSize: 15,
    fontFamily: 'OpenSans-Regular',
    color: colors.white,
    paddingTop: 30,
    marginHorizontal: 40,
    textAlign: 'center',
  },

  buttonImage: {
    width: 221,
    height: 49,
    marginHorizontal: 90,
    marginTop: 31,
  },

  backgroundIcons: {
    height: 390,
    marginTop: 16,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 34,
    marginHorizontal: 90,
  },

  ImageLeft: {
    height: 271,
    width: 130,
  },

  ImageMiddle: {
    height: 342,
    width: 236,
  },
  ImageRight: {
    height: 271,
    width: 130,
  },
});
