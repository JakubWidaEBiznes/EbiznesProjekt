import React,{ Component } from 'react';

import CartPresentation from './CartPresentation'

export default class Cart extends Component{
constructor(props){
	super(props)
	this.state={
		error:"",
		addressData:{city:"",zipcode:"",street:"",housenum:"",contactTelephone:""},
		isAddrValid:false,
		isAddrPanelOpen:false
		};
	}


buyCart =()=>{
	this.props.api.user.buyCart(this.props.auth.user.id)
		.then((whatevs)=>{this.props.update()})
		.catch((error)=>{this.setState({error:error})})
	}

removeFromCart=(productId)=>{
	this.props.api.user.removeFromCart(this.props.auth.user.id,productId)
		.then((whatevs)=>{this.props.update()})
		.catch((error)=>{this.setState({error:error})})
	}

setAddrData=(key,val,valid)=>{
	console.log("key:",key," val:",val,"valid:",valid);
	let newAddr=this.state.addressData;
	newAddr[key]=val;
	console.log("newaddr:",newAddr);
	let validity = Object.keys(this.state.addressData).every((a)=>this.state.addressData[a])
	validity = validity && valid;
	this.setState({addressData:newAddr,isAddrValid:validity});
	}

flickAddr=()=>{
	this.setState({isAddrPanelOpen:!this.state.isAddrPanelOpen})
	}

render(){

	let controller={removeFromCart:this.removeFromCart, buyCart:this.buyCart, setAddrData:this.setAddrData, flickAddr:this.flickAddr}
	let addrData={addressData:this.state.addressData, isAddrValid:this.state.isAddrValid, isAddrPanelOpen:this.state.isAddrPanelOpen}
	return(
	<CartPresentation data={this.props.data} controller={controller} addrData={addrData} />
	)}}
