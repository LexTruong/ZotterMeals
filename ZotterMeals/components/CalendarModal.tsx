import { StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from 'react';
import DateTotalProgressModal from './DateTotalProgressModal';

interface Props {
    modalVisible: boolean,
    setModalVisible: Function
}

export default function CalendarModal({modalVisible, setModalVisible}: Props) {
    const [dateModalVisible, setDateModalVisible] = useState(false)

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
                            <DateTotalProgressModal modalVisible={dateModalVisible} setModalVisible={setDateModalVisible} />
                            <Pressable onPress={() => setDateModalVisible(!dateModalVisible)}>
                                <Text>CALENDARS</Text>
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