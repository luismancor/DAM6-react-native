import React, { Component } from 'react';
import {View, FlatList, StyleSheet, Text,TextInput, Image,TouchableOpacity, Button} from 'react-native';

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
                    title="Ir a Lista"
                    onPress = {() =>  this.props.navigation.navigate("Configuracion")}
                />
            </View>
        )
    };
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:'center',
        paddingHorizontal:10,
    },
    text:{
        alignItems:'center',
        padding:10,
    },
    button:{
        top:10,
        alignItems:'center',
        backgroundColor: '#DDDDDD',
        padding:10,
    },     
})

