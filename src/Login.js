import React, { useState } from 'react'
import { Keyboard, TextInput,Text, TouchableOpacity,View,StyleSheet } from 'react-native';

export default function Login({setLogado,setCadastro}) {

    const[email,setEmail] = useState("");
    const[senha, setSenha] = useState("");

    function Login()
    {
        Keyboard.dismiss();
        if( email =="arrudamariaeduarda492@gmail.com" && senha == "1234"){
            setLogado(true);
        }
    }
    function Cadastrar()
    {
        setLogado(true);
        setCadastro(true);
    }
  return (
    <View >
         <Text css={css.Label}>digite seu email:</Text>
        <TextInput style={css.input} onChangeText={ (digitado) => setEmail (digitado)} value={email}/>
        <Text>digite sua senha</Text>
        <TextInput 
         style={css.input} onChangeText={ (digitado) => setSenha (digitado)} value={senha}/>
        <TouchableOpacity onPress={Login}>
        <Text>Login</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Cadastrar}>
        <Text>Cadastra-se</Text>
        </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
    View:{
        width:"100%",
        height:"100%",
        flex:1,
        justifyContent:"center"
    },
    input:{
        width:"90%",
        borderWidth:1,
        marginTop:25
    }

})