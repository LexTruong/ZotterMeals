import { StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';

export interface TotalInfoProps {
    totalCalories: number,
    totalProtein: number,
    totalFat: number,
    totalTransFat: number,
    totalSaturatedFat: number,
    totalCholesterol: number,
    totalSodium: number,
    totalCarbohydrates: number,
    totalFiber: number,
    totalSugars: number,
    totalIron: number,
    totalVitaminA: number,
    totalVitaminC: number,
    totalCalcium: number
}

interface Props {
    modalVisible: boolean,
    setModalVisible: Function,
    totalInfo: TotalInfoProps
}

export default function TotalProgressModal({modalVisible, setModalVisible, totalInfo }: Props) {

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
                                <Text style={styles.modalTitle}>Total Progress</Text>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Calories</Text>
                                    <Text style={styles.goals}>{totalInfo.totalCalories}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Cholesterol</Text>
                                    <Text style={styles.goals}>{totalInfo.totalCholesterol}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Dietary Fiber</Text>
                                    <Text style={styles.goals}>{totalInfo.totalFiber}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Iron</Text>
                                    <Text style={styles.goals}>{totalInfo.totalIron}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Protein</Text>
                                    <Text style={styles.goals}>{totalInfo.totalProtein}g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Saturated Fat</Text>
                                    <Text style={styles.goals}>{totalInfo.totalSaturatedFat}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Sodium</Text>
                                    <Text style={styles.goals}>{totalInfo.totalSodium}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Sugars</Text>
                                    <Text style={styles.goals}>{totalInfo.totalSugars}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Total Carbohydrates</Text>
                                    <Text style={styles.goals}>{totalInfo.totalCarbohydrates}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Total Fat</Text>
                                    <Text style={styles.goals}>{totalInfo.totalFat}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Trans Fat</Text>
                                    <Text style={styles.goals}>{totalInfo.totalTransFat}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Vitamin A</Text>
                                    <Text style={styles.goals}>{totalInfo.totalVitaminA}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Vitamin C</Text>
                                    <Text style={styles.goals}>{totalInfo.totalVitaminC}</Text>
                                </View>
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

    details: {
        fontWeight: 'bold',
        fontSize: 20,
    },

    goals: {
        fontSize: 20,
    },
})