import React from "react";
import AddFish from "./addfish"

class Inventory extends React.Component {
  render() {
      //console.log(this.props.changeState,"inventory");
    return (
    
        <div className="inventory">
        <h2>Inventory!!!</h2>
        
        <AddFish changeState={this.props.changeState}/>
        <button onClick={this.props.loadFishes}>load fishes</button>
        </div>

);
  }
}

export default Inventory;