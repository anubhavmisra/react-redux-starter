import React, { Component } from 'react';
import { reduxForm } from 'redux-form';
import { submitForm } from '../actions';

class SampleForm extends Component {
    onSubmit(props) {
        this.props.submitForm(props)
            .then(() => {
                console.log("Form Submitted with success");
            });
    }
    render() {
        const {fields: {field1, field2, field3}, handleSubmit} = this.props;
        return (
            <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
                <h3>Sample Form</h3>
                <div className={`form-group ${field1.touched && field1.invalid ? 'has-danger' : ''}`} >
                    <label>Sample field 1</label>
                    <input className="form-control" type="text" {...field1} />
                    <div className="text-help">
                        {field1.touched ? field1.error : ''}
                    </div>
                </div>
                <div className={`form-group ${field2.touched && field2.invalid ? 'has-danger' : ''}`} >
                    <label>Sample field 2</label>
                    <input className="form-control" type="text" {...field2} />
                    <div className="text-help">
                        {field2.touched ? field2.error : ''}
                    </div>
                </div>
                <div className={`form-group ${field3.touched && field3.invalid ? 'has-danger' : ''}`} >
                    <label>Sample field 3</label>
                    <input className="form-control" type="text" {...field3} />
                    <div className="text-help">
                        {field3.touched ? field3.error : ''}
                    </div>
                </div>
                <button className="btn btn-primary" type="submit">Submit Form</button>
            </form >
        );
    }
}

function validate(values) {
    const errors = {};
    if (!values.field1) {
        errors.field1 = 'Please enter field 1';
    }
    if (!values.field2) {
        errors.field2 = 'Please enter field 2';
    }
    if (!values.field3) {
        errors.field3 = 'Please enter field 3';
    }
    return errors;
}
export default reduxForm({
    form: 'SampleForm',
    fields: ['field1', 'field2', 'field3'],
    validate

}, null, { submitForm })(SampleForm);