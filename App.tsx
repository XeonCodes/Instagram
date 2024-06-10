import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Home from './src/pages/Home'
import { NavigationContainer, useTheme } from '@react-navigation/native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeSvg from './src/assets/svg/Home.svg';
import SearchSvg from './src/assets/svg/Search.svg';
import ReelsSvg from './src/assets/svg/Reels.svg';
import MessageSvg from './src/assets/svg/Messenger.svg';
import UserSvg from './src/assets/svg/User.svg';


const Tab = createBottomTabNavigator();

const App = () => {

  const {colors} = useTheme();

  const Search = () => {
    return(
      <View></View>
    )
  }

  const Reels = () => {
    return(
      <View></View>
    )
  }

  const Chat = () => {
    return(
      <View></View>
    )
  }

  const Profile = () => {
    return(
      <View></View>
    )
  }

  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      
      <Tab.Screen 
        name='home'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <HomeSvg width={32} height={32} color={colors.text} />
        }}
        component={Home} 
      />

      <Tab.Screen 
        name='search'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <SearchSvg width={32} height={32} color={colors.text} />
        }}
        component={Home} 
      />

      <Tab.Screen 
        name='reels'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <ReelsSvg width={32} height={32} color={colors.text} />
        }}
        component={Home} 
      />

      <Tab.Screen 
        name='messenger'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <MessageSvg width={32} height={32} color={colors.text} />
        }}
        component={Home} 
      />

      <Tab.Screen 
        name='user'
        options={{
          tabBarShowLabel: false,
          tabBarIcon: () => <UserSvg width={32} height={32} color={colors.text} />
        }}
        component={Home} 
      />

    </Tab.Navigator>
  )
}

export default App

const styles = StyleSheet.create({})