import { SafeAreaView, StyleSheet } from 'react-native';
import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import DashboardScreen from '../Screen/DashboardScreen';


const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const MyTheme = {
  ...DefaultTheme,
  fonts: {
    regular: {
      fontFamily: 'System',
      fontWeight: 'normal',
    },
    medium: {
      fontFamily: 'System',
      fontWeight: '500',
    },
    semiBold: {
      fontFamily: 'System',
      fontWeight: '600',
    },
    bold: {
      fontFamily: 'System',
      fontWeight: 'bold',
    },
  },
};
function BottomTabs() {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ color, size }) => {
          let iconName;

          if (route.name === 'Home') {
            iconName = 'home-outline';
            return <Ionicons name={iconName!} size={size} color={color} />;
          }
          else if (route.name === 'Settings') {
            iconName = 'settings-outline';
            return <Ionicons name={iconName!} size={size} color={color} />;
          }
          else if (route.name === 'Teams') {
            iconName = 'account-group-outline';
            return <MaterialCommunityIcons name={iconName!} size={size} color={color} />;

          }
          else if (route.name === 'Groups') {
            iconName = 'file-account-outline';
            return <MaterialCommunityIcons name={iconName!} size={size} color={color} />;
          }

          return <Ionicons name={iconName!} size={size} color={color} />;
        },
        tabBarActiveTintColor: '#007AFF',
        tabBarInactiveTintColor: '#8e8e93',
      })}
    >
      <Tab.Screen name="Home" component={DashboardScreen} />
      <Tab.Screen name="Groups" component={DashboardScreen} />
      <Tab.Screen name="Teams" component={DashboardScreen} />
      <Tab.Screen name="Settings" component={DashboardScreen} />
    </Tab.Navigator>
  );
}

const NavigationStack = () => {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <NavigationContainer theme={MyTheme}>
        <Stack.Navigator screenOptions={{ headerShown: false }} initialRouteName='Dashboard'>
          <Stack.Screen

            name="Dashboard"
            component={BottomTabs}
            options={{ headerShown: false }}
          />

        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaView>
  );
};

export default NavigationStack;

const styles = StyleSheet.create({});
