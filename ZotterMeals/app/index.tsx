import { StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import LoginModal from '@/components/LoginModal';


export default function HomeScreen() {
  const [modalVisible, setModalVisible] = useState(false)

  const something = () => {
    console.log("21")
  }

  const something2 = () => {
    console.log("Yeah")
  }

  return (
    <View style={styles.container}>
      <View style={styles.text}>
        <Text style={styles.title}>ZotterMeals</Text>
        <Text style={styles.subtitle}>Simple Calorie Tracking for Anteaters</Text>
      </View>
      <Image style={styles.logo} source={require('../assets/images/eat.png')}></Image>
      <View style={styles.buttons}>
        <LoginModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
        <TouchableOpacity style={styles.button} onPress={() => setModalVisible(!modalVisible)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={something2}>
          <Text style={styles.buttonText}>Sign Up</Text>
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
    marginBottom: 50,
    width: 200,
    height: 200,
    overflow: 'visible'
    // borderRadius: 100,
  },
  
  buttons: {
    gap: 20,
  },

  button: {
    backgroundColor: "#A81612",
    borderRadius: 30,
    width: 250,
    height: 60,
    justifyContent: "center",
    shadowOpacity: .5,
    shadowRadius: 10,
    shadowOffset: {
      width: 0,
      height: 5
    }
  },

  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontSize: 20,
  }, 
});