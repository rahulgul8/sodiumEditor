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

    loadPageContent = (title, content) => {
        this.editorRef.current.setRawContent(content);
        this.editorRef.current.setTitle(title);
    }

    componentDidMount() {
        this.loadPageContent(this.props.title, this.props.editorState);
    }

    render() {
        return (
            <div>
                <WeEditor ref={this.editorRef} {...this.props} />
            </div >
        );
    }
}

export default Reader;