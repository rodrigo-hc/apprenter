import React from "react";
import {StyleSheet, View,Text,TextInput, TouchableOpacity,Image } from "react-native";


const Registrarse = () => {
    return(
        <View style={styles.contenedor}>
        <Text style={styles.titulo}>Registrarse</Text>
        <Image source={require('../assets/registrar.png')} style={{width:100,height:200, alignSelf:'center', margin:20}} ></Image>
        <TextInput
          placeholder="Crea un usuario"
          style={{borderColor:'black', borderWidth:2, height:40, width:250, alignSelf:'center',padding:10,  }}
        />
        <TextInput
          placeholder="Crear una contraseña"
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
            <Text style={{textAlign:'center', fontSize:20, fontWeight:'bold', color:'white'}}>Registrar</Text>
        </TouchableOpacity>

        
      </View>
    )
}


export default Registrarse;

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