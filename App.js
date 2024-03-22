import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import Home from "./src/Home";
import Produtos from "./src/Produtos";
import Promocao from "./src/Promocao";
import Cadastro from "./src/Cadastro";
import { useState } from "react";
import Login from "./src/Login";

const Tab = createBottomTabNavigator();

export default function App() {

    const[logado , setLogado ] = useState(false);
    const[cadastro, setCadastro] = useState(false);

    if(!logado) {
        return(<Login setLogado={setLogado} setCadastro={setCadastro}/>)
    }

    if(cadastro){
        return( <Cadastro setCadastro={setCadastro} setLogado={setLogado} /> )
    }
    return (
        <NavigationContainer>
            <Tab.Navigator initialRouteName="Home">
                <Tab.Screen name="Home" component={Home} />
                <Tab.Screen name="Produtos" component={Produtos} />
                <Tab.Screen name="Promocao" component={Promocao} />
            </Tab.Navigator>
        </NavigationContainer>
    );
}