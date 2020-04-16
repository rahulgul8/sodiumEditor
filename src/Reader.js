import React, { Component } from 'react';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import './index.css';
import WeEditor from './WeEditor'
import { EditorState, ContentState, convertFromRaw } from 'draft-js';
import 'draft-js/dist/Draft.css';

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