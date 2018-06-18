import React,{ Component } from 'react';

export default class MakeAdmin extends Component{
constructor(props){
	super(props)
	this.state={success:"",error:"",userId:"",isValid:false}
	}

makeAdmin=()=>{
	if(this.props.auth.user.isLogged && this.props.auth.user.isAdmin && this.state.userId){
		this.props.api.user.makeAdmin(this.state.userId)
		}
	}

statechange=(event)=>{

if(!event.target.value){
	this.setState({isValid:false})
	}
else {
	this.setState({isValid:true})
	}
this.setState({userId:event.target.value});
}

render(){return(
	<div>
		{this.state.error && <h4 className="text-danger">{this.state.error}</h4>}
		{this.state.success && <h4 className="text-success">{this.state.success}</h4>}
		<h4>Insert user id</h4>
		<input type="number" onChange={this.statechange} value={this.state.userId}></input>
		<button className="btn btn-primary" disabled={!this.state.isValid} onClick={this.makeAdmin}>Make user admin</button>
	</div>
	)}
}
