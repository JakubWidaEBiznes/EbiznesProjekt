export class Auth {

//TEMP
constructor(mainComponent){
	this.mainComponent = mainComponent;
	this.user = {id:0,isLogged:true,isAdmin:true}
	}



update=()=>{
	this.mainComponent.setState({auth:this});
	}

testLoginUser=()=>{
	this.user = {id:0,isLogged:true,isAdmin:false}
	this.update();
	}

testLoginAdmin=()=>{
	this.user = {id:0,isLogged:true,isAdmin:true}
	this.update();
	}

testLogout=()=>{
	this.user = {id:null,isLogged:false,isAdmin:false}
	this.update();
	}

}
