import React, { Component } from 'react';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';

import { EditorState, ContentState, convertFromRaw, convertToRaw } from 'draft-js';
import './index.css';
import Editor from 'draft-js-plugins-editor';

import editorStyles from './editorStyles.module.css';
import plugins, { imagePlugin } from './plugins/exporter';
import CustomInlineToolbarEditor from './plugins/ToolBar/ToolBar'
import SideBar from './plugins/SideBar/SideBar';
import 'draft-js/dist/Draft.css';
import ImageAdd from './plugins/imageAdd/imageAdd';

export default class WeEditor extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        editorState: this.props.editorState ? EditorState.createWithContent(convertFromRaw(this.props.editorState)) : EditorState.createWithContent(
            ContentState.createFromText("")
        )
    };


    onChange = (editorState) => {
        this.setState({
            editorState,
        });
        if (this.props.onChange) {
            this.props.onChange(editorState);
        }
    };

    focus = () => {
        this.editor.focus();
    };

    getRawContent = () => {
        let c = convertToRaw(this.state.editorState.getCurrentContent())
        console.log("as is", convertFromRaw(c))
        return convertToRaw(this.state.editorState.getCurrentContent());
    }

    setRawContent = (content) => {
        if (content) {
            this.setState({ editorState: EditorState.createWithContent(convertFromRaw(content)) });
        }
    }

    render() {
        return (
            <div className={editorStyles.editor}>
                <SideBar>
                    <ImageAdd
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        modifier={imagePlugin.addImage}
                    />
                </SideBar>

                <div onClick={this.focus}>
                    <Editor
                        editorState={this.state.editorState}
                        onChange={this.onChange}
                        plugins={plugins}
                        ref={(element) => { this.editor = element; }}
                    />
                    <CustomInlineToolbarEditor></CustomInlineToolbarEditor>
                </div>
            </div>
        );
    }
}