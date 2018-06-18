import React,{ Component } from 'react';


export default function UserPresentation(props){
	return(
		<div className="container">

			<h3>User Panel</h3>
			{props.data.error && <h4>{props.data.error}</h4>}
			{!props.auth.user.isLogged && <h4>You are not logged in.</h4>}

			<ul className="nav nav-tabs">
				{props.data.tabs && Object.keys(props.data.tabs).map((k)=>{return(
			  	<li key={k} className="nav-item">
			    	<span  className={"nav-link " + (props.data.tab==k ? 'active' : '')}  onClick={()=>{props.setTab(k)}}>{k}</span>
			  	</li>
					)})}
			</ul>
			<div>
				<br/>
				{props.data.tab && props.data.tabs[props.data.tab]}
			</div>

		</div>
	)}
