import React from "react";
import { formatPrice } from "../helpers";

class Fishes extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.load;
    const isAvailable=status==="available";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button disabled={!isAvailable} onClick={()=>this.props.AddOrder(this.props.index)}>{status==="available"?"Add To Cart":"Sold Out"}</button>
      </li>
    );
  }
}

export default Fishes;