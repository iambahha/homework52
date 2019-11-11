import React, {Component} from 'react';
import './App.css';
import Number from "./Components/Numbers/Numbers";


class App extends Component{
  state ={
    numbers : ['S','T','A','R','T'],
  };
  randomNumber = () => Math.floor(Math.random() * (37 - 5) + 5);

  newNumbers = () => {
    let lotoNum = [];
    for(let i = 1; i < 6;){
      let number = this.randomNumber();
      if(lotoNum.includes(number)){
        continue;
      }
      lotoNum.push(number);
      ++i;
    }
    lotoNum.sort(function (a,b) {
      return a - b ;
    });

    let newArr = {...this.state};
    newArr.numbers = lotoNum;
    let numbers = newArr.numbers;
    this.setState({numbers});
  };
  
  render() {
    return (
      <div className="App">
        <div className="container">
          <button onClick={this.newNumbers}>New Numbers</button>
          <div className="row">
            <Number number={this.state.numbers[0]}/>
            <Number number={this.state.numbers[1]}/>
            <Number number={this.state.numbers[2]}/>
            <Number number={this.state.numbers[3]}/>
            <Number number={this.state.numbers[4]}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;