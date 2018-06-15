import Products from './Products'
import User from './User'
export class Api {
constructor(){
	this.products = Products;
	this.user = User;
	this.baseURL = "http://localhost:9000"
	}

get=(url)=>{
	return fetch(this.baseURL+url,{method:"GET"})
		.then((response) => {
			if(response.ok){
				return response.json()
				}
			else
				return Promise.reject(response)
			})
	}
post = (url,message)=>{
	return fetch(this.baseURL+url,{method:"POST",body:JSON.stringify(message)})
		.then((response) => {
			if(response.ok){
				return response.json()
				}
			else
				return Promise.reject(response)
			})
	}
}

/*
fetch('https://facebook.github.io/react-native/movies.json')
	.then((response) => response.json())
	.then((responseJson) => {
		return responseJson.movies;
	})
	.catch((error) => {
		console.error(error);
	});
*/
