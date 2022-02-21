import React from "react";
import lightOn from './img/lighton.png'
import lightOff from './img/lightoff.png'
import './App.css'
import Random from './components/Random'







class App extends React.Component{
  constructor(){
    super()
    this.state = ({isOn:false})

  }
  changeState(){
    this.setState({isOn: !this.state.isOn})
    
  }
  render(){
    const LightState = this.state.isOn;
    switch(LightState){
      case true:
        document.body.style.backgroundColor = ('#a0e6ff');
        break;
      case false:
          document.body.style.backgroundColor = ('#f6b19b');
          break;


    }
    
    return(
      <>
        <div className="container">
          <img src={LightState ? lightOn : lightOff}/>
          <div className="cube-switch"   >
          <span className="switch" onClick ={() => this.changeState()} >
              <span className="switch-state off">Off</span>
              <span className="switch-state on">On</span>
            </span>

          </div>

          <Random/>
          

        </div>
      
      </>
    )
  }
}

export default App;
