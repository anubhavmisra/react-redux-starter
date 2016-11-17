import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchData } from '../actions'

class IndexComponent extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    renderItems() {
        return this.props.data.data.map((item) => {
            return (
                <li key={item.id} className="list-group-item">
                    <div>{item.title}
                    </div>
                </li>
            )
        });
    }

    render() {
        if (!this.props.data) {
            return <div>Loading</div>
        }
        return (
            <div >
                <h3>List of Blog posts</h3>
                <ul className="list-group">
                    {this.renderItems()}
                </ul>
            </div>
        );
    }
}
const mapStateToProps = (state, ownProps) => {
    return {
        data: state.data
    }
}
export default connect(mapStateToProps, { fetchData })(IndexComponent)