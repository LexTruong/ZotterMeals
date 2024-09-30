import { ActivityIndicator, StyleSheet, View, Text, Modal, Pressable, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import {FIREBASE_AUTH} from '../firebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

interface Props {
    modalVisible: boolean,
    setModalVisible: Function
}

export default function LoginModal({modalVisible, setModalVisible}: Props) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [loading, setLoading] = useState(false);
    const auth = FIREBASE_AUTH

    const signIn = async () => {
        setLoading(true)
        try {
            const response = await signInWithEmailAndPassword(auth, email, password)
            console.log(response)
            setModalVisible(false)
        } catch (error: any) {
            alert('Sign in failed: ' + error.message)
        } finally {
            setLoading(false)
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
                            <Text style={styles.modalTitle}>Login</Text>    

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
                                <Text style={styles.buttonText}>Go!</Text>
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
        height: '35%',
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
        gap: 30,
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