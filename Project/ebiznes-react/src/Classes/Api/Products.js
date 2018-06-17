import {Api} from './Api'


const sampleProduct1 = {
	id:0,
	name:"tomato",
	description:"a red vegetable",
	adddate:"01:10:1994",
	price:0.5,
	picture:"pic1.png",
	keywords:["red","vegetable"],
	categories:["vegetable"]
	}

const sampleProduct2 = {
	id:1,
	name:"sandwich",
	description:"bread with ham",
	adddate:"01:12:1995",
	price:2.5,
	picture:"pic2.png",
	keywords:["sammich","butter","ham"],
	categories:["breads","meats"]
	}

const sampleProduct3 = {
	id:2,
	name:"ciabatta",
	description:"italian baguette",
	adddate:"06:12:1998",
	price:4,
	picture:"pic3.png",
	keywords:["italian","baguette"],
	categories:["breads"]
	}


const sampleSearchResult = {
	categories:["vegetables","meats","breads"],
	keywords:["italian"],
	products:[sampleProduct1,sampleProduct2,sampleProduct3]
	}

export default class Products{

	static getSearch(categories,keywords){
		return new Promise((resolve)=>{
				console.log("searching",categories,keywords)
        setTimeout(resolve(sampleSearchResult), 1000);
    	});
		}

	static getProduct(id){
		return new Promise((resolve)=>{
        setTimeout(resolve(sampleProduct1), 1000);
    	});
		}

	static addProduct(product){
		return new Promise((resolve)=>{
        setTimeout(resolve("success"), 1000);
    	});
		}

	static removeProduct(id){
		return new Promise((resolve)=>{
        setTimeout(resolve("success"), 1000);
    	});
		}

	}
