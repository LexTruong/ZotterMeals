import { ScrollView, StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import { MealCardInfo } from './MealCard';
import { useEffect } from 'react';

interface Props {
    modalVisible: boolean,
    setModalVisible: Function
    info: MealCardInfo
}


export default function MealInfoModal({modalVisible, setModalVisible, info}: Props) {

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
                                <Text style={styles.modalTitle}>{info.name}</Text>

                                <View style={styles.borderBottom}>
                                    <Text style={styles.modalSubtitle}>{info.description}</Text>
                                </View>
                                <ScrollView style={styles.scrollView} >
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Serving Size</Text>
                                    <Text style={styles.goals}>{info.nutrition.servingSize} {info.nutrition.servingUnit}</Text>
                                </View>
                                <View style={[styles.thickBorderSpaceBetween, styles.spaceBetween]}>
                                    <Text style={styles.details}>Calories</Text>
                                    <Text style={styles.goals}>{info.nutrition.calories}</Text>
                                </View>
                                <View style={[styles.spaceBetween, styles.singleSpaceBetweenNoBorder]}>
                                    <Text style={styles.details}>Total Fat</Text>
                                    <Text style={styles.goals}>{info.nutrition.totalFat} g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.detailsSmall}>   Saturated Fat</Text>
                                    <Text style={styles.goals}>{info.nutrition.saturatedFat} g</Text>
                                </View>
                                <View style={[styles.spaceBetween, styles.thinBorderSpaceBetween]}>
                                    <Text style={styles.detailsSmall}>   Trans Fat</Text>
                                    <Text style={styles.goals}>{info.nutrition.transFat} g</Text>
                                </View>
                                <View style={[styles.spaceBetween, styles.singleSpaceBetween]}>
                                    <Text style={styles.details}>Cholesterol</Text>
                                    <Text style={styles.goals}>{info.nutrition.cholesterol} mg</Text>
                                </View>
                                <View style={[styles.spaceBetween, styles.singleSpaceBetween]}>
                                    <Text style={styles.details}>Sodium</Text>
                                    <Text style={styles.goals}>{info.nutrition.sodium} mg</Text>
                                </View>
                                <View style={[styles.spaceBetween, styles.singleSpaceBetweenNoBorder]}>
                                    <Text style={styles.details}>Total Carbohydrates</Text>
                                    <Text style={styles.goals}>{info.nutrition.totalCarbohydrates} g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.detailsSmall}>   Dietary Fiber</Text>
                                    <Text style={styles.goals}>{info.nutrition.dietaryFiber} g</Text>
                                </View>
                                <View style={[styles.spaceBetween, styles.thinBorderSpaceBetween]}>
                                    <Text style={styles.detailsSmall}>   Total Sugars</Text>
                                    <Text style={styles.goals}>{info.nutrition.sugars} g</Text>
                                </View>
                                <View style={[styles.spaceBetween, styles.singleSpaceBetween]}>
                                    <Text style={styles.details}>Protein</Text>
                                    <Text style={styles.goals}>{info.nutrition.protein} g</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Iron</Text>
                                    <Text style={styles.goals}>{info.nutrition.iron}</Text>
                                </View>

                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Vitamin A</Text>
                                    <Text style={styles.goals}>{info.nutrition.vitaminA}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Vitamin C</Text>
                                    <Text style={styles.goals}>{info.nutrition.vitaminC}</Text>
                                </View>
                                <View style={styles.spaceBetween}>
                                    <Text style={styles.details}>Calcium</Text>
                                    <Text style={styles.goals}>{info.nutrition.calcium}</Text>
                                </View>
                                </ScrollView>
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
        flex: 1
    },

    scrollView: {
        flexGrow: 1,
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

    modalSubtitle: {
        fontSize: 16
    },

    borderBottom: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        paddingBottom: 15
    },

    spaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
    },

    details: {
        fontWeight: 'bold',
        fontSize: 16,
    },

    detailsSmall: {
        fontSize: 16,
    },

    goals: {
        fontSize: 16,
    },
    
    thickBorderSpaceBetween: {
        borderBottomWidth: 2,
        paddingBottom: 5,
    },

    thinBorderSpaceBetween: {
        borderBottomWidth: 1,
        paddingBottom: 5,
    },

    singleSpaceBetween: {
        borderBottomWidth: 1,
        paddingTop: 5,
        paddingBottom: 5,
    },

    singleSpaceBetweenNoBorder: {
        paddingTop: 5,
        paddingBottom: 5,
    }

    
})