import React, { useState } from 'react'
import { Keyboard, TouchableOpacity, View,TextInput,Text, StyleSheet, Image } from 'react-native'


export default function Login({setLogado, setCadastro}) {
    
    const[email, setEmail] = useState("");
    const[senha , setSenha] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if(email == "lojaamora" && senha == "lojaamora") {
            setLogado(true);
        }
    }

    function cadastro(){
        setCadastro(true);
        setLogado(true);
    }

    return (
    <View style={css.container}>
         <Image style={css.imagem} source={require("../assets/logo-pincel.png")}/> 
         <View style={css.conteudo}>
            <Text>Digite o Usuário</Text>
            <TextInput style={css.input} onChangeText={(digitado) => setEmail(digitado)} value={email} /> 
            <Text>Digite a Senha</Text>
            <TextInput style={css.input} onChangeText={(digitado) => setSenha(digitado)} value={senha} />
            <TouchableOpacity onPress={Login} style={css.btn}>
                <Text style={css.texto}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={cadastro} style={css.btn}>
                <Text style={css.texto}>Cadastre-se</Text>
            </TouchableOpacity>           
         </View>           
    </View>
  )
}
const css = StyleSheet.create({
    container:{
        width: "100%",      
        backgroundColor: "white",
        display:"flex",
        justifyContent:"center",
        alignItems:"center", 
        flex: 1,
    },
    conteudo:{
        width: "100%",       
        fontSize: 30,
        fontWeight: "bold"
    },
    input: {
        width: "80%",
        height:40,
        alignSelf: "center",
        borderWidth: 1,
        marginTop: 10
    },
    imagem:{
        width:230,
        height:230,
        top:-60,
        resizeMode:"stretch",
      },      
      btn:{
        width:"50%",
        height: 50,
        backgroundColor:"#F1CECC",
        borderRadius: 5,
        marginTop: 20,
        alignSelf: "center"
      },
      texto:{
        top:-3,
        alignSelf: "center",
        marginTop:20,
      }
});

