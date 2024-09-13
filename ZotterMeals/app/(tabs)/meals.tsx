import { ImageBackground, StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image, FlatList, Pressable } from 'react-native';
import Header from '@/components/Header';
import MealList from '@/components/MealList';
import Ionicons from '@expo/vector-icons/Ionicons';
import {useRef, useState} from 'react';
import DiningInfoModal from '@/components/DiningInfoModal';
import PagerView from 'react-native-pager-view';

export default function meals() {
    const [diningHall, setDiningHall] = useState(false)
    const [modalVisible, setModalVisible] = useState(false)
    const ref = useRef<PagerView | null>(null)
    
    const switchDiningHall = () => {
        let next = diningHall ? 1 : 0
        ref.current?.setPage(next)
    }

    // depending on current diningHall, fetch different meals

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
                                <Ionicons style={styles.iconCalendar} name="calendar-clear-outline"></Ionicons> 
                            </View>
                            <Text style={styles.openText}>Open for Breakfast</Text>
                            <DiningInfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
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
                                <Ionicons style={styles.iconCalendar} name="calendar-clear-outline"></Ionicons> 
                            </View>
                            <Text style={styles.openText}>Open for Breakfast</Text>
                            <DiningInfoModal modalVisible={modalVisible} setModalVisible={setModalVisible} />
                            <Pressable onPress={() => setModalVisible(!modalVisible)}>
                                <Ionicons style={styles.iconAlert}name="information-circle-outline"></Ionicons>
                            </Pressable>
                        </View>
                    </ImageBackground>
                </View>
            </PagerView>
            
            <MealList location={diningHall ? 'brandywine' : 'anteatery'}/>
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
        color: 'green',
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