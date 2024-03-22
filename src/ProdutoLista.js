import { Image,View,Text, StyleSheet } from "react-native";

export default function ProdutoLista({nome, cor, preco, imagem})  {
    return(
        <View style={css.container}>
            <Image style={css.Imagem} source={imagem}/>
            <Text style={css.Nome}>{nome}</Text>
            <Text style={css.preco}>{preco}</Text>
            <Text style={css.cor}>{cor}</Text>
        </View>
    )
}

const css = StyleSheet.create({
    container:{
        width: "100%",
        height: 250,
        backgroundColor: "#F1CECC",
        display:"flex",
        justifyContent:"center",
        alignItems:"center",      
    },
    Nome: {
        fontWeight: "bold",
        marginBottom: 10
    },
    preco:{
        fontSize:20,
        color: "black",
        marginBottom: 10
    },
    cor:{
        color: "black"
    },
    Imagem:{
        width: "80%",
        height: 80,
        resizeMode:"contain",
        marginTop:5,
    }
})