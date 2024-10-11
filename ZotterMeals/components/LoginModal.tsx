import { ActivityIndicator, StyleSheet, View, Text, Modal, Pressable, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {FIREBASE_AUTH} from '../firebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

// interface Props {
//     modalVisible: boolean,
//     setModalVisible: Function
// }

export default function LoginModal() {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
        } catch (error: any) {
            alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false)
        }
    }

    return (
        <View>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>                    
                        <View>
                            <View style={styles.inputs}>
                                <TextInput 
                                placeholder="Email"
                                onChangeText={setEmail}
                                value={email}
                                placeholderTextColor={'#817f7f'}
                                style={styles.input}
                                />
                                <TextInput 
                                placeholder="Password"
                                onChangeText={setPassword}
                                value={password}
                                secureTextEntry
                                placeholderTextColor={'#817f7f'}
                                style={styles.input}
                                />
                            </View>
                            { loading ? <ActivityIndicator size="large" color='#A81612'/>
                            : <TouchableOpacity style={styles.button} onPress={() => signIn()}>
                                <Text style={styles.buttonText}>Log in</Text>
                            </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        alignItems: 'center',
    },

    modalView: {
        width: '100%',
        borderRadius: 20,
        shadowOpacity: .5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        },
        padding: 10,
    },

    inputs: {
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        marginTop: 20,
        marginBottom: 30
    },

    input: {
        color: 'white',
        fontSize: 25,
        paddingBottom: 5,
        borderBottomWidth: 1,
        borderBottomColor: 'white'
    },



    button: {
        backgroundColor: "#A81612",
        borderRadius: 10,
        width: 300,
        height: 50,
        justifyContent: "center",
        shadowOpacity: .5,
        shadowRadius: 10,
        shadowOffset: {
          width: 0,
          height: 5
        },
        alignSelf: 'center'
      },
    
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      }, 
})