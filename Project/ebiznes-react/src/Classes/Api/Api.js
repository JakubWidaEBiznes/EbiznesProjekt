import Products from './Products'
export class Api {
constructor(){
	this.products = Products;
	}

get(url){
	return fetch(url,{method:"GET"})
		.then((response) => {
			if(response.ok){
				return response.json()
				}
			else
				return Promise.reject(response)
			})
	}
post(url,message){
	return fetch(url,{method:"POST",body:JSON.stringify(message)})
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
