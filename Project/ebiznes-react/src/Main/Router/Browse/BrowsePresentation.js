import React, { Component } from 'react';

import BrowseProduct from './BrowseProduct'
import BrowseCategories from './BrowseCategories'

export default class BrowsePresentation extends Component{
constructor(props)
	{
	super(props)
	}
render(){
	return(
		<div className="container row">
			<div className="col-sm-3">

			<BrowseCategories searchText={this.props.controller.searchText} categories={this.props.data.categories} keywords={[...this.props.data.keywords]} removeKeyword={(k)=>{this.props.controller.setKeyword(k,false)}} setCategory={this.props.controller.setCategory} search={this.props.controller.search} setSearchText={this.props.controller.setSearchText}/>
			</div>
			<div className="col-sm-9">

			<BrowseProduct products={this.props.data.products} addKeyword={(keyword)=>{this.props.controller.setKeyword(keyword,true)}}/>
			</div>
		</div>
	)
}
}
