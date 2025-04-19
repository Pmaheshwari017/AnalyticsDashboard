import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface Props {
    title: string;
    calls: number;
    percentage: number;
    isPositive: boolean;
    avgText: string;
}

const ActivityStatCard: React.FC<Props> = ({
    title,
    calls,
    percentage,
    isPositive,
    avgText,
}) => {
    return (
        <View style={styles.card}>
            <Text style={styles.title}>{title}</Text>

            <View style={styles.row}>
                <Text style={[styles.callCount, { color: isPositive ? '#16A34A' : '#DC2626' }]}>
                    {calls}
                </Text>
                <Text style={[styles.callLabel, { color: isPositive ? '#16A34A' : '#DC2626' }]}>
                    Calls
                </Text>
                <MaterialIcons
                    name={isPositive ? 'arrow-upward' : 'arrow-downward'}
                    size={16}
                    color={isPositive ? '#16A34A' : '#DC2626'}
                    style={{ marginHorizontal: 4 }}
                />
                <Text style={[styles.percentage, { color: isPositive ? '#16A34A' : '#DC2626' }]}>
                    {isPositive ? `+${percentage}%` : `-${percentage}%`}
                </Text>
            </View>

            <Text style={styles.avgText}>{avgText}</Text>
        </View>
    );
};

export default ActivityStatCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 12,
        padding: 16,
        width: '48%',
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 4,
        elevation: 2,
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#1E3A8A',
        marginBottom: 8,
    },
    row: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    callCount: {
        fontSize: 22,
        fontWeight: 'bold',
    },
    callLabel: {
        fontSize: 16,
        marginLeft: 4,
    },
    percentage: {
        fontSize: 14,
        fontWeight: '600',
    },
    avgText: {
        marginTop: 10,
        fontSize: 13,
        color: '#6B7280',
    },
});
