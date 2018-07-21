import React from "react";
class AddFish extends React.Component{
  nameReference= React.createRef();
  priceReference = React.createRef();
  statusReference = React.createRef();
  descReference = React.createRef();
  imageReference = React.createRef();
    makeFish=(event)=>{
        event.preventDefault();
        const fish={
            name:this.nameReference.value.value,
            price:parseFloat(this.priceReference.value.value),
            status:this.statusReference.value.value,
            description:this.descReference.value.value,
            image:this.imageReference.value.value,

        }
        //console.log(this.props);
        this.props.changeState(fish);
        event.currentTarget.reset();
        


    }
    render(){
    
    return (
        <form className="fish-edit" onSubmit={this.makeFish}>
        <input name="name" ref={this.nameReference} type="text" placeholder="Name" />
        <input
          name="price"
          ref={this.priceReference}
          type="text"
          placeholder="Price"
        />
        <select name="status" ref={this.statusReference}>
          <option value="available">Fresh!</option>
          <option value="unavailable">Sold Out!</option>
        </select>

        <textarea name="desc" ref={this.descReference} placeholder="Description" />
        <input
          name="image"
          ref={this.imageReference}
          type="text"
          placeholder="Image"
        />
        <button type="submit">+ Add Fish</button>
      </form>
    );
    }
}
export default AddFish