import React, { Component } from 'react';

export default class Image extends Component {
  render() {
    const { block, contentState } = this.props;
    const { src, title } = contentState.getEntity(block.getEntityAt(0)).getData();
    return (
      <div className="img">
        <img src={src} width="100%" alt={title} />
      </div>
    );
  }
}
