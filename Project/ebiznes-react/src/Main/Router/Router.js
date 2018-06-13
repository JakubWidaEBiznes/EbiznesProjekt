import React,{ Component } from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import RestTester from './RestTester'
import Browse from './Browse'

export default class Router extends Component {
	constructor(props)
		{
		super(props);
		}

	render(){
		var self = this;
		const RestTesterComponent = (props)=>{return(<RestTester api={self.props.api} auth={self.props.auth}/>)}
		const BrowseComponent = (props)=>{return(<Browse api={self.props.api} auth={self.props.auth}/>)}
		return (
			<BrowserRouter>
				<div>
					<p>Router test</p>
					<Route exact path="/rest" component={RestTesterComponent} />
					<Route exact path="/" component={BrowseComponent} />
				</div>
			</BrowserRouter>
			)
		}
}
