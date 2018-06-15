import React, { Component } from 'react';

export default function BrowseProduct(props){

const keyword = (keyword)=>{return(
	<span className="badge btn-primary" key={keyword} onClick={()=>{const kw=keyword; props.addKeyword(kw)}}>
		{keyword}
	</span>
	)}

	return(
		props.products.map((product)=>{return(
			<div key={product.id}>
			<h2>{product.name}</h2>
			<p>{product.price}</p>
			<p>{product.stock}</p>
			{product.keywords.map((k)=>{return(
				keyword(k)
			)})}
			</div>
		)})
	)
}
