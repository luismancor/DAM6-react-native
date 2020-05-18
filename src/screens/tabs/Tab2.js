import React from 'react';
import Video from 'react-native-video'; //npm install --save react-native-video  && react-native link react-native-video

import { View, Text, StyleSheet } from 'react-native';
//import { styles } from '../../styles/styles.js'
//const sample = require('./video/sample.mp4');

Tab2 = () =>
    <View style={styles.center}>
         <Video source={{uri: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4'}}  // Can be a URL or a local file.
            ref={(ref) => {
                this.player = ref
            }}                                      // Store reference https://codedaily.io/courses/4/Fundamentals-of-React-Native-Video/37 GUIDE
            onBuffer={this.onBuffer}                // Callback when remote video is buffering
            onError={this.videoError}
            repeat={true}                // Callback when video cannot be loaded
            style={styles.backgroundVideo}
            
            />
        <Text>Mostrando Video</Text>
    </View>
       
        
    

export default Tab2;

var styles = StyleSheet.create({
    backgroundVideo: {
      position: 'absolute',
      alignContent:'center',
      justifyContent:'center',
      top: 0,
      left: 0,
      bottom: 0,
      right: 0,
    },
    center:{
        flex:1,
        justifyContent: 'center',
        alignItems: 'center',
    
    },
  });

  /*

  renderElement(){
   if(this.state.value == 'news')
      return <Text>data</Text>;
   return null;
}

render() {
    return (   
        <View style={styles.container}>
            { this.renderElement() }
        </View>
    )
}

*/