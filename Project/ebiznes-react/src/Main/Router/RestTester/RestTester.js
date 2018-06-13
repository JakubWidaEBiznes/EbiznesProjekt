import React, { Component } from 'react';

class RestTester extends Component {
	constructor(props)
		{
		super(props);
		this.state = {id:props.auth.user.id}
		}
  render() {
    return (
      <div>
				<p>REst tester</p>
				<p>{this.state.id}</p>
      </div>
    );
  }
}

export default RestTester;

fetch('http://example.com/movies.json')
  .then(function(response) {
    return response.json();
  })
  .then(function(myJson) {
    console.log(myJson);
  });
