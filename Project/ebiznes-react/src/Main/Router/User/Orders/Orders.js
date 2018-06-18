import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

export default class Orders extends Component{
constructor(props){
	super(props)
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
		</tr>
		)}

	return(
		<table className="table">
			<thead>
				<tr>
					<th>Order date</th>
					<th>Products</th>
					<th>Order state</th>

				</tr>
			</thead>
			<tbody>
			{this.props.data.user && this.props.auth.user.isLogged && this.props.data.user.orders.map((o)=>{return(<DrawOrder key={"order"+o.id} order={o}/>)})}
			</tbody>
		</table>
	)}
}
