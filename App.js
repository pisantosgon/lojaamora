import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { useState } from "react";
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';


import Home from "./src/Home";
import Login from "./src/Login";
import Cadastro from "./src/Cadastro";
import Carrinho from "./src/Carrinho";
import Produtos from "./src/Produtos";
import Promocao from "./src/Promocao";


const Tab = createBottomTabNavigator();

export default function App() {

    const [logado, setLogado] = useState(true);
    const [cadastro, setCadastro] = useState(false);

    if (!logado) {
        return (<Login setLogado={setLogado} setCadastro={setCadastro} />)
    }

    if (cadastro) {
        return (<Cadastro setCadastro={setCadastro} setLogado={setLogado} />)
    }

    return (

        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home"
            screenOptions={{
              tabBarStyle: { backgroundColor: '#FFB9AF' },
              tabBarLabelStyle: { color: "#5B3623"},
              headerStyle: { backgroundColor: '#FFB9AF' },
              headerTitleStyle: { color: '#5B3623' },
              tabBarActiveTintColor: '#94583e',
              tabBarInactiveTintColor: '#5B3623'
            }}
            >
                <Tab.Screen name="Home" component={Home} 
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color , size }) => (
                          <MaterialCommunityIcons name="home-heart" color={color} size={size} />
                        ),
                      }}
                />
                <Tab.Screen name="Carrinho" component={Carrinho} 
                options={{
                    tabBarLabel: 'Carrinho',
                    tabBarIcon: ({ color , size }) => (
                      <MaterialCommunityIcons name="cart-heart" color={color} size={size} />
                    ),
                  }}
                />
                <Tab.Screen name="Produtos" component={Produtos}
                options={{
                    tabBarLabel: 'Produtos',
                    tabBarIcon: ({ color , size }) => (
                      <MaterialCommunityIcons name="lipstick" color={color} size={size} />
                    ),
                  }}
                 />
                <Tab.Screen name="Promocao" component={Promocao} 
                options={{
                    tabBarLabel: 'promoção',
                    tabBarIcon: ({ color , size }) => (
                      <MaterialCommunityIcons name="ticket-percent" color={color} size={size} />
                    ),
                  }}
                />
            </Tab.Navigator>
        </NavigationContainer>
    );
}  