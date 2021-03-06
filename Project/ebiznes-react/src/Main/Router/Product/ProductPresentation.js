import React, { Component } from 'react';

export default function ProductPresentation(props){

const errDisp=(error)=>{return(<h3 className="text-warning">ERROR:{error}</h3>)}

const prodDisp=(product)=>{return(
	<div>
	<h3 >{product.name}</h3>
	<p><b>Description:<br/></b>{product.description}</p>
	<p>Price: <b>{product.price}$</b></p>
	{product.keywords.map((k)=>{return<span className="badge badge-primary" key={k}>{k}</span>})}
	</div>
	)}

const userDisp=(user)=>{
	let dc = null
	for(let c of user.cart.products){
		if(c.id == props.data.product.id)
			{dc=c}
		}
	return(
	<div>
	{dc && <p>You have this product in your cart</p>}
	<button className="btn btn-success" disabled={!(!dc)} onClick={props.controller.addToCart}>add to cart</button>
	</div>
	)}

const adminDisp=()=>{return(
	<button className="btn btn-danger" onClick={props.controller.removeProduct}>remove</button>
	)}

return(
<div className="container">
	{props.data.error && errDisp(props.data.error)}
	{props.data.product && !props.data.error && prodDisp(props.data.product)}
	{props.data.product && props.data.user && !props.data.error && userDisp(props.data.user)}
	{props.auth.user.isLogged && props.auth.user.isAdmin && props.data.product && adminDisp()}
</div>
)}
