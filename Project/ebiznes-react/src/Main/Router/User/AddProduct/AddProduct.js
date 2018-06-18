import React,{ Component } from 'react';

export default class AddProduct extends Component{
constructor(props){
	super(props)
	this.state={
		name:"",
		categories:new Set([]),
		keywords:new Set([]),
		price:"",
		description:"",
		image:"",
		error:"",
		success:"",
		isValid:true,
		addedKeyword:"",
		addedCategory:""
		}
	}

addProduct=()=>{
	let date = new Date();
	const product = {
		name:this.state.name,
		keywords:[...this.state.keywords],
		categories:[...this.state.categories],
		price:this.state.price,
		description:this.state.description,
		image:this.state.image,
		date:(date.getDate() +"-"+(date.getMonth() + 1)+"-"+date.getFullYear())
		}
	this.props.api.products.addProduct(product)
		.then(()=>{this.setState({success:"successfully added product"})})
		.catch((error)=>{this.setState({error:error})})
	}

onInputChange=(event)=>{
	const name = event.target.name
	const value = event.target.value
	let newstate=this.state;
	newstate[name]=value;

	this.setState(newstate);
	}

addKeyword=()=>{
	if(this.state.addedKeyword)
		{
		let newstate = this.state;
		console.log(newstate.keywords)
		newstate.keywords.add(this.state.addedKeyword);
		newstate.addedKeyword="";
		this.setState(newstate)
		}
	}

removeKeyword=(keyword)=>{
	let newstate = this.state;
	newstate.keywords.delete(keyword);
	this.setState(newstate)
	}

addCategory=()=>{
	if(this.state.addedCategory)
		{
		let newstate = this.state;
		newstate.categories.add(this.state.addedCategory);
		newstate.addedCategory="";
		this.setState(newstate)
		}
	}

removeCategory=(category)=>{
	let newstate = this.state;
	console.log(category)
	newstate.categories.delete(category);
	this.setState(newstate)
	}


render(){return(
	<form ref={form => this.formAddProduct = form}>
		<h4></h4>
		<div className="form-group">
			<label htmlFor={"name"}>name</label>
			<input className="form-control" type="text" name="name" id="name" minLength={3} maxLength={128} value={this.state.name} onChange={this.onInputChange}></input>
		</div>
		<div className="form-group">
			<label htmlFor={"price"}>price</label>
			<input className="form-control" type="text" name="price" id="price" minLength={1} pattern="[0-9]+(\.[0-9]+)?" value={this.state.price} onChange={this.onInputChange}></input>
		</div>
		<div className="form-group">
			<label htmlFor={"description"}>description</label>
			<input className="form-control" type="text" name="description" id="description" minLength={16} maxLength={1024} value={this.state.description} onChange={this.onInputChange}></input>
		</div>
		<div className="form-group">
			<label htmlFor={"keywords"}>keywords</label>
			{[...this.state.keywords].map((k)=>{return(<span className="badge badge-primary" key={"keyw"+k} onClick={()=>{this.removeKeyword(k)}} >{k}</span>)})}
			<input className="form-control" type="text" name="addedKeyword" id="keywords" value={this.state.addedKeyword} onChange={this.onInputChange}></input>
			<button type="button" className="btn btn-primary" onClick={this.addKeyword}>Add Keyword</button>
		</div>
		<div className="form-group">
			<label htmlFor={"categories"}>categories </label>
			{[...this.state.categories].map((k)=>{return(<span className="badge badge-primary" key={"cat"+k} onClick={()=>{this.removeCategory(k)}}>{k}</span>)})}
			<input className="form-control " type="text" name="addedCategory" id="categories" value={this.state.addedCategory} onChange={this.onInputChange}></input>
			<button type="button" className="btn btn-primary " onClick={this.addCategory}>Add Category</button>
		</div>
		<button disabled={!this.state.isValid} className="btn btn-primary w-100" type="button" onClick={this.addProduct}>Add product</button>
	</form>

	)}
}
