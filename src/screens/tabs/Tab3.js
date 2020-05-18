import React, { Component, useState  } from 'react';
import {View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native'; //yarn add react-native-elements

import { ListItem } from 'react-native-elements' // LINK react-native link react-native-vector-icons    ---https://react-native-elements.github.io/react-native-elements/docs/getting_started.html


const list = [
    {
      title: 'Account',
      icon: 'av-timer'
    },
    {
      title: 'Notifications',
      icon: 'flight-takeoff'
    },
    {
      title: 'Appaerance',
      icon: 'face'
    },
    {
      title: 'Privacy & Security',
      icon: 'fingerprint'
    },
    {
      title: 'About',
      icon: 'build'
    },
    
  ]
  


export default function Tab3() {
  return (
    <View style={styles.container}>
       <View>
            {
            list.map((item, i) => (
                <ListItem
                key={i}
                title={item.title}
                leftIcon={{ name: item.icon }}
                bottomDivider
                chevron
                />
            ))
            }
        </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 5,
  },
  item: {
    backgroundColor: 'gray',
    flex:1,
    flexDirection:'row',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});



/*


const DATA = [
  {
    id: '1',
    title: 'First Item',
    icon: 'icon1',
  },
  {
    id: '2',
    title: 'Second Item',
    icon: 'icon2',
  },
  {
    id: '3',
    title: 'Third Item',
    icon: 'icon3',
  },
];

function Item({ title,icon }) {
  return (
    <View style={styles.item} >
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.title}> {icon} </Text>
    </View>
  );
}

     <FlatList
        data={DATA}
        renderItem={({ item }) => <Item title={item.title} icon={item.icon}/>}
        keyExtractor={item => item.id}
      />
*/





/*
export default function Tab3(){
    const  [name, set] = useState([
        {name: 'aea', key: '1'},
        {name: 'aea2', key: '2'},

    ]);

    return(
        <View style={styles.container}>
            <FlatList
                data ={name}
                renderItem={({item}) =>(
                    <Text style={styles.item}>{item.name}</Text>
                )}
            />

        </View>
    )
}


var styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    text:{
        alignItems:'center',
        padding:10,
    },
  });
----------------

*/





/*

import React from 'react';
import { View, Text } from 'react-native';
import { styles } from '../../styles/styles.js'


Tab3 = () =>
    <View style={styles.center}>
        <Text style={styles.title}>Tab 3</Text>

    </View>

export default Tab3;

*/