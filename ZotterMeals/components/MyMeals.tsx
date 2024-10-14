import { StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList, SectionList } from 'react-native';
import { StatusBar } from 'expo-status-bar';
import Ionicons from '@expo/vector-icons/Ionicons';
import MealStrip from './MealStrip'
import { MealCardInfo } from './MealCard';
import { useEffect, useState } from 'react';
import { MealTypeListProps } from '@/app/(tabs)/progress';

interface Props {
    meals: MealTypeListProps[],
    updateData: Function
}

export default function MyMeals({meals, updateData}: Props) {
    const [isEmpty, setIsEmpty] = useState(true)

    useEffect(() => {
        setIsEmpty(true)
        for (let i=0; i < meals.length; i++) {
            if (meals[i].data.length > 0) {
                setIsEmpty(false)
                break
            }
        }
    }, [meals])

    return (
        <View style={styles.container}>
            {isEmpty ? (
                <Text>Enjoy a Cookie!</Text>
            ) : (
                <SectionList
                    sections={meals}
                    renderItem={({item}) => <MealStrip info={item} updateData={updateData} />}
                    renderSectionHeader={({section: {title}}) => (
                        <Text style={styles.sectionHeader}>{title}</Text>
                    )}
                />
            )
        }

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: 'white',
        flex: 1
    },

    list: {
        backgroundColor: 'white'
    },

    sectionHeader: {
        paddingLeft: 15,
        fontSize: 30,
        color: "#A81612",
        fontWeight: "bold",
        backgroundColor: 'white'
    }
})