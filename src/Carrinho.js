import React from 'react'
import { TouchableOpacity } from 'react-native'
import { TextInput, Text, StyleSheet, View,Image, Button } from 'react-native'


export default function Carrinho() {
  return (
    <View style={css.caixa}>
      <View style={css.caixa1}>
      <Text style={css.textopro}>
          produto
        </Text>
        
        <Text style={css.bt}>
        Bt soft blender
        </Text>

        <Text style={css.textosub}>
          subtotal
        </Text>
        <Text style={css.quantidade}>
          + 1 -
        </Text>

        <Text style={css.preco}>
          R$13,99
        </Text>

        <Text style={css.subpreco}>
        subtotal (sem frete):R$13,99
        </Text>
        <Image style={css.imagem}  source={require("../assets/fotor-2024041294257.png")}/>
      </View>
      <View style={css.caixa2}>
        <Text style={css.envio}>
        meios de envio:
        </Text>
        <TextInput placeholder=' Seu Cep' style={css.cep}/>
        <TouchableOpacity style={css.botao}>
          <Text>calcular</Text>
        </TouchableOpacity>
        <Text style={css.total}>
        total:R$13,99
        </Text>
        <Text style={css.vezes}>
        Ou até 3x de R$5,17
        </Text>
        <TouchableOpacity style={css.botao2}>
          <Text style={css.iniciar}>Iniciar compra</Text>
        </TouchableOpacity>
      </View>
    </View>

  )
}
const css = StyleSheet.create({
    caixa:{
      marginTop:40,
      width:400,
      height:100,
      backgroundColor:"#E4BEBE",
      borderRadius:5, 
      borderWidth:1
    },
    caixa2:{
      marginTop:100,
      width:400,
      height:100,
      backgroundColor:"#E4BEBE",
      borderRadius:5, 
      borderWidth:1
    },
    envio:{
      marginLeft:10,
    },
    bt:{
      marginLeft:60,
      marginTop:10
    },
    imagem:{
      width: "70%",
      height: 55,
      resizeMode:"contain",
      marginTop:-91,
      marginRight:9,
      
      
    },
    textopro:{
      marginLeft:30,
      marginTop:-20
    },
    textosub:{
      marginLeft:300,
      marginTop:-47
    },
    quantidade:{
      marginLeft:150,
      marginTop:30,
      fontSize:16
    },
    preco:{
      marginLeft:300,
      marginTop:-20
    },
    subpreco:{
      marginLeft:210,
      marginTop:65
    },
    cep:{
      width:"75%",
      backgroundColor:"#D9D9D9",
      marginTop:35,
      borderRadius:5, 
      borderWidth:1
    },
    botao:{
      marginLeft:330,
      marginTop:-25,
      backgroundColor:"#D0AEA9",
      width:"25%",
      borderRadius:5, 
      borderWidth:1,
      textAlign:"center"
    },
    total:{
      marginLeft:300,
      marginTop:30
    },
    vezes:{
      marginLeft:258,
      marginTop:5
    },
    botao2:{
      marginLeft:135,
      marginTop:25,
      backgroundColor:"#D0AEA9",
      width:"30%",
      borderRadius:5, 
      borderWidth:1,
      textAlign:"center"
    },
    iniciar:{
      textAlign:"center"
    }
})

