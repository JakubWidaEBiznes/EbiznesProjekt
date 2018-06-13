import React,{ Component } from 'react';

import Login from './Login'
import Router from './Router'

import {Api, Auth} from '.././Classes'

export default class Main extends Component {
	constructor(){
		super();
		var self = this;
		this.state={
		auth:new Auth(self),
		api:new Api()
		}
	}

	render(){
		return (
			<div>
			<p>I am the main class! I am fierce!</p>
			<Login auth={this.state.auth}/>
			<Router auth={this.state.auth} api={this.state.api}/>
			</div>
			)
		}


	}
