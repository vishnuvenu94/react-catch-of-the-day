import React from "react";
import AddFish from "./addfish";
import FishEdit from "./fishEdit";
import Login from "./login";
import base,{fireBaseApp} from "../base";
import firebase from "firebase";
import PropTypes from "prop-types";

class Inventory extends React.Component {

  state = {
    uid: null,
    owner: null
  };


  static propTypes = {
    fishes: PropTypes.object,
    updateFishForm: PropTypes.func,
    deleteFish: PropTypes.func,
    loadFishes: PropTypes.func
  };

 
 

  
  authHandler= async authData=>{
    const store= await base.fetch(this.props.storeId,{context:this});
    

    if (!store.owner) {
      // save it as our own
      await base.post(`${this.props.storeId}/owner`, {
        data: authData.user.uid
      });
    }

    console.log(authData.user.uid,"userid");


    this.setState({
      uid: authData.user.uid,
      owner: store.owner || authData.user.uid
    });
  

  }

  

  authentication=(provider)=>{
    
    const authProvider = new firebase.auth[`${provider}AuthProvider`]();
    fireBaseApp
      .auth()
      .signInWithPopup(authProvider)
      .then(this.authHandler);
    
  }
  componentDidMount() {
    this.setState({uid:null});
    
    firebase.auth().onAuthStateChanged(user => {
      
      if (user) {
        console.log(user,"testttttt");
        this.authHandler({ user });
        console.log(this.state.owner,"jjj");
      }
    });
  }

  logout = async () => {
    console.log("Logging out!");
    await firebase.auth().signOut();
    this.setState({ uid: null });
  };

  render() {

    console.log(this.state.owner,":",this.state.uid,"ff");
    const logout = <button onClick={this.logout}>Log Out!</button>;

    // 1. Check if they are logged in
    if (!this.state.uid) {
      return <Login authentication={this.authentication} />;
    }

    // 2. check if they are not the owner of the store
    if (this.state.uid !== this.state.owner) {
      return (
        <div>
          <p>Sorry you are not the owner!</p>
          {logout}
        </div>
      );
    }
      //console.log(this.props.changeState,"inventory");
    return (
    
        <div className="inventory">
        <h2>Inventory!!!</h2>
        {logout}
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