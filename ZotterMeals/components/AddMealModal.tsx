import { Alert, TextInput, StyleSheet, View, Text, Modal, Pressable } from 'react-native'
import Ionicons from '@expo/vector-icons/Ionicons';
import {useState} from 'react'
import {collection, addDoc, setDoc, doc, updateDoc, arrayUnion, getDoc} from "firebase/firestore"
import {FIREBASE_AUTH, FIRESTORE_DB } from '../firebaseConfig.js'
import * as Haptics from 'expo-haptics';
import { Dropdown } from 'react-native-element-dropdown';
import { MealCardInfo } from './MealCard.js';

interface Props {
    modalVisible: boolean,
    setModalVisible: Function,
    updateData: Function
}

export default function AddMealModal({modalVisible, setModalVisible, updateData}: Props) {
    const [name, setName] = useState('')
    const [description, setDescription] = useState('')
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
    
    const [dropValue, setDropValue] = useState<string | null>(null)
    const [isFocus, setIsFocus] = useState(false)
    const currentUserId = FIREBASE_AUTH.currentUser?.uid

    const addMeal = async () => {
        Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Heavy)
        if (name && calories && dropValue) {
            
            let info = {
                name,
                description: '',
                nutrition: {
                    calories,
                    protein,
                    caloriesFromFat : caloriesFat,
                    totalFat,
                    transFat,
                    cholesterol,
                    sodium,
                    totalCarbohydrates : carbs,
                    dietaryFiber : fiber,
                    sugars,
                    iron,
                    vitaminA,
                    vitaminC,
                    saturatedFat,
                    servingSize,
                    servingUnit
                }
            }
                info.name = name;
                info.nutrition.calories = calories;
                info.nutrition.caloriesFromFat = caloriesFat;
                info.nutrition.cholesterol = cholesterol;
                info.nutrition.dietaryFiber = fiber;
                info.nutrition.iron = iron;
                info.nutrition.protein = protein;
                info.nutrition.saturatedFat = saturatedFat;
                info.nutrition.servingSize = servingSize;
                info.nutrition.servingUnit = servingUnit;
                info.nutrition.sodium = sodium;
                info.nutrition.sugars = sugars;
                info.nutrition.totalCarbohydrates = carbs;
                info.nutrition.totalFat = totalFat;
                info.nutrition.transFat = transFat;
                info.nutrition.vitaminA = vitaminA;
                info.nutrition.vitaminC = vitaminC;
                info.description = '';

            if (currentUserId) {
                try {
                    const docRef = doc(FIRESTORE_DB, "users", currentUserId);
                    const docSnap = await getDoc(docRef);
                    
                    if (docSnap.exists()) {
                        const currentMeals = docSnap.data().currentDay

                        console.log(dropValue)
                        console.log(info)
                        if (dropValue == "Breakfast") {
                            currentMeals[0].data.push(info)
                        } else if (dropValue == "Lunch") {
                            currentMeals[1].data.push(info)
                        } else if (dropValue == "Dinner") {
                            currentMeals[2].data.push(info)
                        }
                        
                        await updateDoc(docRef, {
                            currentDay: currentMeals
                        })

                        alert("Added " + info.name)
                    } else {
                        console.log("No such document!")
                    }

                    console.log("Added " + info.name);
                } catch (e) {
                    console.error("Error adding document: ", e);
                }
            }
            updateData()
            setModalVisible(false)
        }
        else {
            alert("Please add a name, meal type, and calories!");
        }
    }

    const addUnit = (num: string, setUnit: Function) => {
        if(num && !num.includes('g')) {
            setUnit(num)
        }
    }

    const mealTypes = [
        {label: 'Breakfast', value:'Breakfast'},
        {label: 'Lunch', value:'Lunch'},
        {label: 'Dinner', value:'Dinner'},

    ]

    const renderLabel = () => {
        if (dropValue || isFocus) {
          return (
            <Text style={[styles.dropLabel, isFocus && { color: 'blue' }]}>
              Dropdown label
            </Text>
          );
        }
        return null;
      };

    const handleModalClose = () => {
        setModalVisible(!modalVisible);
        setName('');
        setDescription('');
        setCalories('');
        setCaloriesFat('');
        setCholestorol('');
        setFiber('');
        setIron('');
        setProtein('');
        setSaturatedFat('');
        setServingSize('');
        setServingUnit('');
        setSodium('');
        setSugars('');
        setCarbs('');
        setTotalFat('');
        setTransFat('');
        setVitaminA('');
        setVitaminC('');
    };


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
                        onPress={handleModalClose}>
                            <Ionicons style={styles.closeButton} name="close-circle-outline"></Ionicons>
                        </Pressable>
                        
                        <View style={styles.modalContent}>
                            <Text style={styles.modalTitle}>Add Meal</Text>
                            <TextInput 
                                placeholder="Meal name"
                                onChangeText={setName}
                                value={name}
                                style={styles.nameInput}
                                placeholderTextColor={'#817f7f'}
                                />
                            <View>
                            {/* {renderLabel()} */}
                            <Dropdown
                                style={[styles.dropdown, isFocus && { borderColor: 'blue' }]}
                                //placeholderStyle={styles.placeholderStyle}
                                //selectedTextStyle={styles.selectedTextStyle}
                                //inputSearchStyle={styles.inputSearchStyle}
                                //iconStyle={styles.iconStyle}
                                data={mealTypes}
                                maxHeight={250}
                                labelField="label"
                                valueField="value"
                                placeholder={!isFocus ? 'Select Meal type' : '...'}
                                value={dropValue}
                                onFocus={() => setIsFocus(true)}
                                onBlur={() => setIsFocus(false)}
                                onChange={item => {
                                    setDropValue(item.value);
                                    setIsFocus(false);
                                }}

                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Calories</Text>
                                <Text>*</Text>
                                <TextInput style={styles.textInput}
                                    maxLength={4}
                                    keyboardType={'numeric'}
                                    value={calories}
                                    onChangeText={setCalories} 
                                    onEndEditing={() => addUnit(calories, setCalories)}
                                    returnKeyType={'done'}
                                />
                            </View>
                            <View style={styles.spaceBetween}>
                                <Text style={styles.details}>Protein</Text>
                                <View style={styles.flexRow}>
                                    <TextInput style={styles.textInput}
                                        maxLength={3}
                                        keyboardType={'numeric'}
                                        value={protein}
                                        onChangeText={setProtein}
                                        onEndEditing={() => addUnit(protein, setProtein)}
                                        returnKeyType={'done'}
                                    />
                                    <Text>g</Text>
                                </View>
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
        width: 35
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

    dropLabel: {

    },

    dropdown: {
        height: 35,
        borderColor: 'gray',
        borderWidth: 0.5,
        borderRadius: 8,
        paddingHorizontal: 8,
    },

    flexRow: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'flex-end'
    }
})