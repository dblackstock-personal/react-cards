import React from 'react';
import './App.css';
import Card from './components/Card';
import Navbar from './components/Navbar';

class App extends React.Component {

  state = {
    counter: 0,
    names: ["Rob", "Ned", "John"],
    showCard: true,
    hideButtonText:"Hide Cards"
  }

  BtnFunc = () => {
    this.setState({
      counter: this.state.counter + 1
    })
    console.log("button was clicked")
  }

  changeNames = () => {
    this.setState({
      names: ["Joey", "Rachel", "Gunther"]
    });
  }

  hideCard = () => {
    if (this.state.showCard){
      this.setState({
        showCard:false,
        hideButtonText:"Show Cards"
      });
    } else{
      this.setState({
        showCard:true,
        hideButtonText:"Hide Cards"
      });
    }
    
  }

  showCard = () => {
    this.setState({
      showCard:true
    });
  }

  render() {
    return (
      <div>
        <Navbar
          link1="Home"
          link2="About"
          link3="Contact"
          pages={3}
        />
        <Card
          name={this.state.names[0]}
          city="Salford"
          avatar="madking"
          visible={this.state.showCard}
        />
        <Card
          name={this.state.names[1]}
          city="Belfast"
          avatar="BobMarley"
          visible={this.state.showCard}
        />
        <Card
          name={this.state.names[2]}
          city="Baghdad"
          avatar="diamond"
          visible={this.state.showCard}
        />
        <h1>My current counter is {this.state.counter}</h1>
        <div>
          <a onClick={this.BtnFunc} className='myBtn' ref='#'>Click Me</a>
        </div>
        <div>
        <a onClick={this.changeNames} className='myBtn' ref='#'>Change Names</a>
        </div>
        <div>
        <a onClick={this.hideCard} className='myBtn' ref='#'>{this.state.hideButtonText}</a>
        </div>
      </div>
    );
  }
}

export default App;
