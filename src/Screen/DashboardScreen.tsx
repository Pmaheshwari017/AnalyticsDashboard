import React from 'react';
import { ScrollView, StyleSheet, StatusBar, View, ActivityIndicator } from 'react-native';
import HiClarenceHeader from '../components/CommonComponent';
import Colors from '../constant/Color';
import WalletBalanceCard from '../components/WalletCard';
import ActivityStatCard from '../components/ActivityStatCard';
import TaskCompletionCard from '../components/TaskCompletionCard';
import CampaignTabs from '../components/CompainTab';
import NotificationCards from '../components/NotificationCards';
import useCall from '../CustomHooks.ts/useCall';
import { WalletData } from '../../types/WalletDataTyps';
import { formatDate } from '../Helper/commonFuntion';

const DashboardScreen = () => {
  const { data, loading, error } = useCall<WalletData>('http://01.fy25ey02.64mb.io/');

  return (
    <ScrollView style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#f6f7fc" />
      <HiClarenceHeader />
      <NotificationCards />
      {loading ? (
        <ActivityIndicator size="large" color="#7C3AED" style={{ margin: 16 }} />
      ) : (
        <WalletBalanceCard
          balance={data?.balance || '0.00'}
          autoFillAmount={data?.auto_fill_amount || '0.00'}
          autoFillDate={formatDate(data?.auto_fill_date)}
        />
      )}
      <View style={styles.containerActivity}>
        <ActivityStatCard
          title="Activities this week"
          calls={136}
          percentage={7.6}
          isPositive={false}
          avgText="Avg. 26 calls per day"
        />
        <ActivityStatCard
          title="Activities this month"
          calls={986}
          percentage={10.6}
          isPositive={true}
          avgText="Avg. 146 calls per week"
        />
      </View>
      <TaskCompletionCard />
      <CampaignTabs />
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.ghostWhite,
    // padding: 16,
  },
  header: {
    marginTop: 40,
    marginBottom: 20,
  },
  headerTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: Colors.primaryPurple,
  },
  headerSubtitle: {
    fontSize: 16,
    color: Colors.darkGray,
    marginTop: 5,
  },
  cardContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  card: {
    width: '60%',
    borderRadius: 12,
    padding: 15,
    alignItems: 'center',
    marginHorizontal: 10
  },
  cardIconContainer: {
    backgroundColor: 'rgba(255,255,255,0.2)',
    width: 40,
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
    marginRight: 10,
  },
  containerActivity: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 16,
  },
  cardTitle: {
    fontSize: 14,
    width: '60%',
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    marginBottom: 5,
  },
  cardText: {
    fontSize: 12,
    color: Colors.white,
    textAlign: 'center',
    opacity: 0.8,
  },
  // simpleCard: {
  //   backgroundColor: Colors.white,
  //   borderRadius: 8,
  //   padding: 16,
  //   marginBottom: 12,
  // },
  rowContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  largeAmount: {
    fontSize: 28,
    fontWeight: 'bold',
    color: Colors.primaryPurple,
    marginBottom: 4,
  },
  mediumText: {
    fontSize: 18,
    fontWeight: '600',
    color: Colors.primaryPurple,
    marginBottom: 4,
  },
  cardLabel: {
    fontSize: 14,
    color: Colors.darkGray,
  },
  sectionTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: Colors.primaryPurple,
    marginBottom: 8,
  },
  activityText: {
    fontSize: 16,
    color: Colors.primaryPurple,
    marginBottom: 4,
  },
  percentageText: {
    color: Colors.neonBlue,
  },
  subtext: {
    fontSize: 13,
    color: Colors.darkGray,
  },
  progressContainer: {
    backgroundColor: Colors.white,
    borderRadius: 12,
    padding: 20,
    alignItems: 'center',
    marginBottom: 20,
  },
  progressValue: {
    fontSize: 36,
    fontWeight: 'bold',
    color: Colors.primaryPurple,
  },
  progressLabel: {
    fontSize: 16,
    color: Colors.primaryPurple,
    marginTop: 5,
    fontWeight: '600',
  },
  progressSubtext: {
    fontSize: 12,
    color: Colors.darkGray,
    marginTop: 5,
    textAlign: 'center',
  },
  simpleCard: {
    backgroundColor: Colors.white,
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 2,
  },


});

export default DashboardScreen;