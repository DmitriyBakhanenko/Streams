import _ from 'lodash';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream, editStream } from '../../actions/actions';
import { loader } from './loader';
import StreamForm from './StreamForm';

interface Props {
  match: {
    params: {
      id: number;
    };
  };
  stream: number;
}

interface Stream {
  title: string;
  description: string;
  userId: string;
  id: number;
}

interface State {
  streams: Array<Stream>;
}

interface ComponentProps {
  fetchStream: Function;
  editStream: Function;
  history?: object;
  location?: object;
  match: {
    params: {
      id: number;
    };
  };
  stream: {
    id: number;
    title: string;
  };
}

class StreamEdit extends Component<ComponentProps> {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  onSubmit = (formValues: object) => {
    console.log(formValues);
    this.props.editStream(this.props.match.params.id, formValues);
  };
  render() {
    if (!this.props.stream) return loader();
    return (
      <div>
        <h3>Edit your Stream</h3>
        <StreamForm
          initialValues={_.pick(this.props.stream, 'title', 'description')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, editStream })(
  StreamEdit
);
