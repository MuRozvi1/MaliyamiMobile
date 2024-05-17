import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ImageBackground source={require('../assets/pictures/bg.jpg')} style={styles.backgroundImage}>
      <View style={styles.overlay} />
      <Text style={styles.typo}>LOGIN TO</Text>
      <Text style={styles.typo1}>YOUR ACCOUNT</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="" size={24} color="#727272" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#727272" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="" size={24} color="#727272" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#727272" secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('ForgotPassword')}>
        <Text style={styles.link}>Forgot Password?</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('CreateAccount')}>
        <Text style={styles.link}>New User ? Create Account</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Login</Text>
        </View>
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
  typo: {
    color: '#FFF',
    fontSize: 60,
  },
  typo1: {
    color: '#E0701E',
    fontSize: 50,
    marginBottom: 100,
  },
  inputContainer: {
    backgroundColor: '#FFF',
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20,
    borderWidth: 1,
    borderColor: '#E0701E',
    borderRadius: 5,
    width: 300,
    paddingHorizontal: 10,
  },
  icon: {
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    color: '#000',
  },
  link: {
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
    margin: 70,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
  },
});

export default LoginScreen;