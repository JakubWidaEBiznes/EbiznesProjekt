import {Api} from './Api'

const sampleProduct1 = {
	id:1,
	name:"tomato",
	description:"a red vegetable",
	adddate:"01:10:1994",
	price:0.5,
	keywords:["red","vegetable"],
	categories:["vegetable"]
	}

const sampleProduct2 = {
	id:2,
	name:"sandwich",
	description:"bread with ham",
	adddate:"01:12:1995",
	price:2.5,
	keywords:["sammich","butter","ham"],
	categories:["breads","meats"]
	}

const sampleAddress1 = {
	city:"Kraków",
	zipcode:31888,
	street:"Uliczna",
	housenum:"15/6",
	contactTelephone:"+48125641323"
	}

var sampleUser1 = {
	id:0,
	name:"Joe",
	joindate:"01:10:1985",
	isAdmin:true,
	cart:sampleCart1,
	address:sampleAddress1,
	orders:[sampleOrder1,sampleOrder2]
	}

const sampleCart1 = {
	user:sampleUser1,
	products:[sampleProduct1,sampleProduct2]
	}

const sampleOrder1 = {
	user:sampleUser1,
	products:[sampleProduct1,sampleProduct2],
	state:"PENDING",
	address:sampleAddress1
	}

const sampleOrder2 = {
	user:sampleUser1,
	products:[sampleProduct1],
	state:"RESOLVED",
	address:sampleAddress1
	}

sampleUser1.cart = sampleCart1;
sampleUser1.orders = [sampleOrder1,sampleOrder2];

export default class User{

static getUser(userId){
	return new Promise((resolve)=>{
		setTimeout(resolve(sampleUser1), 1000);
    });
	}

static getOrders(userId){
	return new Promise((resolve)=>{
		setTimeout(resolve([sampleOrder1,sampleOrder2]), 1000);
    });
	}

static addToCart(userId,productId){
	return new Promise((resolve)=>{
		setTimeout(resolve("success"), 1000);
    });
	}

static removeFromCart(userId,productId){
	return new Promise((resolve)=>{
		console.log("REMOVING FROM CART:",userId,productId);
		setTimeout(resolve("success"), 1000);
    });
	}

static buyCart(userId,address){
	return new Promise((resolve)=>{
		console.log("BUYING CART",userId);
		setTimeout(resolve("success"), 1000);
    });
	}

static resolveOrder(orderId,decision){
	return new Promise((resolve)=>{
		setTimeout(resolve("success"), 1000);
    });
	}

static makeAdmin(userId){
	return new Promise((resolve)=>{
		setTimeout(resolve("success"), 1000);
    });
}

}
