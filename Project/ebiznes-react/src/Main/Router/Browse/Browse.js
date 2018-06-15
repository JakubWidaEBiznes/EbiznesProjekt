import React, { Component } from 'react';

export default class Browse extends Component {
	constructor(props){
		super(props);

		}
  render() {
		console.log("what")
		this.props.api.products.getSearch("alef","bet")
			.then((data)=>{console.log("api data:",data)})
    return (
      <div>
				<p>Browse</p>
      </div>
    );
  }
}
