import React, { useState } from 'react';
import {
    View,
    Text,
    StyleSheet,
    TouchableOpacity,
    FlatList,
} from 'react-native';
import Colors from '../constant/Color';
import SeptemberActivitiesCard from './Chartactivity';
import { TABS } from '../Helper/commonFuntion';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Campaign, TabType } from '../../types/WalletDataTyps';



const campaignData: Campaign[] = [
    {
        title: 'Lead Generation Campaign',
        completed: 343,
        pending: 368,
    },
    {
        title: 'Product Launch Marketing',
        completed: 488,
        pending: 105,
    },
];
type CampaignCardProps = {
    title: string;
    completed: number;
    pending: number;
};

const CampaignCard: React.FC<CampaignCardProps> = ({ title, completed, pending }) => {
    const total = completed + pending;
    const completionPercent = (completed / total) * 100;

    return (
        <View style={styles.card}>
            <Text style={styles.cardTitle}>{title}</Text>
            <Text style={styles.cardDesc}>Lorem ipsum dolor sit amet, consectetur..</Text>

            <View style={styles.progressBar}>
                <View
                    style={[
                        styles.progressFill,
                        { width: `${completionPercent}%` },
                    ]}
                />
            </View>

            <View style={styles.statusRow}>
                <Text style={styles.statusText}>
                    <Text style={styles.statusBold}>{completed}</Text> Completed
                </Text>
                <Text style={styles.statusText}>
                    <Text style={styles.statusBold}>{pending}</Text> Pending
                </Text>
            </View>
        </View>
    );
};


const CampaignTabs: React.FC = () => {
    const [activeTab, setActiveTab] = useState<TabType>('Recent');
    return (
        <View style={styles.container}>
            {/* Tabs */}
            <View style={styles.tabRow}>
                {TABS.map((tab) => (
                    <TouchableOpacity
                        key={tab}
                        onPress={() => setActiveTab(tab)}
                        style={[
                            styles.tabButton,
                            activeTab === tab && styles.activeTabButton,
                        ]}
                    >
                        <Text
                            style={[
                                styles.tabText,
                                activeTab === tab && styles.activeTabText,
                            ]}
                        >
                            {tab}
                        </Text>
                    </TouchableOpacity>
                ))}
                <Ionicons name="settings" size={25} color="gray" />
            </View>


            {/* Cards */}
            <FlatList
                horizontal
                data={campaignData}
                keyExtractor={(item) => item.title}
                renderItem={({ item }) => <CampaignCard {...item} />}
                contentContainerStyle={styles.cardList}
                showsHorizontalScrollIndicator={false}
            />
            <SeptemberActivitiesCard />
        </View>
    );
};

export default CampaignTabs;

const styles = StyleSheet.create({
    container: {
        backgroundColor: Colors.ghostWhite,
        flex: 1,
        paddingVertical: 16,
    },
    tabRow: {
        flexDirection: 'row',
        marginHorizontal: 16,
        justifyContent: 'space-between',
        marginBottom: 16,
        alignItems: 'center',
    },
    tabButton: {
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderRadius: 20,
        marginRight: 12,
    },
    activeTabButton: {
        backgroundColor: Colors.neonBlue,
    },
    tabText: {
        color: 'gray',
        fontWeight: '600',
    },
    activeTabText: {
        color: Colors.white,
    },
    cardList: {
        paddingHorizontal: 12,
    },
    card: {
        backgroundColor: Colors.white,
        borderRadius: 16,
        padding: 16,
        width: 200,
        marginRight: 16,
        shadowColor: '#000',
        shadowOpacity: 0.05,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 5,
        elevation: 2,
    },
    cardTitle: {
        fontSize: 15,
        fontWeight: '700',
        color: Colors.primaryPurple,
    },
    cardDesc: {
        color: Colors.darkGray,
        marginTop: 4,
        fontSize: 13,
    },
    progressBar: {
        height: 6,
        borderRadius: 4,
        backgroundColor: '#E0E7FF',
        marginTop: 12,
        overflow: 'hidden',
    },
    progressFill: {
        height: '100%',
        borderRadius: 4,
        backgroundColor: Colors.neonBlue,
    },
    statusRow: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginTop: 12,
    },
    statusText: {
        fontSize: 12,
        color: Colors.darkGray,
    },
    statusBold: {
        color: Colors.neonBlue,
        fontWeight: '700',
        fontSize: 14,
    },
});
