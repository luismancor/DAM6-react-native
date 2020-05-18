/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { Component } from 'react';
import Feed from './src/feed';
import Detail from './src/details';
import Login from './src/login';
import DetailFetch from './src/detailFetch';


import Screen1 from './src/screens/drawer/screen1';
import Screen2 from './src/screens/drawer/screen2';
import Screen3 from './src/screens/drawer/screen3';


import Tab1 from './src/screens/tabs/Tab1';
import Tab2 from './src/screens/tabs/Tab2';
import Tab3 from './src/screens/tabs/Tab3';


import Ionicons from 'react-native-vector-icons/Ionicons'; //Iconos importados npm install --save react-native-vector-icons
import {View, FlatList, StyleSheet, Text, Image,TouchableOpacity, Button, TextInput} from 'react-native';

import { NavigationContainer } from '@react-navigation/native'; //Primer import
import { createStackNavigator } from '@react-navigation/stack'; //crea stack navigation principal-multiple navigators
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createDrawerNavigator } from  '@react-navigation/drawer';

const Drawer = createDrawerNavigator();
const Stack = createStackNavigator();
const MaterialBottomTabs = createMaterialBottomTabNavigator();


export default class App extends Component{

 
  render(){
    createHomeStack = () =>
    <Stack.Navigator>
      <Stack.Screen name="Feed" component={Login}/>
      <Stack.Screen name="Detail" component={Detail}/>
      <Stack.Screen name="Bottom Tabs" children={createBottomTabs}
            options={{
            title:"Lista de Opciones",
          }}
      />
      <Stack.Screen name="DetailFetch" component={DetailFetch}/>
    </Stack.Navigator>
  
    createBottomTabs = () => {
      return <MaterialBottomTabs.Navigator>
        <MaterialBottomTabs.Screen name="Lista" component={Tab1}/>
        <MaterialBottomTabs.Screen name="Video" component={Tab2}/>
        <MaterialBottomTabs.Screen name="Settings" component={Tab3}/>
      </MaterialBottomTabs.Navigator>
    }

    return(
      <NavigationContainer>
        <Drawer.Navigator>
          <Drawer.Screen name="Home" children={createHomeStack}/>
          <Drawer.Screen name="Contacts" component={Screen1}/>
          <Drawer.Screen name="Favorites" component={Screen2}/>
          <Drawer.Screen name="Settings" component={Screen3}/>
        </Drawer.Navigator>        
      </NavigationContainer>
    )
  }
}