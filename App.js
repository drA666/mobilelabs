import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MainScreen from './screens/MainScreen';
import SecondScreen from './screens/SecondScreen';
import ThirdScreen from './screens/ThirdScreen';

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {
            let iconName;
            switch (route.name) {
              case 'Main':
                iconName = focused ? 'home' : 'home-outline';
                break;
              case 'Charts':
                iconName = focused ? 'bar-chart' : 'bar-chart-outline';
                break;
              case 'Books':
                iconName = focused ? 'book' : 'book-outline';
                break;
            }
            return <Ionicons name={iconName} size={size} color={color} />;
          },
        })}
        tabBarOptions={{
          activeTintColor: '#000000',
          inactiveTintColor: '#696969',
        }}
      >
        <Tab.Screen name='Main' component={MainScreen} />
        <Tab.Screen name='Charts' component={SecondScreen} />
        <Tab.Screen name='Books' component={ThirdScreen} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
