import { StyleSheet, FlatList, View } from 'react-native'
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

    return (
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({item}) => <MealCard info={item} />}
            ></FlatList>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    }

})