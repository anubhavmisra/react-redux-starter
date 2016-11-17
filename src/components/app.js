import React, { Component } from 'react';
import { Link } from 'react-router';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Your React App</h1>
                <div style={{textAlign:'center'}}>

                    <Link to="/">Home</Link> | &nbsp;
                <Link to="sampleform">Sample Form</Link>
                </div>

                <div className="container">
                    {this.props.children}
                </div>

            </div>
        );
    }
}