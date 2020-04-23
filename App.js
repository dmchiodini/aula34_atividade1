import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput,
  Button,
  View
} from 'react-native';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {cronometro: '', caracteres: '', habilitar: false};
    this.inscricaoCronometro;
  }

componentDidMount() {
  this.inscricaoCronometro = setInterval(() => {
    if(this.state.cronometro > 0){
      this.incrementarCronometro();
    }
    if(this.state.cronometro === 0){
      this.setState({ habilitar: false})
    }
  }, 1000);
}

incrementarCronometro() {
  this.setState({cronometro: this.state.cronometro - 1});
}

render() {
  return(
    <SafeAreaView>
      <Text style={{ backgroundColor: '#054F77', color: '#FFFFFF', height: 65, fontSize: 28, textAlign: 'center', padding: 10 }}>
        Jogo Digitação
      </Text>
      <Text style={{ textAlign: 'center', fontWeight: 'bold', padding: 20 }}>Digite o máximo de caracteres antes que o cronômetro chegue a 0</Text>
      <Text style={{ fontWeight: 'bold', margin: 20, color: '#FF0000', fontSize: 16}}>Cronômetro: {this.state.cronometro}</Text>     
      <TextInput 
        style={{ margin: 20, backgroundColor: "#CCCCCC"}} 
        onChangeText={text => this.setState({ caracteres: text.trim()})} 
        editable={this.state.habilitar ? true : false} 
        value={this.state.caracteres}
      />
      <View style={{ justifyContent: 'center', display: 'flex', flexDirection: 'row'}}>
        <Button
          title="Jogar"
          onPress={() => {this.setState({cronometro: 10, habilitar: true, caracteres: ''})}}
        />   
      </View>
      {this.state.cronometro === 0 && 
        <Text style={{ color: 'blue', fontSize: 18, margin: 20, textAlign: 'center' }}> Você digitou {this.state.caracteres.length} caracteres.</Text>
      }      
    </SafeAreaView>
  )
}

}

export default App;
