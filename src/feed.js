import React, { Component } from 'react';
import {View, FlatList, StyleSheet, Text,TextInput, Image,TouchableOpacity, Button} from 'react-native';

import { styles } from './styles/styles';

class Feed extends Component {
    render(){
        return(
            <View style={styles.center}>
                <Text style={styles.title}>Navigation Drawers</Text>
                <Button 
                    title="Ir a feed item"
                    onPress={()=> {this.props.navigation.navigate('Detail')}}
                />
            </View>
        );
    }
}

export default Feed;