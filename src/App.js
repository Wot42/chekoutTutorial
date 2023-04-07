import './App.css';
import Counters from './components/counters';
import NavBar from './components/navbar';
import React, { Component } from "react";



class App extends Component {

  state = {
    counters: [
      { id: 1, value: 0 },
      { id: 2, value: 0 },
      { id: 3, value: 0 },
      { id: 4, value: 0 },
    ],
  };

  handleDelete = (counterId) => {
    // console.log("del", { counterId });
    const counters = this.state.counters.filter((c) => c.id !== counterId);
    this.setState({ counters: counters });
  };

  handleReset = () => {
    const counters = this.state.counters.map((c) => {
      c.value = 0;
      return c;
    });
    this.setState({ counters: counters });
  };

  handleIncrement = (counter) => {
    // console.log("del", { counterId });
    const counters = [...this.state.counters];
    const index = counters.indexOf(counter);
    counters[index] = { ...counters[index] };
    counters[index].value++;

    this.setState({ counters: counters });
  };


  render(){
    return (
      <React.StrictMode>
      <NavBar totalCounters={this.state.counters.filter(c => c.value>0).length} />
      <main className='container'>
        <Counters
          counters={this.state.counters}
          onIncrement={this.handleIncrement}
          onDelete={this.handleDelete}
          onReset={this.handleReset}
        />
      </main>
      </React.StrictMode>

    );
  }
}

export default App;
