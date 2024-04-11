import { View, Text, FlatList, Button, TextInput, TouchableOpacity, Keyboard } from "react-native";
import ProdutoLista from "./ProdutoLista";
import { useState } from "react";

const produto = [
    {
        id: 1,
        nome: "Blush Bruna Tavares",
        cor: "Rosa claro",
        preco: "90.00 ",
        imagem: require("../assets/bruna-tavares-b.png")
    },
    {
        id: 2,
        nome: "Batom Bruna Tavares",
        cor: "Vermelho",
        preco: "60.00 ",
        imagem: require("../assets/batom-bruna-tavares.png")
    },
    {
        id: 3,
        nome: " Gloss Labial Bruna Tavares ",
        cor: "Hollywood",
        preco: "50.00 ",
        imagem: require("../assets/gloos-bruna-tavares.png")
    },
    {
        id: 4,
        nome: " iluminador multiuso Bruna Tavares ",
        cor: "Crystal",
        preco: "70.00 ",
        imagem: require("../assets/iluminador-bruna-tavares.png")
    },
    {
        id: 5,
        nome: "Corretivo Líquido Bruna Tavares",
        cor: "Todos tons de pele",
        preco: "40.00 ",
        imagem: require("../assets/coretivo-bruna-tavares.png")
    },
    {
        id: 6,
        nome: "Base Líquida Bruna Tavares",
        cor: "Todos tons de pele",
        preco: "65.00 ",
        imagem: require("../assets/base-bruna-tavares.png")
    },
];

export default function Produtos()
{
    return(
        <View>
            <FlatList
                    data={produto}
                    renderItem={({ item }) => <ProdutoLista nome={item.nome} preco={item.preco} cor={item.cor} imagem={item.imagem} />}
                    keyExtractor={(item) => item.id}
                    columnWrapperStyle={{
                        justifyContent: "space-between",
                        width: "50%",
                        padding: 10,
                        gap: 20
                    }}
                    numColumns={2}
                />
        </View>
    )
}



