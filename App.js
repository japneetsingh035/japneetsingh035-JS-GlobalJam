import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, Text, View, ImageBackground, TextInput, TouchableOpacity } from 'react-native';

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    // Add your login logic here
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <View style={styles.container}>
      {/* Background Image */}
      <ImageBackground
        source={require('./assets/bg.png')} // Replace with your background image
        style={styles.backgroundImage}
      >
        <Text style={styles.title}>Global Jam</Text>
        <Text style={styles.subtitle}>Collaborative Music Platform</Text>

        {/* World Map (Replace with your map component) */}
        {/* <View style={styles.mapContainer}>
          {/* Your map component displaying user locations and collaborations
        </View> */}

        {/* Show login form or call-to-action button */}
        {showLogin ? (
          <View style={styles.loginContainer}>
            <Text style={styles.title}>Global Jam</Text>
            <TextInput
              style={styles.loginInput}
              placeholder="Email Address"
              onChangeText={(text) => setEmail(text)}
              value={email}
            />
            <TextInput
              style={styles.loginInput}
              placeholder="Password"
              secureTextEntry={true}
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
              <Text style={styles.loginButtonText}>Login</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity style={styles.ctaButton} onPress={() => setShowLogin(true)}>
            <Text style={styles.ctaText}>Join the Global Community</Text>
          </TouchableOpacity>
        )}

      </ImageBackground>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'orange',
    marginBottom: 10,
    textAlign: 'center',
  },
  subtitle: {
    fontSize: 18,
    color: '#FFFFFF',
    marginBottom: 30,
  },
  mapContainer: {
    width: '80%',
    height: 200,
    backgroundColor: '#FFFFFF',
    borderRadius: 10,
    marginBottom: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  searchBar: {
    width: '80%',
    height: 40,
    backgroundColor: '#FFFFFF',
    borderRadius: 20,
    paddingLeft: 15,
    marginBottom: 20,
  },
  ctaButton: {
    backgroundColor: '#FF5733',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderRadius: 25,
  },
  ctaText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
  },
  loginContainer: {
    backgroundColor: 'rgba(255, 255, 255, 1)',
    padding: 20,
    borderRadius: 10,
    position: 'absolute',
    width: '80%',
  },
  loginInput: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  loginButton: {
    backgroundColor: '#FF5733',
    paddingVertical: 10,
    borderRadius: 25,
  },
  loginButtonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
