import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList, Pressable, SectionListData } from 'react-native';
import Header from '@/components/Header';
import MealList from '@/components/MealList';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useEffect, useRef, useState} from 'react';
import DiningInfoModal from '@/components/DiningInfoModal';
import PagerView from 'react-native-pager-view';
import { MealCardInfo } from '@/components/MealCard';
import MealTypeModal from '@/components/MealTypeModal';

export default function meals() {
    const [diningHall, setDiningHall] = useState(false)
    const [diningModalVisible, setDiningModalVisible] = useState(false)
    const [mealTypeModalVisible, setMealTypeModalVisible] = useState(false)
    const [curMeal, setCurMeal] = useState('')
    const [mealType, setMealType] = useState('')
    const ref = useRef<PagerView | null>(null)
    
    const switchDiningHall = () => {
        let next = diningHall ? 1 : 0
        ref.current?.setPage(next)
    }

    const [sections, setSections] = useState<SectionListData<MealCardInfo>[]>([])

    useEffect(() => {
        // get current data from anteatery or brandywine
        const location = diningHall ? 'anteatery' : 'brandywine'

        fetch(`http://zotmeal-backend.vercel.app/api?location=${location}`)
        .then(response => response.json())
        .then(data => {
            console.log("Showing meals from " + location)

            let newSections: SectionListData<any, object>[] = []

            for(let i=0; i < data.all.length; i++) {
                let curStation= data.all[i]

                let newStation: {title: any, data: MealCardInfo[]} = {
                    title: curStation.station,
                    data: []
                }
                
                for(let k=0; k < curStation.menu.length; k++) {
                    let category = curStation.menu[k]

                    for(let j=0; j < category.items.length; j++) {
                        let item = category.items[j]
                        newStation.data.push(item)
                    }
                }
                
                newSections.push(newStation)
            }
            
            setSections(newSections)
            setCurMeal(data.currentMeal)
            setMealType(data.currentMeal)
            console.log("changed meal")
        })
    }, [diningHall])

    const changeMealInfo = () => {
        const location = diningHall ? 'anteatery' : 'brandywine'
        console.log(mealType)
        let mealNum = 0;
        if (mealType == "lunch") {
            mealNum = 1;
        } else if (mealType == "dinner") {
            mealNum = 2;
        }

        fetch(`http://zotmeal-backend.vercel.app/api?location=${location}&meal=${mealNum}`)
        .then(response => response.json())
        .then(data => {
            console.log("Showing meals for " + mealType)
            console.log(data)

            let newSections: SectionListData<any, object>[] = []

            for(let i=0; i < data.all.length; i++) {
                let curStation= data.all[i]

                let newStation: {title: any, data: MealCardInfo[]} = {
                    title: curStation.station,
                    data: []
                }
                
                for(let k=0; k < curStation.menu.length; k++) {
                    let category = curStation.menu[k]

                    for(let j=0; j < category.items.length; j++) {
                        let item = category.items[j]
                        newStation.data.push(item)
                    }
                }
                
                newSections.push(newStation)
            }
            
            setSections(newSections)
        })
    }

    return (
        <View style={styles.container}>
            <Header title={"Meals"}/>

            <PagerView style={styles.pageView}
             id="pager"
             ref={ref}
             initialPage={0}
             onPageSelected={(e) => setDiningHall(!diningHall)}
            > 
                <View key="1">
                    <ImageBackground source={require('../../assets/images/anteatery.png')} style={styles.image}>
                        <Text style={styles.title}>Anteatery</Text>
                        <View style={styles.icons}>
                            <View style={styles.leftIcons}>
                                <Ionicons style={styles.iconCalendar} name="swap-horizontal" onPress={() => switchDiningHall()}></Ionicons>
                                <MealTypeModal modalVisible={mealTypeModalVisible} setModalVisible={setMealTypeModalVisible} mealType={mealType} setMealType={setMealType} changeMealInfo={changeMealInfo} />
                                <Ionicons style={styles.iconCalendar} name="time" onPress={() => setMealTypeModalVisible(!mealTypeModalVisible)}></Ionicons> 
                            </View>
                            <Text style={styles.openText}>Showing {mealType}</Text>
                            <DiningInfoModal modalVisible={diningModalVisible} setModalVisible={setDiningModalVisible} />
                            <Pressable onPress={() => setDiningModalVisible(!diningModalVisible)}>
                                <Ionicons style={styles.iconAlert}name="information-circle-outline"></Ionicons>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
                <View key="2">
                    <ImageBackground source={require('../../assets/images/brandywine.png')} style={styles.image}>
                        <Text style={styles.title}>Brandywine</Text>
                        <View style={styles.icons}>
                            <View style={styles.leftIcons}>
                                <Ionicons style={styles.iconCalendar} name="swap-horizontal" onPress={() => switchDiningHall()}></Ionicons>
                                <Ionicons style={styles.iconCalendar} name="time"  onPress={() => setMealTypeModalVisible(!mealTypeModalVisible)}></Ionicons> 
                            </View>
                            <Text style={styles.openText}>Showing {mealType}</Text>
                            <DiningInfoModal modalVisible={diningModalVisible} setModalVisible={setDiningModalVisible} />
                            <Pressable onPress={() => setDiningModalVisible(!diningModalVisible)}>
                                <Ionicons style={styles.iconAlert}name="information-circle-outline"></Ionicons>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </PagerView>
            
            <MealList sections={sections}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    
    pageView: {
        height: 180,
        overflow: 'hidden'
    },

    image: {
        width: '100%',
        height: 180,
        justifyContent: 'flex-end'
    },

    title: {
        marginBottom: 30,
        textAlign: 'center',
        fontSize: 50,
        color: 'white',
        fontWeight: 'bold',
    },

    openText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
        paddingLeft: 15
    },

    iconCalendar: {
        color: 'white',
        fontSize: 24,
    },

    iconAlert: {
        color: 'white',
        fontSize: 24
    },

    icons: {
        margin: 5,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },

    leftIcons: {
        display: 'flex',
        flexDirection: 'row',
        gap: 5
    }
})