import React from 'react';
import { StyleSheet, View, TouchableOpacity, TextInput, Text } from 'react-native';

const CreateAccountScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Create Account</Text>
      <View style={styles.inputContainer}>
        <TextInput style={styles.input1} placeholder="+263" placeholderTextColor="#777" />
        <TextInput style={styles.input} placeholder="Phone Number" placeholderTextColor="#777" />
      </View>

      <TouchableOpacity onPress={() => navigation.navigate('OTP')}>
        <View style={styles.button}>
          <Text style={styles.buttonText}>Create Account</Text>
        </View>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={styles.link}>Already have an account? Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 100,
  },
  inputContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 100,
  },
  input1: {
    width: 70,
    height: 40,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  input: {
    flex: 1,
    height: 40,
    borderColor: '#777',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  button: {
    backgroundColor: '#E0701E',
    paddingVertical: 10,
    paddingHorizontal: 50,
    borderRadius: 10,
  },
  buttonText: {
    color: '#FFF',
    fontSize: 20,
    textAlign: 'center',
  },
  link: {
    color: '#777',
    fontSize: 16,
    textDecorationLine: 'underline',
    marginTop: 20,
  },
});

export default CreateAccountScreen;