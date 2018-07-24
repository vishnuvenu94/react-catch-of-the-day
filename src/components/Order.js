import React from "react";
import {formatPrice} from "../helpers"

class Order extends React.Component {
    makeOrderList=(item)=>{
        const fish=this.props.fishes[item];
        const count=this.props.order[item];
        if(!fish){
            return null;
        }
        const isAvailable=fish.status==="available";
        if(!isAvailable){
            return (<li>
                sorry {fish ? fish.name : "fish"} no longer available
                </li>);
        }
        return (  
            <li key={item}>
            {count} lbs {fish.name}
            {formatPrice(count * fish.price)}
          </li>
        );
    };
  render() {
      const ordered=Object.keys(this.props.order);

      const total=ordered.reduce((prevAmt,item)=>{
        let fish=this.props.fishes[item];
        let count=this.props.order[item];
        
        let available = fish && fish.status==="available";
        if(available){
            return prevAmt + (fish.price*count);
        }
        return prevAmt;
        

      },0);

    return ( <div className="order-wrap">
    <h2>Order</h2>
    <ul className="order">{ordered.map(this.makeOrderList)}</ul>
    <div className="total">
      Total:
      <strong>{formatPrice(total)}</strong>
    </div>
  </div>
);
  }
}

export default Order;