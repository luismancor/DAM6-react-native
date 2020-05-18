import React, { Component } from 'react';
import {View,StyleSheet,Text,Image} from 'react-native';

export default class ConexionFetch extends Component{
    constructor(props){
        super(props);

        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
            id: this.props.route.params.itemId,
        };
    }
    async componentDidMount() {
        await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${this.state.id}`)
            .then(res => res.json())
            .then(
                result => {
                    this.setState({
                        items: result.data.movie,
                    });
                },
                error => {
                    this.setState({
                        error: error,
                    });
                },
            );
    }

    render(){
        return(
            <View style={styles.container}>
                <View>
                    <Text></Text>
                    <Image source={{uri: this.state.items.medium_cover_image}} style={styles.itemImage} resizeMode="cover"/>
                </View>
                <View style={styles.top}>
                </View>
                <View style={styles.text}>
                    <View style={styles.viewTitle}>
                        <View style={styles.tit}>
                            <View>
                                <Text style={styles.titleTop}>{this.state.items.title}</Text>
                            </View>
                        </View>
                        <Text style={styles.description}>{this.state.items.description_intro}</Text>
                    </View>
                </View>
                
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#D8B0D5',
    },
    itemContainer:{
        backgroundColor:'#BBDEFB',
        padding:30,
        marginVertical:8,
        marginHorizontal:16,
    },
    titleTop:{
        paddingTop:5,
        fontSize:30,
        justifyContent:'center',
        alignItems:'center',
        paddingLeft:25,
        alignSelf:'center',
    },
    description:{
        fontSize:17,
        paddingLeft:15,
    },
    itemImage:{
        height:400,
        width:250,
        alignSelf:'center',
        borderRadius:20,
        
    }

});