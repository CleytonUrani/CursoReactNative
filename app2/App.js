import React from 'react';
import { Text, AppRegistry, View, Image, TouchableOpacity, Alert } from 'react-native';

const Estilos = {
  principal: {
    flex:1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  botao: {
    backgroundColor: '#538530',
    paddingVertical: 10,
    paddingHorizontal: 40,
    marginTop: 20
  },
  textoBotao: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold'
  }
};

const gerarNovaFrase = () => {
  let numeroAle = Math.random();
  numeroAle = Math.floor(numeroAle * 13);

  let frases = [];
  frases.push('Levanta,sacode a poeira e dá a volta por cima.;Paulo Vanzolini');
  frases.push('Nem todos os dias são bons, mas há algo bom em cadas dia.;Pensador');
  frases.push('Suba o primeiro degrau com fé. não é necessário que você veja toda a escada. Apenas dê o primeiro passo.;Marthin Luther King');
  frases.push('A criança é o amor feito visível.;Fredrich Novalis');
  frases.push('Às vezes é melhor ficar calado deixando que os outros pensem que você é um idiota, do que abrir a boca e não deixar nenhuma dúvida.;Abraham Lincoln');
  frases.push('Para atingir o ponto mais alto, tem de se começar pelo mais baixo.;Públio Siro');
  frases.push('Perdi o jeito de ser gente. Não sei mais como se é. E uma espécie toda nova da solidão de não pertencer começou a me invadir como heras num muro.;Clarice Lispector');
  frases.push('Não suporto meios termos. Por isso, não me doo pela metade. Não sou sua meio amiga nem seu quase amor. Ou sou tudo ou sou nada.;Clarice Lispector');
  frases.push('A voz do inconsciente é sutil, mas ela não descansa até ser ouvida.;Sigmund Freud');
  frases.push('Se tiver que amar, ame hoje. Se tiver que sorrir, sorria hoje. Se tiver que chorar, chore hoje. Pois o importante é viver hoje. O ontem já foi e o amanhã talvez não venha.;Chico Xavier');
  frases.push('A vida é a espera da morte. Faça da vida um bom passaporte.;Vinicius de Moraes');
  frases.push('Sorrisos e abraços espontâneos me emocionam. Palavras até me conquistam temporariamente. Mas atitudes me ganham para sempre.;Clarice Lispector');
  frases.push('A arte da vida consiste em fazer da vida uma obra de arte.;Mahatma Gandhi');

  let fraseSelecionada = frases[numeroAle].split(';');

  Alert.alert(fraseSelecionada[1], fraseSelecionada[0]);
};

const App = () => {
  const { principal, botao, textoBotao } = Estilos;

  return(
    <View style={principal}>
      <Image source={require('./imagens/livros.png')} style={{width: 150, height: 150}}/>
      <TouchableOpacity
        onPress={gerarNovaFrase}
        style={botao}>
          <Text style={textoBotao}>Nova Frase</Text>
      </TouchableOpacity>
    </View>
  )
};

AppRegistry.registerComponent('app2', () => App);