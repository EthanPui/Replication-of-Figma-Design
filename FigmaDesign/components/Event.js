import {Text, StyleSheet, View, Image} from 'react-native';
import * as React from 'react';
import colors from '../assets/colors/colors';

export default CreateEvent = () => {
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

      {/* {User Response} */}
      <View style={styles.ResponseContainer}>
        <View style={styles.circleLeft}>{/* Add icon Tick */}</View>
        <View style={styles.circleMiddle}>{/* Add icon question mark */}</View>
        <View style={styles.circleRight}>{/* Add icon cross */}</View>
      </View>
    </View>
  );
};

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
    paddingTop: 9,
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

  ResponseContainer: {
    flexDirection: 'row',
  },
  circleLeft: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    borderRadius: 20,
    borderColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  circleMiddle: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    borderRadius: 20,
    borderColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
  circleRight: {
    backgroundColor: colors.white,
    shadowColor: colors.black,
    borderRadius: 20,
    borderColor: colors.black,
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.05,
    shadowRadius: 10,
    elevation: 2,
  },
});
