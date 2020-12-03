import React from 'react';
import Modal from '../modal';
import history from '../../history';
import { connect } from 'react-redux';
import { fetchStream, deleteStream } from '../../actions/actions';
import { Props, State } from './SteamInterfaces';

class StreamDelete extends React.Component<Props> {
  componentDidMount() {
    this.props.fetchStream(this.props.match.params.id);
  }

  renderContent() {
    if (!this.props.stream) {
      return 'Delete Stream';
    } else {
      return (
        <>
          Delete Stream{' '}
          <span style={{ color: 'orange', textDecoration: 'underline' }}>
            {this.props.stream.title}
          </span>
        </>
      );
    }
  }

  onSubmit = () => {
    this.props.deleteStream(this.props.match.params.id);
  };

  render() {
    return (
      <div>
        <div>StreamDelete</div>
        <Modal
          title={this.renderContent()}
          body='Are you sure that you want to delete the stream?'
          submit='Delete'
          negative
          cancel='Cancel'
          onDismiss={() => history.push('/')}
          onSubmit={this.onSubmit}
        />
      </div>
    );
  }
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps, { fetchStream, deleteStream })(
  StreamDelete
);
