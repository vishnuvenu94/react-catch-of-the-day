import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes.js";
import Fishes from "./fishes";

class App extends React.Component {
    state={
        order:{},
        fishes:{},
        

    };
    changeState=(fish)=>{
        let fishes={...this.state.fishes};
        fishes[`fish${Date.now()}`]=fish;
        this.setState({
            fishes
        });
        


    }
    loadFishes=()=>{
        this.setState({
            fishes:sampleFishes
        })

    }
  render() {
      console.log(this.state);
    return (
        <div className="catch-of-the-day">
        <div className="menu">
       <Header tagline="vishnu"/>
      
      <ul className="fishes">
        {Object.keys(this.state.fishes).map(items=><Fishes key={items} load={this.state.fishes[items]}/>)}
      </ul>
      </div>
      <Order/>
      <Inventory changeState={this.changeState} loadFishes={this.loadFishes}/>

      </div>
    );
  }
}

export default App;