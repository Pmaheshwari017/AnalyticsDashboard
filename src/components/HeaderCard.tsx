import React from 'react';
import {
    SafeAreaView,
    StatusBar,
    View,
    Text,
    StyleSheet,
    Image,
    Platform,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HeaderCard = () => {
    return (
        <SafeAreaView style={styles.safeArea}>
            {/* Set white status bar */}
            <StatusBar barStyle="dark-content" backgroundColor="#f6f7fc" />

            {/* Main Card */}
            <View style={styles.card}>
                <View style={styles.left}>
                    <Text style={styles.greeting}>Hi, <Text style={styles.name}>Clarence</Text></Text>
                    <View style={styles.phoneRow}>
                        <Ionicons name="call" size={16} color="#9aa0b3" style={{ marginRight: 4 }} />
                        <Text style={styles.phoneText}>(801) 923-2930</Text>
                    </View>
                </View>
                <Image
                    source={{ uri: 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpixabay.com%2Fimages%2Fsearch%2Fuser%2F&psig=AOvVaw2My_ReC8RKrIsme6Bz7I1K&ust=1745156921362000&source=images&cd=vfe&opi=89978449&ved=0CBEQjRxqFwoTCKDqx6Se5IwDFQAAAAAdAAAAABAE' }} // Replace with your image this file exists in your assets folder
                    style={styles.avatar}
                />
            </View>
        </SafeAreaView>
    );
};

export default HeaderCard;

const styles = StyleSheet.create({
    safeArea: {
        flex: 1,
        backgroundColor: '#dce2f0', // outer background
    },
    card: {
        margin: 16,
        padding: 20,
        backgroundColor: '#f6f7fc',
        borderRadius: 20,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',

        // Optional shadow for iOS & elevation for Android
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
        shadowOpacity: 0.1,
        shadowRadius: 6,
        elevation: 4,
    },
    left: {
        flex: 1,
    },
    greeting: {
        fontSize: 24,
        fontWeight: '600',
        color: '#3949ab',
    },
    name: {
        fontWeight: 'bold',
        color: '#3949ab',
    },
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    phoneText: {
        color: '#9aa0b3',
        fontSize: 14,
    },
    avatar: {
        width: 60,
        height: 60,
        borderRadius: 30,
        borderWidth: 2,
        borderColor: '#5b41f3',
    },
});
