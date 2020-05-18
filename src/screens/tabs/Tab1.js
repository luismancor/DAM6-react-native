
//import { styles } from '../../styles/styles.js'

import React, { Component } from 'react';
import {View, FlatList, StyleSheet, Text, Image,TouchableOpacity} from 'react-native';


function Item({id, title, image, summary, navigation}) {
    return(
        <TouchableOpacity  
            style={{borderBottomWidth: 0.5}}
            
            onPress={() => navigation.navigate('DetailFetch',{
                itemId: id,
            })}
            
            >
          <View  style={{ flex:1 , flexDirection:'row'}}>
            <View style={styles.thumbContainer}>
              <Image source={{uri:image}} style={{height:80, width:80, borderRadius:50}}></Image>
            </View>
            <View style={styles.description}>
                <Text style={styles.itemName}>{title}</Text>
                <Text numberOfLines={3} style={styles.itemSubtitle}>{summary}</Text>
            </View>

          </View>
        </TouchableOpacity>
    );
}
export default class ConexionFetch extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            textValue: 0,
            count: 0,
            items: [],
            error: null,
        };
    }
    async componentDidMount() {
        await fetch('https://yts.mx/api/v2/list_movies.json')
            .then(res => res.json())
            .then(
                result => {
                    console.warn('result', result.data.movies);
                    this.setState({
                        items: result.data.movies,
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
                
                <FlatList
                    data={this.state.items.length > 0 ? this.state.items : []}
                    renderItem={({item}) => (
                        <Item
                            id={item.id}  
                            title={item.title} 
                            image={item.medium_cover_image} 
                            summary={item.summary}
                            navigation={this.props.navigation}/>
                    )}
                    numColumns={1}
                    keyExtractor={item => item.id}
                />
                
                

            </View>
        );
    }
}
const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:'#FFEBCD',
        
    },
    itemContainer:{
        backgroundColor:'#D2A19A',
        padding:10,
        marginVertical:8,
        marginHorizontal:10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        
    },

    itemName:{
        fontSize:22,
        paddingRight:10,
    },
    itemSubtitle:{
        padding:10,
        marginRight:10,
        width:300,
    },
    thumbContainer:{
    padding:8,
    },
});
