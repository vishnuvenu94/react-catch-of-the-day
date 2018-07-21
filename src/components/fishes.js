import React from "react";
import { formatPrice } from "../helpers";

class Fishes extends React.Component {
  render() {
    const { image, name, price, desc, status } = this.props.load;
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">
          {name}
          <span className="price">{formatPrice(price)}</span>
        </h3>
        <p>{desc}</p>
        <button>add to cart</button>
      </li>
    );
  }
}

export default Fishes;