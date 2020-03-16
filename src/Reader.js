import React, { Component } from 'react';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import './index.css';
import Editor from 'draft-js-plugins-editor';
import { EditorState, ContentState, convertFromRaw } from 'draft-js';
import plugins from './plugins/exporter';
import 'draft-js/dist/Draft.css';

class Reader extends Component {

    constructor(props) {
        super(props);
    }


    render() {
        let editorState = this.props.editorState ? EditorState.createWithContent(convertFromRaw(this.props.editorState)) : EditorState.createWithContent(
            ContentState.createFromText("")
        );
        return (
            <div>
                <Editor
                    editorState={editorState}
                    plugins={plugins}
                    readOnly={this.props.readOnly}
                />
            </div >
        );
    }
}

export default Reader;