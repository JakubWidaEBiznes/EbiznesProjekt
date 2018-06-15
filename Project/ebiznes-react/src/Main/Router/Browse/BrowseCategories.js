import React, { Component } from 'react';

export default function BrowseCategories(props){

const Keyword = (pp)=>{return(
	<span className="badge btn-primary" onClick={()=>{const kw=pp.keyword; props.removeKeyword(kw)}}>
		{pp.keyword}
	</span>
	)}

const Category = (pp)=>{return(
	<li>
	<label>{pp.name}</label>
	<input type="checkbox" onChange={(event)=>{const kw=pp.name; props.setCategory(kw,event.target.checked)}} defaultChecked={pp.isChecked}></input>
	</li>
	)}

	return(
	<div>
		<input type="text" value={props.searchText} onChange={(event)=>{props.setSearchText(event.target.value)}}></input>
		<button className="btn" onClick={()=>{props.search()}}>search</button>
		{Object.keys(props.categories).map((c)=>{return<p>{c.name} </p>})}
	<ul>
		{Object.keys(props.categories).map((c)=>{return<Category name={c} isChecked={props.categories[c]}/>})}
	</ul>
		{props.keywords.map((k)=>{return (<Keyword keyword={k}/>)})}

	</div>
		)
}
