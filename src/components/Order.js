import React from "react";
import {formatPrice} from "../helpers";
import {TransitionGroup,CSSTransition} from "react-transition-group";
import PropTypes from "prop-types";

class Order extends React.Component {
  static propTypes = {
    fishes: PropTypes.object,
    order: PropTypes.object,
    OrderDelete: PropTypes.func
  };
    makeOrderList=(item)=>{
        const fish=this.props.fishes[item];
        const count=this.props.order[item];
        const transitionValues={
          classNames:"order",
          key:item,
          timeout:{enter:400,exit:400}
        }
        if(!fish){
            return null;
        }
        const isAvailable=fish.status==="available";
        if(!isAvailable){
            return (
              <CSSTransition {...transitionValues} >
            <li>
                sorry {fish ? fish.name : "fish"} no longer available
                </li>
                </CSSTransition>
                );
        }
        return (  
          <CSSTransition {...transitionValues} >
            <li key={item} >
            <span>
              <TransitionGroup component="span" className="count">
              <CSSTransition classNames="count" key={count} timeOut={{enter:400,exit:400}}>
               
            <span>{count}</span> 
            </CSSTransition>
            </TransitionGroup>
            lbs {fish.name}
            {formatPrice(count * fish.price)}
            <button onClick={()=>this.props.orderDelete(item)}>x</button>
            </span>
          </li>
          </CSSTransition>
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
    <TransitionGroup component="ul" className="order">{ordered.map(this.makeOrderList)}</TransitionGroup>
    <div className="total">
      Total:
      <strong>{formatPrice(total)}</strong>
    </div>
  </div>
);
  }
}

export default Order;