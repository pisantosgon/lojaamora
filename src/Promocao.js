import { View, Text, FlatList, Button, TextInput, TouchableOpacity, StyleSheet,Keyboard, Image } from "react-native";
import PromocaoLista from "./PromocaoLista";
import { useState } from "react";

const produto = [
    
    {
        id: 7,
        nome: "primer bt",
        cor: "Rosa claro",
        preco: "90.00 ",
        imagem: require("../assets/primer-removebg-preview (1).png")
        
    },
    {
        id: 8,
        nome: "bt velvet",
        cor: "Vermelho",
        preco: "60.00 ",
        imagem: require("../assets/bt_velvet-removebg-preview.png")
    },
    {
        id: 9,
        nome: " Paleta de sombra",
        cor: "red rose",
        preco: "50.00 ",
        imagem: require("../assets/paleta-sombra-removebg-preview.png")
    },
    {
        id: 10,
        nome: " Esponginha bt ",
        cor: "Azul",
        preco: "70.00 ",
        imagem: require("../assets/esponginha-bt-removebg-preview.png")
    },
    {
        id: 11,
        nome: "Fixador de maquiagem bt",
        cor: "rosa",
        preco: "45.00 ",
        imagem: require("../assets/fix-bt.png")
    },
    {
        id: 12,
        nome: " mascara de cilios bt ",
        cor: "Preto",
        preco: "25.00 ",
        imagem: require("../assets/mascara-cilios-bt.png")
    }
];



export default function Promocao()
{
    return(      
        <View style={css.container}>
             <Image style={css.imagem}  source={require("../assets/promocao-sem-fundo.png")}/> 
            <FlatList
                    style={{ marginBottom: 30 }}
                    data={produto}
                    renderItem={({ item }) => <PromocaoLista nome={item.nome} preco={item.preco} cor={item.cor} imagem={item.imagem} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{
                        justifyContent: "space-between",
                        width: "50%",
                        padding: 10,
                        gap: 20,

                    }}
                    contentContainerStyle={{ paddingBottom: 200 }}
                    numColumns={2}
                />
        </View>
    )
}

const css = StyleSheet.create({
    container: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
    },
    imagem:{
        width:230,
        height:230,
        resizeMode:"contain"
      }   
})

