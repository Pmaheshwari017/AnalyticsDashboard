

import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

const HiClarenceHeader = () => {
    return (
        <View style={styles.container}>
            <View style={styles.textContainer}>
                <Text style={styles.greeting}>Hi, Clarence</Text>
                <View style={styles.phoneRow}>
                    <Ionicons name="call-outline" size={16} color="#8E8E93" />
                    <Text style={styles.phoneText}>(801) 923-2930</Text>
                </View>
            </View>
            <Image
                source={require('../../assets/images/IconNew.png')} // Replace with your image
                style={styles.avatar}
            />
        </View>
    );
};

export default HiClarenceHeader;

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: '#F7F9FC',
        padding: 16,
    },
    textContainer: {
        flex: 1,
    },
    greeting: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333398', // Approx. blue from the image
    },
    phoneRow: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 4,
    },
    phoneText: {
        fontSize: 14,
        color: '#8E8E93',
        marginLeft: 6,
    },
    avatar: {
        width: 48,
        height: 48,
        borderRadius: 24,
    },
});
