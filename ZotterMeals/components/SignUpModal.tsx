import { ActivityIndicator, StyleSheet, View, Text, Modal, Pressable, TextInput, TouchableOpacity , Button, KeyboardAvoidingView} from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {FIREBASE_AUTH, FIRESTORE_DB} from '../firebaseConfig.js';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { doc, setDoc } from 'firebase/firestore';

interface Props {
    modalVisible: boolean,
    setModalVisible: Function
}

export default function SignUpModal({modalVisible, setModalVisible}: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH

    const signUp = async () => {
        if (password === confirmPassword) {
            setLoading(true)
            try {
                const response = await createUserWithEmailAndPassword(auth, email, password)
                console.log(response)
                alert('Account Created!')
                setModalVisible(false)

                // Add user to firestore DB


                const currentUserId = FIREBASE_AUTH.currentUser?.uid
                if (currentUserId) {
                    const docRef = await setDoc(doc(FIRESTORE_DB, "users", currentUserId), {
                        goals: {},
                        currentDay: [],
                        pastDates: []
                    })
                }
                
            } catch(error: any) {
                console.log(error)
                alert("Sign in failed: " + error.message)
            } finally {
                setLoading(false)
            }
        } else {
            alert("Passwords Do Not Match")
        }

    }

    return (
        <View>
            <Modal
             animationType="slide"
             transparent={true}
             visible={modalVisible}
             onRequestClose={() => {
                setModalVisible(!modalVisible)
             }}>
                <View style={styles.centeredView}>
                    <View style={styles.modalView}>
                        <Pressable
                        onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons style={styles.closeButton} name="close-circle-outline"></Ionicons>
                        </Pressable>
                        
                        
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>SignUp</Text>    

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
                                <TextInput 
                                placeholder="Confirm Password"
                                onChangeText={setConfirmPassword}
                                value={confirmPassword}
                                secureTextEntry
                                placeholderTextColor={'#817f7f'}
                                style={styles.input}
                                />
                            </View>
                            { loading ? <ActivityIndicator size="large" color='#A81612'/>
                            : <TouchableOpacity style={styles.button} onPress={() => signUp()}>
                                <Text style={styles.buttonText}>Create Account</Text>
                            </TouchableOpacity>
                            }
                        </View>
                    </View>
                </View>
            </Modal>
        </View>
    )
}

const styles = StyleSheet.create({
    centeredView: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },

    modalView: {
        backgroundColor: 'white',
        height: '42%',
        width: '85%',
        borderRadius: 20,
        shadowOpacity: .5,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        },
        padding: 10,
    },

    modalContent: {
        paddingHorizontal: 5
    },

    closeButton: {
        textAlign: 'right',
        fontSize: 30,
        padding: 5,
    },

    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold'
    },

    inputs: {
        display: 'flex',
        flexDirection: 'column',
        gap: 20,
        marginTop: 20,
        marginBottom: 30
    },

    input: {
        fontSize: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,
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
        },
        alignSelf: 'center'
      },
    
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      }, 
})