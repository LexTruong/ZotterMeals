import { StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';


interface Props {
    modalVisible: boolean,
    setModalVisible: Function
}

export default function DateTotalProgressModal({modalVisible, setModalVisible}: Props) {

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
                            <View style={styles.modalSection}>
                                <Text style={styles.modalTitle}> 3/14 Total Progress</Text>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Calories</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Calories From Fat</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Cholesterol</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Dietary Fiber</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Iron</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Protien</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Saturated Fat</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Serving Size</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Serving Unit</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Sodium</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Sugars</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Total Carbohydrates</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Total Fat</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Trans Fat</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Vitamin A</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Vitamin C</Text>
                                    <Text style={styles.goals}>100g/200g</Text>
                                </View>
                            </View>
                        </View>

                        <Pressable style={styles.arrowIconContainer} onPress={() => setModalVisible(!modalVisible)}>
                            <Ionicons name="arrow-back-outline" style={styles.arrowIcon}></Ionicons>
                        </Pressable>
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
        height: '80%',
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
        display: 'flex',
        flexDirection: 'column',
        gap: 30,
        paddingHorizontal: 5
    },

    modalSection: {
        display: 'flex',
        flexDirection: 'column',
        gap: 10,
    },

    closeButton: {
        textAlign: 'right',
        fontSize: 30,
        padding: 5,
    },

    modalTitle: {
        fontSize: 32,
        fontWeight: 'bold'
    },

    spaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    details: {
        fontWeight: 'bold',
        fontSize: 17,
    },

    goals: {
        fontSize: 17,
    },

    arrowIconContainer: {
        backgroundColor: "#A81612",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        marginTop: 20,
        // marginLeft: 10,
    },

    arrowIcon: {
        fontSize: 40,
        color: 'white',
    },
})