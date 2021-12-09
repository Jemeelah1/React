import React, { Component } from 'react';
import './component.css'
import image from './jemeelah.jpeg';
class MyComponent extends React.Component {
	constructor () {
		super();
	}
	render() {
	  return (
		<div>
			<h1 style={{color: "blue"}}>Welcome to my First React Page!</h1>
        	<img className="image" src={image} alt="image" />
			
		</div>
	  );
	}
  }

export default MyComponent;