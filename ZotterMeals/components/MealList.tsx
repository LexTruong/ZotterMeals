import { StyleSheet, View, SectionList, Text } from 'react-native'
import MealCard from './MealCard'

export default function MealList() {
    const data = [
        {
            name: "pizza",
            calories: 100,
            protein: 100
        },
        {
            name: "pasta",
            calories: 100,
            protein: 100
        },
        {
            name: "ice cream",
            calories: 100,
            protein: 100
        }
    ]

    const sections = [
        {
            title: 'Home',
            data: data
        },
        {
            title: 'Sizzle Grill',
            data: data
        },
        {
            title: 'Bakery',
            data: data
        }
    ]

    return (
        <View style={styles.container}>
            <SectionList
                sections={sections}
                renderItem={({item}) => <MealCard info={item} />}
                renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                )}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    sectionHeader: {
        paddingLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: 'white',
        paddingVertical: 5,
        shadowOpacity: .3,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        }
    }
})