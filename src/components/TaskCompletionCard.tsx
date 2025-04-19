import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import Colors from '../constant/Color';

const TaskCompletionCard = () => {
    return (
        <View style={styles.card}>
            <AnimatedCircularProgress
                size={70}
                width={7}
                fill={76}
                tintColor="#ffffff"
                backgroundColor={Colors.persianBlue}
                rotation={0}
                lineCap="round"
            >
                {(fill) => <Text style={styles.percentage}>{`${Math.round(fill)}%`}</Text>}
            </AnimatedCircularProgress>

            <View style={styles.textContent}>
                <Text style={styles.title}>Overal Task Completion</Text>
                <Text style={styles.subtitle}>
                    Achivement againe total calls targeted{'\n'}for the mont of September
                </Text>
            </View>
        </View>
    );
};

export default TaskCompletionCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: Colors.neonBlue,
        flexDirection: 'row',
        borderRadius: 16,
        padding: 20,
        alignItems: 'center',
        shadowColor: '#000',
        shadowOpacity: 0.1,
        shadowOffset: { width: 0, height: 3 },
        shadowRadius: 5,
        elevation: 5,
        marginHorizontal: 16,
    },
    percentage: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
    },
    textContent: {
        marginLeft: 20,
        flex: 1,
    },
    title: {
        color: '#ffffff',
        fontSize: 16,
        fontWeight: 'bold',
        marginBottom: 6,
    },
    subtitle: {
        color: '#E0E7FF',
        fontSize: 13,
    },
});
