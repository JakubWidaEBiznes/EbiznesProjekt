import React, { Component } from 'react';
import {Link} from 'react-router-dom';

export default function BrowseProduct(props){

const keyword = (keyword)=>{return(
	<span className="badge btn-primary" key={keyword} onClick={()=>{const kw=keyword; props.addKeyword(kw)}}>
		{keyword}
	</span>
	)}

	return(
		props.products.map((product)=>{return(
			<div key={product.id} className="m-1 w-25 d-inline-block">
			<div className="card  " >
				<h2><Link to={"/product/"+product.id}>{product.name}</Link></h2>
				<p>Price: <b>{product.price}</b>$</p>
				<p>{product.description.substring(0,128)}</p>
				<div>
				{product.keywords.map((k)=>{return(
					keyword(k)
				)})}
				</div>
			</div>
			</div>
		)})
	)
}
