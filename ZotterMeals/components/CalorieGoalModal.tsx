import { FIREBASE_AUTH, FIRESTORE_DB } from "@/firebaseConfig"
import Ionicons from "@expo/vector-icons/Ionicons"
import { doc, updateDoc } from "firebase/firestore"
import { useState } from "react"
import { Modal, Pressable, StyleSheet, Text, TextInput, View } from "react-native"

interface Props {
    modalVisible: boolean,
    setModalVisible: Function,
    calorieGoal: string,
    setCalorieGoal: (text: string) => void,
    updateData: Function
}

export default function CalorieGoalModal({modalVisible, setModalVisible, calorieGoal, setCalorieGoal, updateData}: Props) {

    const currentUserId = FIREBASE_AUTH.currentUser?.uid

    // update calorie goal in database
    const updateCalorieGoal = async () => {
        
        if (currentUserId) {
            try {
                const docRef = doc(FIRESTORE_DB, "users", currentUserId)
                await updateDoc(docRef, {
                    'goals.calories': calorieGoal
                })

                console.log("Updated calorie goal.")
                updateData()
            } catch (e) {
                console.error("Error updating calorie goal: ", e);
            }

            setModalVisible(false)
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
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>{"Set Daily\nCalorie Goal"}</Text>
                            <TextInput
                             style={styles.textInput}
                             maxLength={4}
                             value={calorieGoal}
                             onChangeText={setCalorieGoal}
                             returnKeyType={'done'}
                            ></TextInput>

                            <Pressable style={styles.button} onPress={() => updateCalorieGoal()}>
                                <Text style={styles.buttonText}>Done</Text>
                            </Pressable>
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
        height: '30%',
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

    closeButton: {
        textAlign: 'right',
        fontSize: 30,
        padding: 5,
    },

    modalContent: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
        paddingHorizontal: 5,
        alignItems: 'center'
    },

    modalTitle: {
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
        marginTop: 10,
        marginBottom: 5
    },

    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        fontSize: 30,
        width: 100,
        textAlign: 'center'
    },

    button: {
        backgroundColor: "#A81612",
        borderRadius: 10,
        width: 200,
        height: 50,
        justifyContent: "center",
        shadowOpacity: .5,
        shadowRadius: 10,
        shadowOffset: {
          width: 0,
          height: 5
        },
        alignSelf: 'center',
        marginTop: 20
      },

      buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 20,
      }, 
})