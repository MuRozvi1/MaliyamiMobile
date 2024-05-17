import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, ImageBackground, TextInput } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const ForgotPasswordScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.typo}>FORGOT</Text>
      <Text style={styles.typo1}>PASSWORD</Text>

      <View style={styles.inputContainer}>
        <Ionicons name="" size={24} color="#727272" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#727272" />
      </View>

      <View style={styles.inputContainer}>
        <Ionicons name="" size={24} color="#727272" style={styles.icon} />
        <TextInput style={styles.input} placeholder="Password" placeholderTextColor="#727272" secureTextEntry={true} />
      </View>

      <TouchableOpacity onPress={() => console.log('Forgot Password')}>
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
  typo: {
    color: '#FFF',
    fontSize: 50,
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
    color: '#FFF',
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

export default ForgotPasswordScreen;