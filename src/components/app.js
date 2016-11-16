import React, { Component } from 'react';

export default class App extends Component {
    render() {
        return (
            <div>
                Boilerplate is working
                {this.props.children}
            </div>
        );
    }
}