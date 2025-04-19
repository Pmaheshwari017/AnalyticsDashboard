import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
const NotificationCards = () => {
    return (
        <ScrollView horizontal showsHorizontalScrollIndicator={false} style={styles.scroll}>
            {/* Purple Tip Card */}
            <View style={[styles.card, { backgroundColor: '#4B55F3', gap: 16 }]}>
                <View style={styles.textContainer}>
                    <Ionicons name="notifications" size={27} color="#fff" style={styles.leftIcon} />
                    <Text style={styles.title}>Tips on increasing your go forward</Text>
                </View>
                <View style={styles.textContainer}>

                    <Text style={styles.subText}>Lorem ipsum dolor sit amet, consectetur</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <FontAwesome name="play" size={27} color="#4B55F3" />
                    </TouchableOpacity>
                </View>
            </View>

            {/* Green Task Completed Card */}
            <View style={[styles.card, { backgroundColor: '#2ED4A4' }]}>
                <View style={styles.textContainer}>
                    <Ionicons name="checkmark-circle" size={30} color="#D0F6EC" style={styles.leftIcon} />
                    <Text style={styles.title}>Weekly task has been completed!</Text>
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.subText}>Lorem ipsum dolor sit amet, consectetur</Text>
                    <TouchableOpacity style={styles.iconButton}>
                        <Ionicons name="checkmark" size={25} color="#2ED4A4" />
                    </TouchableOpacity>
                </View>
            </View>
        </ScrollView >
    );
};

export default NotificationCards;

const styles = StyleSheet.create({
    scroll: {
        paddingVertical: 8,
        marginLeft: 16,
        marginRight: 5
    },
    card: {
        width: 220,
        borderRadius: 20,
        padding: 16,
        marginRight: 16,

        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowRadius: 6,
        shadowOffset: { width: 0, height: 3 },
        elevation: 3,
    },
    leftIcon: {
        marginRight: 12,
        backgroundColor: 'rgba(255, 255, 255, 0.1)',
        padding: 12,
        borderRadius: 25,
        width: 50,
    },
    textContainer: {

        flexDirection: 'row',
        alignItems: 'center',

    },
    title: {
        width: '70%',
        color: 'white',
        fontWeight: '600',
        fontSize: 14,
        marginBottom: 4,
    },
    subText: {
        width: '70%',
        color: 'white',
        fontSize: 12,
        opacity: 0.8,
    },
    iconButton: {
        backgroundColor: 'white',
        width: 40,
        height: 40,
        borderRadius: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginLeft: 8,
    },
});
