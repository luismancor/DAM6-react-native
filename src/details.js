import React, { Component } from 'react';
import {View, FlatList, StyleSheet, Text,TextInput, Image,TouchableOpacity, Button} from 'react-native';

import {styles} from './styles/styles';


class Detail extends Component {

    render(){
        return(
            <View style={styles.center}>
                <Text style={styles.title}>Detail Screen</Text>
                <Button 
                    title="Ir a Top tabs"
                    onPress={()=> {}}
                />
                <Button 
                    title="Ir a Bottom tabs"
                    onPress={()=> {this.props.navigation.navigate('Bottom Tabs')}}
                />
            </View>
        );
    }
} 

export default Detail;