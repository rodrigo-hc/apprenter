import React from "react";
import {StyleSheet, View,Text, Button,Image } from "react-native";


const Home = ({navigation}) => {
    return(
        <View style={styles.container}>
            <Text style={styles.title}>Renter</Text>
            <Image 
            source={require('../assets/icono.png')}
            style={{width:150, height:160, margin:25}}
            />
            
            <Button
            title='Comenzar'
            onPress={ () => navigation.navigate('Login') }
            color='red'
            fontSize='50'
            />
      </View>
  
    )
}


export default Home;


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#FF5733',
      alignItems: 'center',
      justifyContent: 'center'
    },
    title:{
      fontSize:60,
      fontWeight:'bold',
      color:'white',
      marginBottom:20
    },
    
    
  });
  