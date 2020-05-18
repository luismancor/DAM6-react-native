import React, { Component } from 'react';
import {View, FlatList, StyleSheet, Text,TextInput, Image,TouchableOpacity, Button} from 'react-native';

import { styles } from './styles/styles';

export default class Login extends Component{   
    constructor(props){
        super(props);
        this.state={
            userValue:'',
            passValue:'',
        };
    }

    changeUserInput = text =>{
        this.setState({userValue: text})
    };
    changePassInput = text =>{
        this.setState({passValue: text})
    };

    render(){
        return(
            <View style={styles.container}>
                
                <View style={styles.text}>
                    <Text>Biblioteca de peliculas</Text>
                </View>
                <Text>
                </Text>

                <Text>Usuario</Text>
                <TextInput 
                    style={{height:40, borderColor: 'gray', borderWidth:1}}
                    onChangeText={text => this.changeUserInput(text)}
                    value={this.state.userValue}
                />
                <Text>Contraseña</Text>
                <TextInput 
                    style={{height:40, borderColor: 'gray', borderWidth:1}}
                    secureTextEntry={true}
                    onChangeText={text => this.changePassInput(text)}
                    value={this.state.passValue}
                />
                <Text>
                </Text>

                <Button 
                    title="INGRESAR"
                    onPress={()=> {
                        this.state.userValue == 'juan'? this.props.navigation.navigate('Bottom Tabs'): null
                    }}
                />
            </View>
        )
    };
}

