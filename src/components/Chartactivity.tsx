import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { LineChart, Grid } from 'react-native-svg-charts';
import * as shape from 'd3-shape';
import { Circle } from 'react-native-svg';
import Colors from '../constant/Color';


const dataCurrent = [0, 0, 50, 100, 80, 50, 100];
const dataPrevious = [20, 40, 70, 120, 110, 90, 130];

const SeptemberActivitiesCard = () => {
    return (
        <View style={styles.container}>
            {/* Header */}
            <View style={styles.header}>
                <Text style={styles.title}>September Activities</Text>
                <TouchableOpacity style={styles.iconButton}>
                    <Text style={styles.icon}>{'>'}</Text>
                </TouchableOpacity>
            </View>

            {/* Legend */}
            <View style={styles.legend}>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: Colors.primaryPurple }]} />
                    <Text style={styles.legendLabel}>Current Month</Text>
                </View>
                <View style={styles.legendItem}>
                    <View style={[styles.dot, { backgroundColor: Colors.skyBlue }]} />
                    <Text style={styles.legendLabel}>Previous Month</Text>
                </View>
            </View>

            {/* Chart */}
            <View style={{ height: 150 }}>
                <LineChart
                    style={{ flex: 1 }}
                    data={dataPrevious}
                    svg={{ stroke: Colors.skyBlue }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                >
                    <Grid />
                </LineChart>

                <LineChart
                    style={StyleSheet.absoluteFill}
                    data={dataCurrent}
                    svg={{ stroke: Colors.primaryPurple }}
                    contentInset={{ top: 20, bottom: 20 }}
                    curve={shape.curveNatural}
                >
                    {/* Purple Dots */}
                    {dataCurrent.map((value, index) => (
                        <Circle
                            key={index}
                            cx={(index / (dataCurrent.length - 1)) * 300}
                            cy={120 - (value / 130) * 120}
                            r={4}
                            fill={Colors.primaryPurple}
                        />
                    ))}
                </LineChart>
            </View>
        </View>
    );
};

export default SeptemberActivitiesCard;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 16,
        margin: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    title: {
        color: Colors.primaryPurple,
        fontWeight: '700',
        fontSize: 16,
    },
    iconButton: {
        backgroundColor: Colors.ghostWhite,
        width: 24,
        height: 24,
        borderRadius: 12,
        alignItems: 'center',
        justifyContent: 'center',
    },
    icon: {
        color: Colors.primaryPurple,
        fontWeight: '700',
    },
    legend: {
        flexDirection: 'row',
        marginTop: 12,
        marginBottom: 6,
    },
    legendItem: {
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: 16,
    },
    dot: {
        width: 10,
        height: 10,
        borderRadius: 5,
        marginRight: 6,
    },
    legendLabel: {
        fontSize: 12,
        color: Colors.gray,
    },
});
