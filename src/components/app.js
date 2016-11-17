import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div className="app">
                <h1>Your React App</h1>
                <div className="container">
                    {this.props.children}
                </div>
            </div>
        );
    }
}