export class Api {
	constructor(){}

get(url){
	return fetch(url,{method:"GET"}).then((response) => response.json())
	}
post(url,message){
	return fetch(url,{method:"POST",body:JSON.stringify(message)}).then((response) => response.json())
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
