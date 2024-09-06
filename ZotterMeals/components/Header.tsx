import {StyleSheet, Platform, TouchableOpacity, View, Button, Text, Image } from 'react-native';

export default function Header({ title }: { title: string }) {
    return (
        <View style={styles.container}>
            <Text style={styles.title}>{title}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        textAlign: 'center',
        height: 90,
        width: '100%',
        backgroundColor: '#A81612',
        justifyContent: 'flex-end',
    },

    title: {
        textAlign: 'center',
        color: 'white',
        fontSize: 20,
        padding: 5,
    }
})