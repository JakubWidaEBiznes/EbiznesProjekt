import React,{ Component } from 'react';

import UserPresentation from './UserPresentation';
import AddProduct from './AddProduct';
import MakeAdmin from './MakeAdmin';
import Cart from './Cart';
import Orders from './Orders';
import AdminOrders from './AdminOrders';

export default class User extends Component{
constructor(props){
	super(props)
	this.state={
		tab:"",
		error:"",
		tabs:{},
		user:{}
		}
	this.update();
	}

addUserTabs=()=>{
	let newTabs = this.state.tabs;
	newTabs["Orders"] = <Orders update={this.update} data={this.state} api={this.props.api} auth={this.props.auth}/>;
	newTabs["Cart"] = <Cart update={this.update} data={this.state} api={this.props.api} auth={this.props.auth}/>;
	this.setState({tabs:newTabs})
	}

removeUserTabs=()=>{
	let newTabs = this.state.tabs;
	delete newTabs["Orders"];
	delete newTabs["Cart"];
	this.setState({tabs:newTabs})
	}

addAdminTabs=()=>{
	let newTabs = this.state.tabs;
	newTabs["Add Product"] = <AddProduct update={this.update} data={this.state} api={this.props.api} auth={this.props.auth}/>;
	newTabs["Admin Orders"] = <AdminOrders update={this.update} data={this.state} api={this.props.api} auth={this.props.auth}/>;
	newTabs["Make Admin"] = <MakeAdmin update={this.update} data={this.state} api={this.props.api} auth={this.props.auth}/>;
	this.setState({tabs:newTabs})
	}

removeAdminTabs=()=>{
	let newTabs = this.state.tabs;
	delete newTabs["Add Product"];
	delete newTabs["Admin Orders"];
	delete newTabs["Make Admin"];
	this.setState({tabs:newTabs})
	}

update=()=>{
	if(this.props.auth.user.isLogged){
		this.props.api.user.getUser(this.props.auth.user.id)
			.then((user)=>{this.setState({user:user})})
			.catch((error)=>{this.setState({error:error})})
		}

	}


componentDidUpdate=()=>{
	if(this.props.auth.user.isLogged && !this.state.tabs["Orders"]){
		this.addUserTabs()
		}
	else if(!this.props.auth.user.isLogged && this.state.tabs["Orders"]){
		this.removeUserTabs()
		}
	if(this.props.auth.user.isLogged && this.props.auth.user.isAdmin && !this.state.tabs["Add Product"]){
		this.addAdminTabs()
		}
	else if((!this.props.auth.user.isLogged || !this.props.auth.user.isAdmin) && this.state.tabs["Add Product"]){
		this.removeAdminTabs();
		}
	}

setTab=(tab)=>{
	this.setState({tab:tab})
	}
render(){return(
	<UserPresentation data={this.state} update={this.update} setTab={this.setTab}  api={this.props.api} auth={this.props.auth} />
	)}
}
