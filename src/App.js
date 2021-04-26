import React, { Component, Fragment } from 'react'
import './styles/App.css'
import Button from './components/Button'

class App extends Component{
  render(){
    return(
      <Fragment className="container">
        <div className="calculator-form">
          <div className="row">
            <Button>1</Button>
            <Button>2</Button>
            <Button>3</Button>
            <Button>/</Button>
          </div>
        </div>
      </Fragment>
    )
  }
}
export default App;