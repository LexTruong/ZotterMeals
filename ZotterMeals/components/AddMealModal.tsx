import { Alert, TextInput, StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {useState} from 'react'

interface Props {
    modalVisible: boolean,
    setModalVisible: Function
}

export default function AddMealModal({modalVisible, setModalVisible}: Props) {
    const [name, setName] = useState('')
    const [calories, setCalories] = useState('');
    const [caloriesFat, setCaloriesFat] = useState('')
    const [cholesterol, setCholestorol] = useState('')
    const [fiber, setFiber] = useState('')
    const [iron, setIron] = useState('')
    const [protein, setProtein] = useState('')
    const [saturatedFat, setSaturatedFat] = useState('')
    const [servingSize, setServingSize] = useState('')
    const [servingUnit, setServingUnit] = useState('')
    const [sodium, setSodium] = useState('')
    const [sugars, setSugars] = useState('')
    const [carbs, setCarbs] = useState('')
    const [totalFat, setTotalFat] = useState('')
    const [transFat, setTransFat] = useState('')
    const [vitaminA, setVitaminA] = useState('')
    const [vitaminC, setVitaminC] = useState('')

    const addUnit = (num: string, setUnit: Function) => {
        if(num && !num.includes('g')) {
            setUnit(num + 'g')
        }
    }

    const addMeal = () => {
        console.log("HELLO")
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
                            <Text style={styles.modalTitle}>Add Meal</Text>
                            <TextInput 
                                placeholder="meal name"
                                onChangeText={setName}
                                value={name}
                                style={styles.nameInput}
                                />

                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Calories</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={calories}
                                    onChangeText={setCalories}
                                    onEndEditing={() => addUnit(calories, setCalories)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Calories From Fat</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={caloriesFat}
                                    onChangeText={setCaloriesFat}
                                    onEndEditing={() => addUnit(caloriesFat, setCaloriesFat)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Cholesterol</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={cholesterol}
                                    onChangeText={setCholestorol}
                                    onEndEditing={() => addUnit(cholesterol, setCholestorol)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Dietary Fiber</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={fiber}
                                    onChangeText={setFiber}
                                    onEndEditing={() => addUnit(fiber, setFiber)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Iron</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={iron}
                                    onChangeText={setIron}
                                    onEndEditing={() => addUnit(iron, setIron)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Protein</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={protein}
                                    onChangeText={setProtein}
                                    onEndEditing={() => addUnit(protein, setProtein)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Saturated Fat</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={saturatedFat}
                                    onChangeText={setSaturatedFat}
                                    onEndEditing={() => addUnit(saturatedFat, setSaturatedFat)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Serving Size</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={servingSize}
                                    onChangeText={setServingSize}
                                    onEndEditing={() => addUnit(servingSize, setServingSize)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Serving Unit</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={servingUnit}
                                    onChangeText={setServingUnit}
                                    onEndEditing={() => addUnit(servingUnit, setServingUnit)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Sodium</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={sodium}
                                    onChangeText={setSodium}
                                    onEndEditing={() => addUnit(sodium, setSodium)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Sugars</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={sugars}
                                    onChangeText={setSugars}
                                    onEndEditing={() => addUnit(sugars, setSugars)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Total Carbohydrates</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={carbs}
                                    onChangeText={setCarbs}
                                    onEndEditing={() => addUnit(carbs, setCarbs)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Total Fat</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={totalFat}
                                    onChangeText={setTotalFat}
                                    onEndEditing={() => addUnit(totalFat, setTotalFat)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Trans Fat</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={transFat}
                                    onChangeText={setTransFat}
                                    onEndEditing={() => addUnit(transFat, setTransFat)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Vitamin A</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={vitaminA}
                                    onChangeText={setVitaminA}
                                    onEndEditing={() => addUnit(vitaminA, setVitaminA)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Vitamin C</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={3}
                                    keyboardType={'numeric'}
                                    value={vitaminC}
                                    onChangeText={setVitaminC}
                                    onEndEditing={() => addUnit(vitaminC, setVitaminC)}
                                    returnKeyType={'done'}
                                />
                            </View>

                            <Pressable style={styles.addIconContainer} onPress={() => addMeal()}>
                                <Ionicons style={[styles.addIcon]} name="add-circle-outline"></Ionicons>
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

    textInput: {
        borderBottomColor: 'black',
        borderBottomWidth: 1,
        width: 40
    },

    nameInput: {
        fontSize: 20,
        paddingBottom: 5,
        borderBottomWidth: 1,
    },

    modalView: {
        backgroundColor: 'white',
        height: '85%',
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
        gap: 10,
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

    spaceBetween: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    details: {
        fontWeight: 'bold',
        fontSize: 18,
    },

    goals: {
        fontSize: 18,
    },

    addIconContainer: {
        backgroundColor: "#A81612",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 25,
        alignSelf: 'flex-end',
        marginTop: 10
    },

    addIcon: {
        fontSize: 40,
        color: 'white',
    },
})