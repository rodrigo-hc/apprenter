import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

//Paginas o vistas
import Home from "./vistas/Home";
import Login from "./vistas/Login";
import Registrarse from "./vistas/Registrarse";



const Stack = createNativeStackNavigator();

const MyStack = () => {
    return (
        <Stack.Navigator
        initialRouteName="Home"
        >
            <Stack.Screen
            name="Home"
            component={Home}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Login"
            component={Login}
            options={{headerShown:false}}
            />
            <Stack.Screen
            name="Registrarse"
            component={Registrarse}
            options={{headerShown:false}}
            />
        </Stack.Navigator>
    )
}


export default function Navigation () {
    return(
        <NavigationContainer>
            <MyStack/>
        </NavigationContainer>
    )
}
