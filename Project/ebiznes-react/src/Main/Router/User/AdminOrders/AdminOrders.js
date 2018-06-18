import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

export default class AdminOrders extends Component{
constructor(props){
	super(props)
	this.state={
		orders:[],
		error:null
		}
	this.updateOrders();
	}

sendOrder=(id)=>{
	this.props.api.user.resolveOrder(id,"SEND")
		.then((res)=>{this.updateOrders();this.setState({error:null})})
		.catch((err)=>{this.setState({error:err})})
	}

cancelOrder=(id)=>{
	this.props.api.user.resolveOrder(id,"CANCEL")
		.then((res)=>{this.updateOrders();this.setState({error:null})})
		.catch((err)=>{this.setState({error:err})})
	}

updateOrders=()=>{
	this.props.api.user.getAllOrders(this.props.auth.user.id)
		.then((res)=>{this.setState({orders:res,error:null})})
		.catch((err)=>{this.setState({error:err})})
	}


render=()=>{

	const DrawOrder=(pps)=>{return(
		<tr>
			<td>{pps.order.date}</td>
			<td>
				{pps.order.products.map((p)=>{return(<Link key={"link"+p.id} to={"/product/"+p.id} >{p.name} </Link>)})}
			</td>
			<td>
				<b>{pps.order.state}</b>
			</td>
			<td>
				{pps.order.state=="PENDING" &&
				<div>
					<button className="btn btn-success" onClick={()=>{this.sendOrder(pps.order.id)}}>SEND</button>
					<button className="btn btn-warning" onClick={()=>{this.cancelOrder(pps.order.id)}}>CANCEL</button>
				</div>
					}
			</td>
		</tr>
		)}

	return(
		<div>
		{this.state.error && <h4 className="text-danger">this.state.error</h4>}
		{this.state.orders && <table className="table">
			<thead>
				<tr>
					<th>Order date</th>
					<th>Products</th>
					<th>Order state</th>
					<th>Order actions</th>
				</tr>
			</thead>
			<tbody>
			{this.props.data.user && this.props.auth.user.isLogged && this.state.orders && this.state.orders.map((o)=>{return(<DrawOrder key={"order"+o.id} order={o}/>)})}
			</tbody>
		</table>}
		</div>
	)}
}
