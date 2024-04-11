
import { Image, Text, View,imagem,StyleSheet,} from "react-native";

export default function Home()
{
    return(
        <View style={css.fundo}>
            <Image style={css.imagem}  source={require("../assets/SOBRE.png")}/>
            <View style={css.texto}>
                <Text>Em 2009, Bruna Tavares começou seu blog Pausa para Feminices 
                com a intenção de desenvolver apenas um portfólio de jornalismo de moda e beleza,

                mas com o tempo o conteúdo de moda do blog foi sendo substituído por beleza. 
                 O tempo passou e o Pausa para Feminices se tornou um dos mais respeitadose acessados blogs de beleza de país,
                ficando inclusive em primeiro lugar em uma lista da EXAME de 2015 como dos mais acessados.</Text>
            </View>
        </View>
    )
}
const css = StyleSheet.create({
    
    texto:{
        width: "100%",
        height:400,
        backgroundColor:"#F1CECC",
        alignSelf: "center", 
        marginTop:20,
        marginLeft:10,
      },
    imagem:{
        width:230,
        height:230,
        top:50,
        resizeMode:"stretch",
        marginLeft:85
      },
      fundo:{
        backgroundColor:"white"
      },
      

})