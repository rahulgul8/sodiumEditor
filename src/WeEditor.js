import React, { Component } from 'react';

import { EditorState, ContentState, convertFromRaw, convertToRaw } from 'draft-js';
import elementStyle from './index.style';
import Editor from 'draft-js-plugins-editor';
import editorStyles from './editorStyles.style.js';
import plugins, { imagePlugin } from './plugins/exporter';
import CustomInlineToolbarEditor from './plugins/ToolBar/ToolBar'
import SideBar from './plugins/SideBar/SideBar';
import ImageAdd from './plugins/imageAdd/imageAdd';
import popupStyle from './sidebar.popup.style';

/** @jsx jsx */
import { Global, jsx } from '@emotion/core';
import sidebarPopupStyle from './sidebar.popup.style';

export default class WeEditor extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.state = {
            editorState: this.getContent(this.props.editorState),
            titleState: this.getContent(this.props.title)
        };
    }

    componentDidUpdate(prevProps) {
        // Typical usage (don't forget to compare props):
        if (this.props.editorState !== prevProps.editorState) {
            this.setRawContent(this.props.editorState);
        }
        if (this.props.title !== prevProps.title) {
            this.setRawTitle(this.props.title);
        }
    }



    onTitleChange = (titleState) => {
        let contentChanged = false;
        if (titleState.getCurrentContent() !== this.state.titleState.getCurrentContent()) {
            contentChanged = true;
        }
        if (this.props.onTitleChange) {
            this.props.onTitleChange(titleState, contentChanged);
        }
        this.setState({
            titleState
        });
    }
    onChange = (editorState) => {
        let contentChanged = false;
        if (editorState.getCurrentContent() !== this.state.editorState.getCurrentContent()) {
            contentChanged = true;
        }
        // if (editorState.getSelection() !== this.state.editorState.getSelection()) {
        //     // selection has changed
        // }
        if (this.props.onChange) {
            this.props.onChange(editorState, contentChanged);
        }
        this.setState({
            editorState,
        });

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

    getPlainContent() {
        return this.getPlainText(this.state.editorState);
    }

    setRawTitle(title) {
        let value = this.getContent(title);
        this.setState({ titleState: value })
    }

    getRawTitle() {
        return convertToRaw(this.state.titleState.getCurrentContent());
    }

    getPlainTitle() {
        return this.getPlainText(this.state.titleState);
    }

    getPlainText(state) {
        if (state && state.getCurrentContent) { return state.getCurrentContent().getPlainText('\u0001') }
    }

    getContent(content, isString = false) {
        let state;
        if (content && !isString) {
            state = EditorState.createWithContent(convertFromRaw(content));
        } else {

            if (!content) {
                content = "";
            }
            state = EditorState.createWithContent(ContentState.createFromText(content));
        }
        return state;
    }

    titleFunction = (contentBlock) => {
        const type = contentBlock.getType();
        return editorStyles.titleClassName;
    }

    SideBar = () => {
        return (<SideBar>
            <Global styles={sidebarPopupStyle.classes} />
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
                <Global styles={elementStyle.classes} />
                <div id="titleEditor" css={editorStyles.titleEditor}>
                    <Global styles={editorStyles.titleClass} />
                    <Editor
                        blockStyleFn={this.titleFunction}
                        placeholder={this.props.titlePlaceholder}
                        editorState={this.state.titleState}
                        onChange={this.onTitleChange}
                        readOnly={this.props.readOnly}
                    />
                </div>
                <div css={editorStyles.editor} >

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