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
import {FIREBASE_AUTH, FIRESTORE_DB} from '../../firebaseConfig.js';
import { doc, getDoc, onSnapshot } from 'firebase/firestore';
import { MealCardInfo } from '@/components/MealCard.js';
import { TotalInfoProps } from '@/components/TotalProgressModal.js';
import { useIsFocused } from '@react-navigation/native';
import { useRouter } from 'expo-router';

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
    const [curMealData, setCurMealData] = useState<MealCardInfo[]>([])
    const [totalInfo, setTotalInfo] = useState<TotalInfoProps>(
        {
        totalCalories: 0,
        totalProtein: 0,
        totalFat: 0,
        totalTransFat: 0,
        totalSaturatedFat: 0,
        totalCholesterol: 0,
        totalSodium: 0,
        totalCarbohydrates: 0,
        totalFiber: 0,
        totalCalcium: 0,
        totalSugars: 0,
        totalIron: 0,
        totalVitaminA: 0,
        totalVitaminC: 0,
    }
)
    const isFocused = useIsFocused();

    // fetch data from firebase for current nutrition info and past info
    const fetchData = async () => {
        const currentUserId = FIREBASE_AUTH.currentUser?.uid

        if (currentUserId) {
            const docRef = doc(FIRESTORE_DB, "users", currentUserId)
            const docSnap = await getDoc(docRef)        

            if (docSnap.exists()) {
                const currentMeals: MealCardInfo[] = docSnap.data().currentDay

                setCurMealData(currentMeals)

                // calculate total progress for current day
                let totalCalories = 0
                let totalProtein = 0
                let totalFat = 0
                let totalTransFat = 0
                let totalSaturatedFat = 0
                let totalCholesterol = 0
                let totalSodium = 0
                let totalCarbohydrates = 0
                let totalFiber = 0
                let totalSugars = 0
                let totalIron = 0
                let totalVitaminA = 0
                let totalVitaminC = 0
                let totalCalcium = 0
        
                currentMeals.forEach(item => {
                    totalCalories += parseInt(item.nutrition.calories ?? '0')
                    totalProtein += parseInt(item.nutrition.protein ?? '0')
                    totalFat += parseInt(item.nutrition.totalFat ?? '0')
                    totalTransFat += parseInt(item.nutrition.transFat ?? '0')
                    totalSaturatedFat += parseInt(item.nutrition.saturatedFat ?? '0')
                    totalCholesterol += parseInt(item.nutrition.cholesterol ?? '0')
                    totalSodium += parseInt(item.nutrition.sodium ?? '0')
                    totalCarbohydrates += parseInt(item.nutrition.totalCarbohydrates ?? '0')
                    totalFiber += parseInt(item.nutrition.dietaryFiber ?? '0')
                    totalSugars += parseInt(item.nutrition.sugars ?? '0')
                    totalIron += parseInt(item.nutrition.iron ?? '0')
                    totalVitaminA += parseInt(item.nutrition.vitaminA ?? '0')
                    totalVitaminC += parseInt(item.nutrition.vitaminC ?? '0')
                    totalCalcium += parseInt(item.nutrition.calcium ?? '0')
                })

                setTotalInfo({
                    totalCalories,
                    totalProtein,
                    totalFat,
                    totalTransFat,
                    totalSaturatedFat,
                    totalCholesterol,
                    totalSodium,
                    totalCarbohydrates,
                    totalFiber,
                    totalCalcium,
                    totalSugars,
                    totalIron,
                    totalVitaminA,
                    totalVitaminC,
                })
        
                setCurCalories(totalCalories)
                setCurProtein(totalProtein)

            } else {
                console.log("No such document!")
            }
        }
    }

    useEffect(() => {
        fetchData()
    }, [isFocused])

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
                    radius={90}
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
                    radius={90}
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

                    <TotalProgressModal modalVisible={totalModalVisible} setModalVisible={setTotalModalVisible} totalInfo={totalInfo}/>
                    <Pressable onPress={() => setTotalModalVisible(!totalModalVisible)}>
                        <Ionicons style={styles.icon} name="podium-outline"></Ionicons>
                    </Pressable>

                    <CalendarModal modalVisible={calendarModal} setModalVisible={setCalendarModal}/>
                    <Pressable onPress={() => setCalendarModal(!calendarModal)}>
                        <Ionicons style={styles.icon} name="calendar-clear-outline"></Ionicons>
                    </Pressable>
                </View>
            </View>

            <MyMeals meals={curMealData} updateData={fetchData} />
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
