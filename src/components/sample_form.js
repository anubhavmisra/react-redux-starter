import _ from 'lodash';
import React, { Component, PropTypes } from 'react';
import { Link } from 'react-router';
import { reduxForm } from 'redux-form';
import { submitForm } from '../actions';

const FIELDS = {
    field1: {
        type: 'input',
        title: 'Field 1'
    },
    field2: {
        type: 'input',
        title: 'Field 2'
    },
    field3: {
        type: 'textarea',
        title: 'Field 2'
    }
}

class SampleForm extends Component {
    static contextTypes = {
        router: PropTypes.object
    }
    onSubmit(props) {
        this.props.submitForm(props)
            .then(() => {
                console.log('Form Submitted with success');
                this.context.router.push('/')
            });
    }
    renderField(fieldConfig, field) {
        const fieldHelper = this.props.fields[field];
        return (
            <div key={field} className={`form-group ${fieldHelper.touched && fieldHelper.invalid ? 'has-danger' : ''}`} >
                <label>{fieldConfig.title}</label>
                <fieldConfig.type className="form-control" type="text" {...fieldHelper} />
                <div className="text-help">
                    {fieldHelper.touched ? fieldHelper.error : ''}
                </div>
            </div>
        );
    }

    render() {
        const {handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Sample Form</h3>

                {_.map(FIELDS, this.renderField.bind(this))}
                <button className="btn btn-primary" type="submit">Submit Form</button>
                <Link to="/" className="btn btn-danger">Cancel</Link>
            </form >
        );
    }
}

function validate(values) {
    const errors = {};
    _.each(FIELDS, (type, field) => {
        if (!values[field]) {
            errors[field] = `Enter ${field}`;
        }
    });
    return errors;
}
export default reduxForm({
    form: 'SampleForm',
    fields: _.keys(FIELDS),
    validate

}, null, { submitForm })(SampleForm);