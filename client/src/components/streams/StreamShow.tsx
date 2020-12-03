import React from 'react';
import { connect } from 'react-redux';
import { fetchStream } from '../../actions/actions';
import { loader } from './loader';

import { Props, State } from './SteamInterfaces';

class StreamShow extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  render() {
    if (!this.props.stream) {
      return loader();
    }
    return (
      <div>
        <div>{this.props.stream.title}</div>
        <h5>{this.props.stream}</h5>
      </div>
    );
  }
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream })(StreamShow);
