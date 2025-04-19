import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';


type WalletBalanceCardProps = {
    balance: number | string;
    autoFillAmount: number | string;
    autoFillDate: string;
};

const WalletBalanceCard: React.FC<WalletBalanceCardProps> = ({
    balance,
    autoFillAmount,
    autoFillDate,
}) => {
    return (
        <View style={styles.card}>
            <View style={styles.topRow}>
                <View style={styles.iconCircle}>
                    <Ionicons name="wallet" size={24} color="#7C3AED" />
                </View>
                <View style={styles.balanceContainer}>
                    <Text style={styles.balanceAmount}>${balance}</Text>
                    <Text style={styles.balanceLabel}>Wallet Balance</Text>
                </View>
                <Ionicons name="chevron-forward-circle-outline" size={22} color="#A0A0A0" />
            </View>

            <View style={styles.dottedLine} />

            <View style={styles.bottomRow}>
                <View style={styles.column}>
                    <Text style={styles.bottomValue}>{autoFillDate}</Text>
                    <Text style={styles.bottomLabel}>Auto fill date</Text>
                </View>
                <View style={styles.divider} />
                <View style={styles.column}>
                    <Text style={styles.bottomValue}>${autoFillAmount}</Text>
                    <Text style={styles.bottomLabel}>Auto fill amount</Text>
                </View>
            </View>
        </View>
    );
};
export default WalletBalanceCard;

const styles = StyleSheet.create({
    card: {
        backgroundColor: '#FFFFFF',
        borderRadius: 16,
        padding: 16,
        marginHorizontal: 16,
        marginVertical: 8,
        shadowColor: '#000',
        shadowOpacity: 0.08,
        shadowOffset: { width: 0, height: 4 },
        shadowRadius: 10,
        elevation: 4,
    },
    topRow: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    iconCircle: {
        width: 48,
        height: 48,
        borderRadius: 24,
        backgroundColor: '#F1F5FF',
        justifyContent: 'center',
        alignItems: 'center',
    },
    balanceContainer: {
        flex: 1,
        marginHorizontal: 12,
    },
    balanceAmount: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#333398',
    },
    balanceLabel: {
        fontSize: 14,
        color: '#A0A0A0',
        marginTop: 2,
    },
    dottedLine: {
        borderStyle: 'dotted',
        borderWidth: 0.5,
        borderColor: '#DADADA',
        marginVertical: 12,
    },
    bottomRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    column: {
        flex: 1,
        alignItems: 'center',
    },
    bottomValue: {
        fontSize: 16,
        fontWeight: 'bold',
        color: '#333398',
    },
    bottomLabel: {
        fontSize: 13,
        color: '#A0A0A0',
        marginTop: 2,
    },
    divider: {
        width: 1,
        backgroundColor: '#DADADA',
        marginHorizontal: 8,
    },
});
