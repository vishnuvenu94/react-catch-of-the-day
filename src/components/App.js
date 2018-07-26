import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import Order from "./Order";
import sampleFishes from "../sample-fishes.js";
import Fishes from "./fishes";
import base from "../base";

class App extends React.Component {
    state={
        order:{},
        fishes:{},
        

    };

    componentDidMount(){
        const getLocalStorage=localStorage.getItem(this.props.match.params.storeId)
        console.log(getLocalStorage,"local");
        if(getLocalStorage){
            this.setState({
                order:JSON.parse(getLocalStorage)
            })
        }
        this.ref=base.syncState(`${this.props.match.params.storeId}`,{
            context:this,
            state:"fishes",
        });
    }
    componentWillUnmount(){
        base.removeBinding(this.ref);
    }

    componentDidUpdate(){
        localStorage.setItem(this.props.match.params.storeId,JSON.stringify(this.state.order));
        
    }
    changeState=(fish)=>{
        let fishes={...this.state.fishes};
        fishes[`fish${Date.now()}`]=fish;
        this.setState({
            fishes
        });
        


    }

    deleteFish=key=>{
        const fishes={...this.state.fishes};
        fishes[key]=null;
        this.setState({fishes});
    }

    orderDelete=key=>{
        const order={...this.state.order};
        delete order[key];
        this.setState({order});
    }

    updateFishForm=(key,updatedFish)=>{
        console.log("kkkkk",this.state.fishes);
        const fishes={...this.state.fishes};
        fishes[key]=updatedFish;
        this.setState({fishes});
    }
    loadFishes=()=>{
        this.setState({
            fishes:sampleFishes
        });

    }
    AddOrder=(item)=>{
        const orders={...this.state.order};
        orders[item]=orders[item]+1||1;
        this.setState({order:orders});
        console.log(this.state);

    }
  render() {
      console.log(this.state);
    return (
        <div className="catch-of-the-day">
        <div className="menu">
       <Header tagline="vishnu"/>
      
      <ul className="fishes">
        {Object.keys(this.state.fishes).map(items=><Fishes key={items} load={this.state.fishes[items]}
        index={items} AddOrder={this.AddOrder}/>)}
      </ul>
      </div>
      <Order fishes={this.state.fishes} order={this.state.order} orderDelete={this.orderDelete}/>
      <Inventory changeState={this.changeState} loadFishes={this.loadFishes}
      fishes={this.state.fishes} updateFishForm={this.updateFishForm} deleteFish={this.deleteFish}/>

      </div>
    );
  }
}

export default App;