import React from "react";
import { getFunName } from "../helpers";
import PropTypes from "prop-types";

class StorePick extends React.Component {
  static propTypes = {
    history: PropTypes.object
  };

  inputed = React.createRef();
  submitFunc=event=>{
    event.preventDefault();
    
    let storeName=this.inputed.value.value;
    console.log(storeName);
    this.props.history.push(`/store/${storeName}`);
  
  }
  render() {
    return (
      <form className="store-selector"  onSubmit={this.submitFunc}>
        <h2>Please Enter A Store</h2>
        <input type="text" required placeholder="Store Name" ref={this.inputed} defaultValue={getFunName()}/>
        <button type="submit">Visit Store →</button>
      </form>
    );
  }
}

export default StorePick;
