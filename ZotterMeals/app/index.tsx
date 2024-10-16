import { StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LoginModal from '@/components/LoginModal';
import SignUpModal from '@/components/SignUpModal';

export default function HomeScreen() {
  const [signUpModalVisible, setSignUpModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>ZotterMeals</Text>
      </View>
        <LoginModal></LoginModal>
        <Image style={styles.logo} source={require('../assets/images/eat.png')}></Image>
        <SignUpModal modalVisible={signUpModalVisible} setModalVisible={setSignUpModalVisible}/>
        <View style={styles.spaceBetween}>
          <Text style={styles.buttonText}>Don't have an account?</Text>
          <TouchableOpacity onPress={() => setSignUpModalVisible(!signUpModalVisible)}>
            <Text style={styles.signUpText}>  Register here</Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#451400',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    flexDirection: 'column',
  },

  text: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: 10,
    width: 350
  },

  title: {
    color: 'white',
    fontSize: 50,
  },

  subtitle: {
    color: 'white',
    fontSize: 25,
    textAlign: 'center',
  },

  logo: {
    marginTop: 50,
    marginBottom: 20,
    width: 200,
    height: 200,
    overflow: 'visible'
  },
  
  buttons: {
    gap: 15,
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  }, 

  signUpText: {
    color: '#A81612',
    textAlign: 'center',
    fontSize: 20,
    textDecorationLine: 'underline',
  },

  spaceBetween: {
    marginTop: 30,
    flexDirection: 'row',
  },
});