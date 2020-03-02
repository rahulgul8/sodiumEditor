import React, { Component } from 'react';
import 'draft-js-side-toolbar-plugin/lib/plugin.css';
import {
    convertFromRaw, convertToRaw,
    EditorState,
} from 'draft-js';
import './index.css';
import Editor from 'draft-js-plugins-editor';

import editorStyles from './editorStyles.module.css';
import plugins, { initialState, imagePlugin, SideToolbar } from './plugins/exporter';
import CustomInlineToolbarEditor from './plugins/ToolBar/ToolBar'
import SideBar from './plugins/SideBar/SideBar';
import 'draft-js/dist/Draft.css';
import ImageAdd from './plugins/imageAdd/imageAdd';
import 'draft-js-hashtag-plugin/lib/plugin.css';

export default class WeEditor extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        editorState: EditorState.createWithContent(convertFromRaw(initialState)),
    };

    onChange = (editorState) => {
        this.setState({
            editorState,
        });
    };

    print = () => {
        const rawContentState = convertToRaw(
            this.state.editorState.getCurrentContent()
        );
        console.log(JSON.stringify(rawContentState));
    }

    focus = () => {
        this.editor.focus();
    };

    render() {

        const classes = 'sidemenu__button';
        return (
            <div>
                <button onClick={this.print}>print</button>
                <div className={editorStyles.editor}>
                    <SideBar>
                        <ImageAdd className={"editor"}
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
            </div >
        );
    }
}