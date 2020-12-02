import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';

class StreamForm extends Component {
  renderError = ({ error, touched }) => {
    if (touched && error) {
      return (
        <div className='ui error message'>
          <div className='header'>{error}</div>
        </div>
      );
    }
  };

  renderInput = ({ input, label, meta }) => {
    const className = `field ${meta.error && meta.touched ? 'error' : null}`;

    return (
      <div className={className}>
        <label>{label}</label>
        <input {...input} autoComplete='off' />
        {this.renderError(meta)}
      </div>
    );
  };

  onSubmit = formValues => {
    if (this.props.currentUser) {
      this.props.onSubmit(formValues);
    }
  };

  renderLoginError = user => {
    if (!user) {
      return (
        <div className='field'>
          <div className='ui error message'>
            <div className='header'>Please log in to submit the form</div>
          </div>
          <br />
        </div>
      );
    }
  };

  render() {
    return (
      <div>
        {this.renderLoginError(this.props.currentUser)}
        <form
          onSubmit={this.props.handleSubmit(this.onSubmit)}
          className='ui form error'
        >
          <Field
            name='title'
            label='Enter Title'
            component={this.renderInput}
          />
          <Field
            name='description'
            label='Enter Description'
            component={this.renderInput}
          />
          <button className='ui button primary'>Submit</button>
        </form>
      </div>
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
  form: 'streamForm',
  validate
})(StreamForm);

const mapStateToProps = state => ({
  currentUser: state.auth.currentUser
});

export default connect(mapStateToProps)(formWrapped);
