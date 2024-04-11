import { Text, TextInput, TouchableOpacity, View , StyleSheet,Image} from "react-native";

export default function cadastro({setLogado , setCadastro}){

    function Cadastrar(){
        setCadastro(false);
        setLogado(false);
    }
    function Voltar(){
        setCadastro(false);
        setLogado(false);
    }

    return(
        <View style={css.container}> 
            <Image style={css.imagem} source={require("../assets/logo-pincel.png")}/> 
            <View style={css.conteudo}>
                <Text>Digite o Nome</Text>
                    <TextInput style={css.input} /> 
                <Text>Digite o CPF</Text>
                    <TextInput style={css.input} />   
                <Text>Digite o Endereço</Text>
                    <TextInput style={css.input} /> 
                <Text>Digite o Telefone</Text>
                    <TextInput style={css.input} />         
                <TouchableOpacity onPress={Cadastrar} style={css.btn}>
                    <Text>Cadastrar</Text>
                </TouchableOpacity>      
                <TouchableOpacity onPress={Voltar} style={css.btn}>
                    <Text>Voltar</Text>
                </TouchableOpacity>           
            </View>           
        </View>
     );
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
        borderRadius: 5,
        marginTop: 25,
        top:-3
    },  
    imagem:{
        width:230,
        height:230,
        top:10,
        resizeMode:"stretch",
    },
    btn:{
        width:"50%",
        height: 60,
        backgroundColor:"#F1CECC",
        borderRadius: 5,
        marginTop: 20,
        alignSelf: "center",
        top:3
    },
});
