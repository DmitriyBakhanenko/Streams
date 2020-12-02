import React, { useState } from 'react';
import { connect } from 'react-redux';

interface props {
  match: {
    params: {
      id: number;
    };
  };
}

const StreamEdit = ({ match }: props) => {
  return (
    <div>
      <div>StreamEdit</div>
    </div>
  );
};

interface stream {
  title: string;
  description: string;
  userId: string;
  id: number;
}

interface state {
  streams: Array<stream>;
}

const mapStateToProps = (state: state, ownProps: props) => ({
  stream: state.streams[ownProps.match.params.id]
});

export default connect(mapStateToProps)(StreamEdit);
