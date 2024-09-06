import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Header from '@/components/Header';
import Ionicons from '@expo/vector-icons/Ionicons';
import CircularProgress from 'react-native-circular-progress-indicator';
import MyMeals from '@/components/MyMeals'

export default function progress() {
    const calorieGoal = '/2000 Calories';
    const proteinGoal = '/150g Protein'

    return (
        <View style={styles.container}>
            <Header title="Progress"></Header>

            <View style={styles.progressBars}>
                <CircularProgress
                    value={1500}
                    radius={100}
                    duration={5000}
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
                    value={112}
                    radius={100}
                    duration={5000}
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
                    <Ionicons style={styles.icons} name="add-circle-outline"></Ionicons>
                    <Ionicons style={styles.icons} name="podium-outline"></Ionicons>
                    <Ionicons style={styles.icons} name="calendar-clear-outline"></Ionicons>
                </View>
            </View>

            <MyMeals />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white'
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
        marginLeft: 'auto',
        justifyContent: 'flex-end',
        gap: 10,
        marginRight: 8,
        fontSize: 28,
    },
})
