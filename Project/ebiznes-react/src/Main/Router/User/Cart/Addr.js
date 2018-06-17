import React,{ Component } from 'react';
import {Link} from 'react-router-dom';

export default class Addr extends Component {
constructor(props){
	super(props)
	}
onChange=(event)=>{
	this.props.controller.setAddrData(event.target.name,event.target.value,this.formValidation.checkValidity());
	}


render(){return(
		<form ref={form => this.formValidation = form}  key="addressInputForm" className="row">
			<div className="col-sm-3"></div>
			<div className="col-sm-6">

				<div className="row">
					<div className="col-sm-3 form-group">
						<label htmlFor="zipcode">Zipcode</label>
						<input className="form-control" name="zipcode" id="zipcode" type="text" pattern="[0-9]{5}" onChange={this.onChange} value={this.props.addrData.addressData.zipcode}/>
					</div>
					<div className="col-sm-9 form-group">
						<label htmlFor="city">City</label>
						<input className="form-control" name="city" id="city" type="text" minLength={3} onChange={this.onChange} value={this.props.addrData.addressData.city}/>
					</div>

				</div>

				<div className="row">
					<div className="col-sm-8 form-group">
						<label htmlFor="street">Street</label>
						<input className="form-control" name="street" id="street" minLength={3} type="text" onChange={this.onChange} value={this.props.addrData.addressData.street}/>
					</div>
					<div className="col-sm-4 form-group">
						<label htmlFor="housenum">Address</label>
						<input className="form-control" name="housenum" id="housenum" type="text" minLength={1} onChange={this.onChange} value={this.props.addrData.addressData.housenum}/>
					</div>
				</div>


				<div className="form-group">
					<label htmlFor="contactTelephone">Contact telephone</label>
					<input className="form-control" name="contactTelephone" id="contactTelephone" type="text" pattern="(\+[0-9]{2})?[0-9]{9}" minLength={9} onChange={this.onChange} value={this.props.addrData.addressData.contractTelephone}/>
				</div>
				<div className="form-group">
				</div>
				<div className="form-group">
					<button disabled={!this.props.addrData.isAddrValid} type="submit" onSubmit={this.props.controller.buyCart} className="btn btn-success">place order</button>
				</div>
			</div>
			<div className="col-sm-2"></div>
		</form>
		)}
}
