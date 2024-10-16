import { StyleSheet, View, SectionList, Text, SectionListData, SectionBase } from 'react-native'
import MealCard, { MealCardInfo } from './MealCard'
import { useEffect, useState } from 'react'

interface Props {
    mealType: string,
    sections: SectionListData<MealCardInfo>[]
}

export default function MealList({mealType, sections} : Props) {

    return (
        <View style={styles.container}>
            {sections ?
            <SectionList
                sections={sections}
                renderItem={({item}: {item: MealCardInfo}) => <MealCard mealType={mealType} info={item} />}
                renderSectionHeader={({section: {title}}) => (
                    <Text style={styles.sectionHeader}>{title}</Text>
                )}
            />
            :
            <Text>No Meals Currently</Text>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },

    sectionHeader: {
        color: 'white',
        paddingLeft: 10,
        fontSize: 30,
        fontWeight: 'bold',
        backgroundColor: '#433131',
        paddingVertical: 5,
        shadowOpacity: .3,
        shadowRadius: 5,
        shadowOffset: {
            width: 0,
            height: 5
        }
    }
})