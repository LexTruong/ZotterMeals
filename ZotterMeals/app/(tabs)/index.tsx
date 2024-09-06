import { StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image } from 'react-native';
import { StatusBar } from 'expo-status-bar';

export default function HomeScreen() {
  const something = () => {
    console.log("21")
  }

  const something2 = () => {
    console.log("Yeah")
  }

  return (
    <View style={styles.container}>
      <Text style={styles.title}>ZotterMeals</Text>
      <Text style={styles.subtitle}>Simple Calorie Tracking for Anteaters</Text>
      <Image style={styles.logo} source={require('../../assets/images/icon.png')}></Image>
      <View style={styles.buttons}>
        <TouchableOpacity style={styles.button} onPress={something}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={something2}>
          <Text style={styles.buttonText}>Sign Up</Text>
          </TouchableOpacity>
      </View>
      <StatusBar style="auto" />
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

  title: {
    color: 'white',
    fontSize: 50,
  },

  subtitle: {
    color: 'white',
    fontSize: 20,
    textAlign: 'center',
  },

  logo: {
    marginTop: 50,
    marginBottom: 50,
    width: 200,
    height: 200,
    borderRadius: 100,
  },
  
  buttons: {
    gap: 20,
  },

  button: {
    backgroundColor: "#A81612",
    borderRadius: 25,
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
  }, 
});