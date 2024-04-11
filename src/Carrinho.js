import React from 'react'
import { Text, StyleSheet, View,Image } from 'react-native'

export default function Carrinho() {
  return (
    <View style={css.caixa}>
      <View style={css.caixa1}>
        <Text>
        Bt soft blender
        </Text>
        <Image style={css.imagem}  source={require("../assets/esponginha-bt (1).jpg")}/>
      </View>
      <View style={css.caixa2}>
        <Text>
        meios de envio:
        </Text>
      </View>
    </View>

  )
}
const css = StyleSheet.create({
    caixa:{
      marginTop:40,
      width:400,
      height:100,
      backgroundColor:"#E4BEBE"
    },
    caixa2:{
      marginTop:100,
      width:400,
      height:100,
      backgroundColor:"#E4BEBE",
    },
    imagem:{
      width: "60%",
        height: 60,
        resizeMode:"contain",
        marginTop:5,
        marginRight:30,
    }
})

