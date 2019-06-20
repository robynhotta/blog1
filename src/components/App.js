import React from 'react';
import Header from './Header';
import {BrowserRouter} from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
    <BrowserRouter>
      <div>
       <Header/>
      </div>
    </BrowserRouter>
    )
  }
}

export default App;