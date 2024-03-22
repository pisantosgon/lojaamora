import React from 'react'
import { Text, TextInput, TouchableOpacity, View, StyleSheet} from 'react-native'

export default function Cadastro({setLogado,setCadastro}) {
    
    function Cadastrar(){
        setCadastro(false);
        setLogado(false);
    }
    function Voltar(){
        setCadastro(false);
        setLogado(false);
    }
  return (
    <View>
        <TextInput/>
        <TextInput/>
        <TouchableOpacity onPress={Cadastrar}>
            <Text>Cadastrar</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={Voltar}>
            <Text>Login</Text>
        </TouchableOpacity>
    </View>
  )
}
const css = StyleSheet.create({
        View:{
            width:"100%",
            height:"100%",
            flex:1,
            justifyContent:"center",
            color:"#FFC7E9"
        },
        inputs:{
            width:"90%",
            borderWidth:1,
            marginTop:25,
            color:"#FFC7E9"
        }
})
