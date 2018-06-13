export class Auth {

constructor(mainComponent){
	this.mainComponent = mainComponent;
	this.user = {id:0,isLogged:true,isAdmin:false}
	}

//TEMP

update(){
	var self = this;
	this.mainComponent.setState({auth:self});
	}

}
