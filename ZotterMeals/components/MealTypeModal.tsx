import { ActivityIndicator, StyleSheet, View, Text, Modal, Pressable, TextInput, TouchableOpacity } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useEffect, useState } from 'react';
import {FIREBASE_AUTH} from '../firebaseConfig.js';
import { signInWithEmailAndPassword, createUserWithEmailAndPassword } from 'firebase/auth';

interface Props {
    modalVisible: boolean,
    setModalVisible: Function,
    mealType: string,
    setMealType: Function,
    changeMealInfo: Function
}

export default function MealTypeModal({modalVisible, setModalVisible, mealType, setMealType, changeMealInfo}: Props) {

    useEffect(() => {
        changeMealInfo()
        setTimeout(() => {
            setModalVisible(false)
          }, 400);
    }, [mealType])

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
                            <Text style={styles.modalTitle}>Meal Type</Text>    
                            
                            <TouchableOpacity style={mealType == "breakfast" ? [styles.button, styles.selected] : styles.button }  onPress={() => setMealType("breakfast")}>
                                <Text style={styles.buttonText}>Breakfast</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={mealType == "lunch" ? [styles.button, styles.selected] : styles.button } onPress={() => setMealType("lunch")}>
                                <Text style={styles.buttonText}>Lunch</Text>
                            </TouchableOpacity>
                            <TouchableOpacity style={mealType == "dinner" ? [styles.button, styles.selected] : styles.button }  onPress={() => setMealType("dinner")}>
                                <Text style={styles.buttonText}>Dinner</Text>
                            </TouchableOpacity>
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
        height: '45%',
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
        fontWeight: 'bold',
        marginBottom: 20
    },

    button: {
        backgroundColor: "#451400",
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
        alignSelf: 'center',
        marginBottom: 20,
      },

      selected: {
        backgroundColor: "#A81612",
      },
    
      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      }, 
})