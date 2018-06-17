import React,{ Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RestTester from './RestTester'
import Browse from './Browse'
import Product from './Product'
import Login from '../Login'
import User from './User'

export default class Router extends Component {
	constructor(props)
		{
		super(props);
		}

	render(){
		var self = this;
		const RestTesterComponent = (props)=>{return(<RestTester api={self.props.api} auth={self.props.auth}/>)}
		const BrowseComponent = (props)=>{return(<Browse api={self.props.api} auth={self.props.auth}/>)}
		const ProductComponent = (props)=>{return(<Product params={props.match.params} api={self.props.api} auth={self.props.auth}/>)}
		const UserComponent = (props)=>{return(<User params={props.match.params} api={self.props.api} auth={self.props.auth}/>)}
		return (
			<BrowserRouter>
				<div>
				<Login auth={self.props.auth}/>
					<div className="container-fluid">
						<Route exact path="/rest" component={RestTesterComponent}/>
						<Route exact path="/" component={BrowseComponent}/>
						<Route path="/product/:id" component={ProductComponent}/>
						<Route path="/user" component={UserComponent}/>
					</div>
				</div>
			</BrowserRouter>
			)
		}
}
