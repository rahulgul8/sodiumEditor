import React, { Component } from 'react';
import WeEditor from './WeEditor'

class Reader extends Component {

    constructor(props) {
        super(props);
        this.editorRef = React.createRef();
    }

    render() {
        return (
            <WeEditor ref={this.editorRef} editorState={this.props.editorState} {...this.props} />
        );
    }
}

export default Reader;