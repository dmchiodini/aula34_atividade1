import React from 'react';
import {
  SafeAreaView,
  Text,
  TextInput
} from 'react-native';

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {cronometro: 10, caracteres: '', habilitar: true, array: []};
    this.inscricaoCronometro;
  }

componentDidMount() {
  this.inscricaoCronometro = setInterval(() => {
    if(this.state.cronometro > 0){
      this.incrementarCronometro();
    }
    if(this.state.cronometro == 0){
      this.setState({ habilitar: false})
      this.setState({ array: [...this.state.caracteres] })
    }
  }, 1000);
}

incrementarCronometro() {
  this.setState({cronometro: this.state.cronometro - 1});
}

render() {
  return(
    <SafeAreaView style={{ padding: 50 }}>
      <Text>Cronometro: {this.state.cronometro} segundos. </Text>
      <TextInput 
        style={{ height: 40, marginTop: 10, marginBottom: 10, backgroundColor: "#CCCCCC" }} 
        onChangeText={text => this.setState({ caracteres: text.trim()})} 
        editable={this.state.habilitar?true : false} 
      />
      {this.state.habilitar == false && 
        <Text>Você digitou {this.state.array.length} caracteres em 10 segundos</Text>
      }   
    </SafeAreaView>
  )
}

}

export default App;
