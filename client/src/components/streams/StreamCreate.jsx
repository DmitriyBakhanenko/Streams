import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import { createStream } from '../../actions/actions';

class StreamCreate extends Component {
  renderInput({ input, label, meta }) {
    console.log(meta);
    const error = !!meta.error && meta.submitFailed === true ? meta.error : '';
    return (
      <div className='field'>
        <label>{label}</label>
        <input {...input} placeholder={error} autoComplete='off' />
      </div>
    );
  }

  onSubmit = formValues => {
    this.props.createStream(formValues);
  };

  render() {
    return (
      <form
        onSubmit={this.props.handleSubmit(this.onSubmit)}
        className='ui form'
      >
        <Field name='title' label='Enter Title' component={this.renderInput} />
        <Field
          name='description'
          label='Enter Description'
          component={this.renderInput}
        />
        <button className='ui button primary'>Submit</button>
      </form>
    );
  }
}

const validate = formValue => {
  const errors = {};

  if (!formValue.title) {
    errors.title = 'You must enter a title';
  }
  if (!formValue.description) {
    errors.description = 'You must enter a description';
  }

  return errors;
};

const formWrapped = reduxForm({
  form: 'streamCreate',
  validate
})(StreamCreate);

export default connect(null, { createStream })(formWrapped);
