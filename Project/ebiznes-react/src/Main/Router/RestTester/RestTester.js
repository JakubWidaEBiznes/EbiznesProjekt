import React, { Component } from 'react';

export default class RestTester extends Component {
	constructor(props){
		super(props);
		this.state = {
			id:props.auth.user.id,
			targetUrl:"",
			message:'{ "data":"0" }',
			method:"GET",
			response:"",
			error:""
			}
		this.handleInputChange = this.handleInputChange.bind(this);
		}
  render() {
    return (
      <div>
				<p>REst tester</p>
				<p>{this.state.id}</p>
				<input type="text" name="targetUrl" placeholder="url" onChange={this.handleInputChange}/>
				<input type="text" name="message" placeholder="{count:0}" onChange={this.handleInputChange}/>
				<select name="method" onChange={this.handleInputChange}>
					<option value="GET">GET</option>
					<option value="POST">POST</option>
				</select>
				<button onClick={()=>{this.tryRest()}}>TryRest</button>
				{this.state.response && <p>{this.state.response}</p>}
				{this.state.error && <p>{this.state.error}</p>}
      </div>
    );
  }
handleInputChange(e){
	this.setState({[e.target.name]: e.target.value });
	}
tryRest(){
	/*
	let self = this;
	console.log("trying rest",
	self.state.method,
	self.state.targetUrl,
	JSON.parse(self.state.message));
	*/
	var self = this;
	if(this.state.method=="POST"){
		this.props.api.post(this.state.targetUrl,JSON.parse(self.state.message))
			.then((response)=>{this.onRestResponse(response)})
			.catch((err)=>{this.onRestError(err)})
		}
	else if(this.state.method=="GET"){
		this.props.api.get(this.state.targetUrl,JSON.parse(self.state.message))
			.then((response)=>{this.onRestResponse(response)})
			.catch((err)=>{this.onRestError(err)})
		}
	}

onRestResponse(data){
	console.log("onResponse:",data);
	this.setState({response:JSON.stringify(data)});
	}

onRestError(data){
	console.log("onError:",data);
	this.setState({error:JSON.stringify(data)});
	}
}

/*

fetch('https://facebook.github.io/react-native/movies.json')
	.then((response) => response.json())
	.then((responseJson) => {
		return responseJson.movies;
	})
	.catch((error) => {
		console.error(error);
	});
*/
