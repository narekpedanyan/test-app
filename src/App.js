import MiddleWare from './components/middleWare';
import React, { Component } from 'react';
import './App.css';
import Example from './example';
import Chart from './chart';

class App extends Component {
  render() {
    return (
      <div className="App">
          <div>
              <Example />
          </div>
          <div className='chart-r'>
            <Chart />
          </div>
      </div>
    );
  }
}

export default App;
