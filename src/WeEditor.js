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

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.editorState !== prevProps.editorState) {
            this.setRawContent(this.props.editorState);
        }
        if (this.props.title !== prevProps.title) {
            this.setTitle(this.props.title);
        }
    }

    state = {
        editorState: this.getContent(this.props.editorState),
        titleState: this.getContent(this.props.title)
    };

    onTitleChange = (titleState) => {
        this.setState({
            titleState
        });
    }
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
        return convertToRaw(this.state.editorState.getCurrentContent());
    }

    setRawContent = (content) => {
        let state = this.getContent(content);
        this.setState({ editorState: state });
    }

    setTitle(title) {
        let value = this.getContent(title);
        this.setState({ titleState: value })
    }

    getTitle() {
        return convertToRaw(this.state.titleState.getCurrentContent());
    }

    getContent(content) {
        let state;
        if (content) {
            state = EditorState.createWithContent(convertFromRaw(content));
        } else {
            state = EditorState.createWithContent(ContentState.createFromText(""));
        }
        return state;
    }

    titleFunction = (contentBlock) => {
        const type = contentBlock.getType();
        return editorStyles.title;
    }

    SideBar = () => {
        return (<SideBar>
            <ImageAdd
                editorState={this.state.editorState}
                onChange={this.onChange}
                modifier={imagePlugin.addImage}
            />
        </SideBar>);
    }

    render() {
       
        return (
            <div>
                <div id="titleEditor" className={editorStyles.titleEditor}>
                    <Editor
                        blockStyleFn={this.titleFunction}
                        placeholder={this.props.titlePlaceholder}
                        editorState={this.state.titleState}
                        onChange={this.onTitleChange}
                        readOnly={this.props.readOnly}
                    />
                </div>
                <div className={editorStyles.editor} >

                    {!(this.props.readOnly) ? this.SideBar() : null}

                    <div id="contentEditor" onClick={this.focus}>
                        <Editor
                            editorState={this.state.editorState}
                            onChange={this.onChange}
                            plugins={plugins}
                            ref={(element) => { this.editor = element; }}
                            placeholder={this.props.placeholder}
                            readOnly={this.props.readOnly}
                        />
                        {!this.props.readOnly ? <CustomInlineToolbarEditor></CustomInlineToolbarEditor> : null}
                    </div>
                </div>
            </div>
        );
    }
}