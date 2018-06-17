import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

export default class Login extends Component{
	constructor(props){
		super(props);
		}
	render(){
	return (
		<nav className="navbar navbar-expand-lg navbar-light bg-light">
			<Link className="navbar-brand" to="/">Browse</Link>
			{this.props.auth.user.isLogged && <button className="btn" onClick={this.props.auth.testLogout}>Logout</button>}
			{this.props.auth.user.isLogged && <Link to="/user">Profile</Link>}
			{!this.props.auth.user.isLogged && <button className="btn" onClick={this.props.auth.testLoginUser}>login user</button>}
			{!this.props.auth.user.isLogged && <button className="btn" onClick={this.props.auth.testLoginAdmin}>login admin</button>}
			{this.props.auth.user.isLogged && !this.props.auth.user.isAdmin &&<span>Logged in as: user</span>}
			{this.props.auth.user.isLogged && this.props.auth.user.isAdmin &&<span>Logged in as: admin</span>}
		</nav>
		)
	}
}
