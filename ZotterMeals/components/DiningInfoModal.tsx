import { StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

interface Props {
    modalVisible: boolean,
    setModalVisible: Function
}

export default function DiningInfoModal({modalVisible, setModalVisible}: Props) {
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
                                <Text style={styles.modalTitle}>Hours</Text>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.mealType}>Breakfast</Text>
                                    <Text style={styles.mealDetails}>9:00am-11:00am</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.mealType}>Lunch</Text>
                                    <Text style={styles.mealDetails}>11:00am-4:30pm</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.mealType}>Dinner</Text>
                                    <Text style={styles.mealDetails}>4:30pm-8:00pm</Text>
                                </View>
                            </View>
                            
                            <View style={styles.modalSection}>
                                <Text style={styles.modalTitle}>Pricing</Text>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.mealType}>Breakfast</Text>
                                    <Text style={styles.mealDetails}>$9.75</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.mealType}>Brunch</Text>
                                    <Text style={styles.mealDetails}>$13.75</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.mealType}>Lunch</Text>
                                    <Text style={styles.mealDetails}>$13.75</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.mealType}>Dinner</Text>
                                    <Text style={styles.mealDetails}>$14.95</Text>
                                </View>
                            </View>
                            
                            <View style={styles.modalSection}>
                                <Text style={styles.modalTitle}>Location</Text>
                            </View>
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
        height: '76%',
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
        fontSize: 35,
        fontWeight: 'bold'
    },

    spaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    mealType: {
        fontSize: 20,
        fontWeight: 'bold'
    },

    mealDetails: {
        fontSize: 20,
    },
})