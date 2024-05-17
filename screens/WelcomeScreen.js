import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground } from 'react-native';

const WelcomeScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/pictures/bg1.jpg')} style={styles.backgroundImage}>
        <View style={styles.overlay} />
        <Text style={styles.welcome}>Welcome To</Text>
        <Text style={styles.name}>Maliyami</Text>
        <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Login')}>
          <Text style={styles.buttonText}>Launch</Text>
        </TouchableOpacity>
      </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121025',
    alignItems: 'center',
    justifyContent: 'center',
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.7)', // Adjust the opacity as needed
  },
  welcome: {
    color: '#FFF',
    fontSize: 60,
  },
  name: {
    color: '#E0701E',
    fontSize: 60,
    marginBottom: 150,
  },
  button: {
    display: 'flex',
    backgroundColor: '#E0701E',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default WelcomeScreen;