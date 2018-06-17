import React, { Component } from 'react';

import ProductPresentation from './ProductPresentation'

export default class Product extends Component {
constructor(props){
	super(props)
	this.state={
		product:null,
		user:null,
		error:""
		};
	this.getProduct();
	this.getUser();
	}

getProduct =()=>{
	this.props.api.products.getProduct(this.props.params.id)
		.then((product)=>{this.setState({product:product})})
		.catch((error)=>{this.setState({error:JSON.stringify(error)})})
	}

getUser =()=>{
	if(this.props.auth.user.isLogged){
		this.props.api.user.getUser(this.props.auth.user.id)
			.then((user)=>{ console.log("user",user); this.setState({user:user})})
			.catch((error)=>{this.setState({error:JSON.stringify(error)})})
		}
	}
addToCart =()=>{
	if(this.props.auth.user.logged && this.state.product){
		this.props.api.user.cart(this.props.auth.user.id,this.props.params.id,this.state.cartNum)
			.then((user)=>{this.getUser(); this.getProduct()})
			.catch((error)=>{this.setState({error:JSON.stringify(error)})})
		}
	}
removeProduct =()=>{
	if(this.props.auth.user.logged && this.props.auth.user.isAdmin && this.state.product){
		this.props.api.product.removeProduct(this.state.product.id)
			.then((user)=>{this.getUser(); this.getProduct();})
			.catch((error)=>{this.setState({error:JSON.stringify(error)})})
		}
	}

render(){
	let controller = {addToCart:this.addToCart,incCart:this.incCart,decCart:this.decCart,removeProduct:this.removeProduct}
	return(
			<ProductPresentation data={this.state} controller={controller} in/>
		)
	}

}
