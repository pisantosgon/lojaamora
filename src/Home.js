
import { Text, View , Image ,StyleSheet} from "react-native";

export default function Home()
{
    return(
        <View>
             <Image style={css.imagem} source={require("../assets/SOBRE.png")}/> 
            <Text>Em 2009, Bruna Tavares começou seu blog Pausa para Feminices 
                com a intenção de desenvolver apenas um portfólio de jornalismo de moda e beleza,
                 mas com o tempo o conteúdo de moda do blog foi sendo substituído por beleza. 
                 O tempo passou e o Pausa para Feminices se tornou um dos mais respeitados e acessados blogs de beleza de país,
                  ficando inclusive em primeiro lugar em uma lista da EXAME de 2015 como dos mais acessados.</Text>
        </View>
    )
}

const css = StyleSheet.create ({
    imagem:{
        width:230,
        height:230,
        top:-60,
        resizeMode:"stretch",
      },     

})