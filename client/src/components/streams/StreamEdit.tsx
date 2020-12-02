import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/actions';

interface props {
  match: {
    params: {
      id: number;
    };
  };
  stream: number;
}

interface stream {
  title: string;
  description: string;
  userId: string;
  id: number;
}

interface state {
  streams: Array<stream>;
}

interface componentProps {
  fetchStream: Function;
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

class StreamEdit extends Component<componentProps> {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  loader() {
    return (
      <div className='ui active inverted dimmer'>
        <div className='ui big text loader'>Loading...</div>
        <p></p>
      </div>
    );
  }

  render() {
    if (!this.props.stream) return this.loader();
    return (
      <div>
        <div>{this.props.stream.title}</div>
      </div>
    );
  }
}

const mapStateToProps = (state: state, ownProps: props) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamEdit);
