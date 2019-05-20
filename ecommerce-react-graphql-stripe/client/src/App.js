import React, { Component } from 'react';
// import NewComp from './components/NewComp';
import './components/App.css';


class App extends Component {
  
  render() {
    console.log(this.props)
    return (
      <div className="App">
         App
        {/* <NewComp prop={this.props} /> */}
      </div>
    );
  }
}

export default App;
