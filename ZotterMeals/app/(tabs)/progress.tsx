import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList, Pressable } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircularProgress from 'react-native-circular-progress-indicator';
import MyMeals from '@/components/MyMeals'
import {useState} from 'react';
import TotalProgressModal from '@/components/TotalProgressModal';
import AddMealModal from '@/components/AddMealModal';
import CalendarModal from '@/components/CalendarModal';

export default function progress() {
    const calorieGoal = '/2000 Calories';
    const proteinGoal = '/150g Protein'
    const [addModalVisible, setAddModalVisible] = useState(false)
    const [totalModalVisible, setTotalModalVisible] = useState(false)
    const [calendarModal, setCalendarModal] = useState(false)


    return (
        <View style={styles.container}>
            <Header title="Progress"></Header>

            <View style={styles.progressBars}>
                <CircularProgress
                    value={1500}
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
                    value={120}
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

            <MyMeals />
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
