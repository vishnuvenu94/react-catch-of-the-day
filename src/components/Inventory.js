import React from "react";
import AddFish from "./addfish";
import FishEdit from "./fishEdit";

class Inventory extends React.Component {
  render() {
      //console.log(this.props.changeState,"inventory");
    return (
    
        <div className="inventory">
        <h2>Inventory!!!</h2>
        {Object.keys(this.props.fishes).map(items=>( 
          <FishEdit key={items} index={items} fish={this.props.fishes[items]} updateFishForm={this.props.updateFishForm}
          deleteFish={this.props.deleteFish}
          />

        ))}
        
        <AddFish changeState={this.props.changeState}/>
        <button onClick={this.props.loadFishes}>load fishes</button>
        </div>

);
  }
}

export default Inventory;