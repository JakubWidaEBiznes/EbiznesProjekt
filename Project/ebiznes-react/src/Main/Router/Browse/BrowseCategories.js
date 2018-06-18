import React, { Component } from 'react';

export default function BrowseCategories(props){

const Keyword = (pp)=>{return(
	<span className="badge btn-primary" onClick={()=>{const kw=pp.keyword; props.removeKeyword(kw)}}>
		{pp.keyword}
	</span>
	)}

const Category = (pp)=>{return(
	<li className="list-group-item d-flex justify-content-between align-items-center">
	<label>{pp.name}</label>
	<input type="checkbox" className="form-controll" onChange={(event)=>{const kw=pp.name; props.setCategory(kw,event.target.checked)}} defaultChecked={pp.isChecked}></input>
	</li>
	)}

	return(
	<div className="form-group">
		<input type="text" className="form-controll w-100" value={props.searchText} onChange={(event)=>{props.setSearchText(event.target.value)}}></input>
		<button className="btn w-100" onClick={()=>{props.search()}}>search</button>
	<ul className="list-group">
		{Object.keys(props.categories).map((c)=>{return<Category key={"catt"+c} name={c} isChecked={props.categories[c]}/>})}
	</ul>
		{props.keywords.map((k)=>{return (<Keyword key={"kw"+k}keyword={k}/>)})}

	</div>
		)
}
