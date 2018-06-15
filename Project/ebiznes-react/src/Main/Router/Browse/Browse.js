import React, { Component } from 'react';
import BrowsePresentation from './BrowsePresentation'


export default class Browse extends Component {
	constructor(props){
		super(props);
		this.state = {
			categories:{},
			keywords:new Set([]),
			products:[],
			error:"",
			searchText:""
			}
		this.search()
		}

	setCategory = (category,doSelect)=>{
		if(category in this.state.categories){
			let newcats = this.state.categories;
			newcats[category]=doSelect;
			this.setState({categories:newcats})
			}
		}

	setKeyword = (keyword,doAdd) =>{
		if(!this.state.keywords.has(keyword) && doAdd){
			let newkeywords = this.state.keywords;
			newkeywords.add(keyword)
			this.setState({keywords:newkeywords})
			}
		else if(this.state.keywords.has(keyword) && !doAdd){
			let newkeywords = this.state.keywords;
			newkeywords.delete(keyword)
			this.setState({keywords:newkeywords})
			}
		}

	setSearchText=(text)=>{
		console.log("setting :",this.state.searchText,"to: ",text);
		this.setState({searchText:text})
		}

	search = ()=>{
		var self = this;
		let searchedCategories = Object.keys(this.state.categories).filter((k)=>{return this.state.categories[k]})
		let keywords = [...this.state.keywords] + self.state.searchText.split(" ").filter((e)=>{e.length});
		console.log("searching--",searchedCategories,keywords);
		this.props.api.products.getSearch(searchedCategories,keywords)
			.then(data=>{
				let newcats = {};
				for(let a of data.categories){
					newcats[a]=false;
					}
				for(let a of Object.keys(this.state.categories)){
					if(newcats[a] !== undefined){
						newcats[a] = this.state.categories[a]
						}
					}
				this.setState({products:data.products,keywords:new Set(data.keywords),categories:newcats,error:""})
			})
			.catch((err)=>{
				this.setState({products:[],keywords:new Set([]),categories:{},error:"cannot retrieve data"})
			})
		}

  render = ()=> {
		var self = this;

    return (
      <BrowsePresentation controller={{setKeyword:this.setKeyword,setCategory:this.setCategory,search:this.search,setSearchText:this.setSearchText}} data={this.state}/>
    );
  }
}
