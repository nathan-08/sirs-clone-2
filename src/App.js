import React, { Component } from 'react';
import router from './router/router'
// import './app.css'
import './css/reset.css'



class App extends Component {
  render() {
    return (
      <div className="App">
      
        {router}
        
      </div>
    );
  }
}

export default App;