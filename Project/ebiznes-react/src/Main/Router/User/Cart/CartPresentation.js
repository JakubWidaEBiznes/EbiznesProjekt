import React,{ Component } from 'react';
import {Link} from 'react-router-dom';
import Addr from './Addr'

export default class CartPresentation extends Component {
constructor(props){
	super(props)
	}

cutstring=(str)=>{
		if(str.length < 128){
			return str;
			}
		else
			{
			return str.substr(0,125)+"..."
			}
		}


/*
const Addr=()=>{return(
		<form key="addressInputForm" className="row">
			<div className="col-sm-3"></div>
			<div className="col-sm-6">

				<div className="row">
					<div className="col-sm-3 form-group">
						<label htmlFor="zipcode">Zipcode</label>
						<input className="form-control" name="zipcode" id="zipcode" type="text" pattern="[0-9]{5}" onChange={(event)=>{this.props.controller.setAddrData(event.target.name,event.target.value)}} value={this.props.addrData.addressData.zipcode}/>
					</div>
					<div className="col-sm-9 form-group">
						<label htmlFor="city">City</label>
						<input className="form-control" name="city" id="city" type="text" minLength={3} onChange={(event)=>{this.props.controller.setAddrData(event.target.name,event.target.value)}} value={this.props.addrData.addressData.city}/>
					</div>

				</div>

				<div className="row">
					<div className="col-sm-8 form-group">
						<label htmlFor="street">Street</label>
						<input className="form-control" name="street" id="street" minLength={3} type="text" onChange={(event)=>{this.props.controller.setAddrData(event.target.name,event.target.value)}} value={this.props.addrData.addressData.street}/>
					</div>
					<div className="col-sm-4 form-group">
						<label htmlFor="housenum">Address</label>
						<input className="form-control" name="housenum" id="housenum" type="text" minLength={1} onChange={(event)=>{this.props.controller.setAddrData(event.target.name,event.target.value)}} value={this.props.addrData.addressData.housenum}/>
					</div>
				</div>


				<div className="form-group">
					<label htmlFor="contractTelephone">Contact telephone</label>
					<input className="form-control" name="contractTelephone" id="contractTelephone" type="text" pattern="(\+[0-9]{2})?[0-9]{9}" onChange={(event)=>{this.props.controller.setAddrData(event.target.name,event.target.value)}} value={this.props.addrData.addressData.contractTelephone}/>
				</div>
				<div className="form-group">
				</div>
				<div className="form-group">
					<button  type="submit" onSubmit={this.props.controller.buyCart} className="btn btn-success">place order</button>
				</div>
			</div>
			<div className="col-sm-2"></div>
		</form>
		)}
*/
	render(){

	const CartItem =(pps)=>{return(
			<tr>
				<td><b><Link to={"/product/"+pps.product.id} >{pps.product.name}</Link></b></td>
				<td>{this.cutstring(pps.product.description)}</td>
				<td>{pps.product.price}</td>
				<td><button onClick={()=>{this.props.controller.removeFromCart(pps.product.id)}} className="btn btn-warning">remove</button></td>
			</tr>
		)}
	return(
		<div key="CartPresentation">
			<p>Cart</p>
			{this.props.data.user.cart && <div>
				<table className="table">
				<thead>
					<tr>
						<th scope="col">Product</th>
						<th scope="col">Description</th>
						<th scope="col">Price</th>
						<th scope="col"> </th>
					</tr>
				</thead>
				<tbody>
					{this.props.data.user.cart.products.map((p)=>{return(<CartItem key={p.id} product={p}/>)})}
					<tr>
						<td></td>
						<td></td>
						<td><b>Total: {this.props.data.user.cart.products.reduce((a,b)=>{return({price:(a.price+b.price)})},{price:0.0}).price}</b></td>
						<td><button onClick={this.props.controller.flickAddr} className="btn btn-success">buy</button></td>
					</tr>
				</tbody>
				</table>
			{this.props.addrData.isAddrPanelOpen && <Addr isAddrValid={this.props.isAddrValid} addrData={this.props.addrData} controller={this.props.controller}/>}
				</div>
			}
			{!this.props.data.user.cart && <h4>Your cart is empty</h4>}
		</div>
	)}
}
