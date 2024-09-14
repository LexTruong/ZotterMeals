import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircularProgress from 'react-native-circular-progress-indicator';
import MyMeals from '@/components/MyMeals'
import {useEffect, useState} from 'react';
import TotalProgressModal from '@/components/TotalProgressModal';
import AddMealModal from '@/components/AddMealModal';
import CalendarModal from '@/components/CalendarModal';
import {FIREBASE_AUTH} from '../../firebaseConfig.js';

export default function progress() {
    const calorieGoal = '/2000 Calories';
    const proteinGoal = '/150g Protein'
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [totalModalVisible, setTotalModalVisible] = useState(false)
    const [calendarModal, setCalendarModal] = useState(false)
    const auth = FIREBASE_AUTH;
    const user = auth.currentUser;

    const [curCalories, setCurCalories] = useState(0)
    const [curProtein, setCurProtein] = useState(0)

    // fetch data from firebase for current nutrition info and past info
    const DATA = [
        {
            "name": "Balsamic Vinaigrette",
            "description": "Tangy balsamic vinaigrette dressing",
            "nutrition": {
                "isVegan": true,
                "isVegetarian": true,
                "servingSize": "2",
                "servingUnit": "tablespoons",
                "calories": "60",
                "caloriesFromFat": "45",
                "totalFat": "5",
                "transFat": "0",
                "cholesterol": "0",
                "sodium": "200",
                "totalCarbohydrates": "4",
                "dietaryFiber": "0",
                "sugars": "4",
                "protein": "0",
                "vitaminA": null,
                "vitaminC": null,
                "calcium": null,
                "iron": null,
                "saturatedFat": "0.5",
                "isEatWell": false,
                "isPlantForward": false,
                "isWholeGrains": false
            }
        },
        {
            "name": "Creamy Caesar Dressing",
            "description": "Creamy Caesar dressing",
            "nutrition": {
                "isVegan": false,
                "isVegetarian": false,
                "servingSize": "2",
                "servingUnit": "tablespoons",
                "calories": "140",
                "caloriesFromFat": "140",
                "totalFat": "15",
                "transFat": "0",
                "cholesterol": "0",
                "sodium": "260",
                "totalCarbohydrates": "1",
                "dietaryFiber": "0",
                "sugars": "less than 1",
                "protein": "1",
                "vitaminA": null,
                "vitaminC": null,
                "calcium": null,
                "iron": null,
                "saturatedFat": "2.5",
                "isEatWell": false,
                "isPlantForward": false,
                "isWholeGrains": false
            }
        },
        {
            "name": "Lite Italian Dressing",
            "description": "Lite Italian salad dressing",
            "nutrition": {
                "isVegan": true,
                "isVegetarian": true,
                "servingSize": "2",
                "servingUnit": "tablespoons",
                "calories": "40",
                "caloriesFromFat": "30",
                "totalFat": "3.5",
                "transFat": "0",
                "cholesterol": "0",
                "sodium": "260",
                "totalCarbohydrates": "2",
                "dietaryFiber": "0",
                "sugars": "2",
                "protein": "0",
                "vitaminA": null,
                "vitaminC": null,
                "calcium": null,
                "iron": null,
                "saturatedFat": "0.5",
                "isEatWell": false,
                "isPlantForward": false,
                "isWholeGrains": false
            }
        },
        {
            "name": "Ranch Dressing",
            "description": "Homestyle creamy ranch salad dressing",
            "nutrition": {
                "isVegan": false,
                "isVegetarian": true,
                "servingSize": "2",
                "servingUnit": "tablespoons",
                "calories": "100",
                "caloriesFromFat": "90",
                "totalFat": "10",
                "transFat": "0",
                "cholesterol": "10",
                "sodium": "260",
                "totalCarbohydrates": "1",
                "dietaryFiber": "0",
                "sugars": "less than 1",
                "protein": "1",
                "vitaminA": null,
                "vitaminC": null,
                "calcium": null,
                "iron": null,
                "saturatedFat": "1.5",
                "isEatWell": false,
                "isPlantForward": false,
                "isWholeGrains": false
            }
        }
    ]

    useEffect(() => {
        let totalCalories = 0
        let totalProtein = 0

        DATA.forEach(item => {
            totalCalories += parseInt(item.nutrition.calories)
            totalProtein += parseInt(item.nutrition.protein)
        })

        setCurCalories(totalCalories)
        setCurProtein(totalProtein)
    }, [DATA])

    return (
        <View style={styles.container}>
            <Header title="Progress"></Header>

            <View>
                <Text>Hello {user?.email}</Text>
                <Button title="Sign out" onPress={() => auth.signOut()} />
            </View>

            <View style={styles.progressBars}>
                <CircularProgress
                    value={curCalories}
                    radius={100}
                    duration={3500}
                    progressValueColor={'black'}
                    maxValue={2000}
                    title={''}
                    subtitle={calorieGoal}
                    titleColor={'black'}
                    titleStyle={{fontWeight: 'bold'}}
                    activeStrokeColor={'#A81612'}
                    activeStrokeSecondaryColor={'#451400'}
                />

                <CircularProgress
                    value={curProtein}
                    radius={100}
                    duration={3500}
                    progressValueColor={'black'}
                    maxValue={150}
                    title={''}
                    subtitle={proteinGoal}
                    titleColor={'black'}
                    titleStyle={{fontWeight: 'bold'}}
                    activeStrokeColor={'#A81612'}
                    activeStrokeSecondaryColor={'#451400'}
                />
            </View>

            <View style={styles.titleIcons}>
                <Text style={styles.myMeals}>My Meals</Text>
                <View style={styles.icons}>

                    <AddMealModal modalVisible={addModalVisible} setModalVisible={setAddModalVisible}/>
                    <Pressable onPress={() => setAddModalVisible(!addModalVisible)}>
                        <Ionicons style={[styles.icon, styles.add]} name="add-circle-outline"></Ionicons>
                    </Pressable>

                    <TotalProgressModal modalVisible={totalModalVisible} setModalVisible={setTotalModalVisible}/>
                    <Pressable onPress={() => setTotalModalVisible(!totalModalVisible)}>
                        <Ionicons style={styles.icon} name="podium-outline"></Ionicons>
                    </Pressable>


                    <CalendarModal modalVisible={calendarModal} setModalVisible={setCalendarModal}/>
                    <Pressable onPress={() => setCalendarModal(!calendarModal)}>
                        <Ionicons style={styles.icon} name="calendar-clear-outline"></Ionicons>
                    </Pressable>
                </View>
            </View>

            <MyMeals meals={DATA} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1,
    },

    myMeals: {
        fontSize: 30,
        fontWeight: 'bold',
        marginLeft: 15,
    },

    progressBars: {
        alignItems: 'center',
        gap: 15,
        marginTop: 15,
        marginBottom: 15,
    },

    titleIcons: {
        flexDirection: 'row',
    },

    icons: {
        flexDirection: 'row',
        justifyContent: 'flex-end',
        gap: 10,
        marginRight: 15,
        marginLeft: 'auto'
    },

    icon: {
        fontSize: 28
    },

    add: {
        marginRight: -10
    }
})
