import {
  Text,
  StyleSheet,
  View,
  Image,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
import * as React from 'react';
import {color} from 'react-native-reanimated';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import colors from '../assets/colors/colors';

export default Home = () => {
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

        <Image
          source={require('../assets/images/button.png')}
          style={styles.buttonImage}
        />

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
    marginHorizontal: 70,
    marginTop: 31,
  },

  backgroundIcons: {
    // left: 10,
    // width: 370,
    height: 390,
    marginTop: 16,
    // marginLeft: 7,
  },

  container: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    alignItems: 'center',
    paddingTop: 34,
  },

  ImageLeft: {
    height: 200,
    width: 200,
  },

  ImageMiddle: {
    height: 250,
    width: 250,
  },
  ImageRight: {
    height: 200,
    width: 200,
  },
});
