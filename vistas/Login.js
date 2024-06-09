import React from "react";
import {StyleSheet, View,Text,TextInput, TouchableOpacity, Image } from "react-native";


const Login = ({navigation}) => {
    return(
        <View style={styles.contenedor}>
        <Text style={styles.titulo}>Inicia Sesion</Text>
        <Image source={require('../assets/login.png')} style={{width:150,height:120, alignSelf:'center', margin:20}} ></Image>
        <TextInput
          placeholder="Ingresa tu usuario"
          style={{borderColor:'black', borderWidth:2, height:40, width:250, alignSelf:'center',padding:10,  }}
        />
        <TextInput
          placeholder="Introduce tu contraseña"
          style={{borderColor:'black', borderWidth:2, height:40, width:250, alignSelf:'center',padding:10, marginTop:20 }}
        />

        <TouchableOpacity
            style={{
                backgroundColor:'orange', 
                height:40,
                width:250, 
                alignSelf:'center', 
                marginTop:20,
                borderRadius:5,
                padding:5
            }}
            > 
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'white'}}>Iniciar sesion</Text>
        </TouchableOpacity>


        <TouchableOpacity
        onPress={() => {navigation.navigate('Registrarse')}}
        style={{
            backgroundColor:'purple', 
            height:40,
            width:250, 
            alignSelf:'center', 
            marginTop:20,
            borderRadius:5,
            padding:5
        }}
        > 
        <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'white'}}>Registrarse</Text>
        </TouchableOpacity>
        
        
        
      </View>
    )
}


export default Login;


const styles = StyleSheet.create ({
    contenedor:{
      flex: 1,
      alignContent:'center',
      justifyContent:'center'
    },
    titulo:{
      fontSize:35,
      fontWeight:'bold',
      textAlign:'center',
      marginVertical:10
    }
  })