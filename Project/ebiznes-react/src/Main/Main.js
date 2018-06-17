import React,{ Component } from 'react';


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

			<Router auth={this.state.auth} api={this.state.api}/>
			</div>
			)
		}


	}
