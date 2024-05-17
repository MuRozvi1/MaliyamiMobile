import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput, ImageBackground } from 'react-native';

const OTPScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/pictures/bg2.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <Text style={styles.typo}>OTP</Text>
      <Text style={styles.typo1}>Verification</Text>
      <Text style={styles.typo2}>Enter the 4 Pin sent to you number.</Text>
      
      <View style={styles.inputContainer}>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
        <View style={styles.inputBox}>
          <TextInput style={styles.input} />
        </View>
      </View>

      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('Dashboard')}>
        <Text style={styles.buttonText}>Submit</Text>
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
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Adjust the opacity as needed
  },
  inputContainer: {
    flexDirection: 'row',
    marginTop: 20,
  },
  inputBox: {
    borderWidth: 1,
    borderColor: '#FFF',
    borderRadius: 5,
    marginHorizontal: 5,
  },
  input: {
    height: 40,
    paddingHorizontal: 10,
    color: '#FFF',
  },
  typo: {
    color: '#FFF',
    fontSize: 24,
  },
  typo1: {
    color: '#E0701E',
    fontSize: 24,
    marginBottom: 20,
  },
  typo2: {
    color: '#FFF',
    fontSize: 12,
    marginBottom: 20,
  },
  button: {
    display: 'flex',
    backgroundColor: '#E0701E',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
    margin: 50,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default OTPScreen;