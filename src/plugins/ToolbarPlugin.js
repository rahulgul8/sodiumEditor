import React, { Component } from 'react';
import { Separator } from 'draft-js-static-toolbar-plugin';
import {
    ItalicButton,
    BoldButton,
    UnderlineButton,
    CodeButton,
    HeadlineOneButton,
    HeadlineTwoButton,
    HeadlineThreeButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from 'draft-js-buttons';
import 'draft-js-static-toolbar-plugin/lib/plugin.css';
import ImageAdd from './imageAdd/imageAdd';
import VideoAdd from './videoAdd/VideoAdd';
import { toolbarPlugin, videoPlugin, imagePlugin } from './exporter'

import 'draft-js-static-toolbar-plugin/lib/plugin.css';



const { Toolbar } = toolbarPlugin;


export default class ToolbarPlugin extends Component {

    render() {
        return (<Toolbar>
            {
                // may be use React.Fragment instead of div to improve perfomance after React 16
                (externalProps) => (
                    <div>
                        <BoldButton {...externalProps} />
                        <ItalicButton {...externalProps} />
                        <UnderlineButton {...externalProps} />
                        <CodeButton {...externalProps} />
                        <Separator {...externalProps} />
                        <HeadlineOneButton {...externalProps} />
                        <HeadlineTwoButton {...externalProps} />
                        <HeadlineThreeButton {...externalProps} />
                        <Separator {...externalProps} />
                        <UnorderedListButton {...externalProps} />
                        <OrderedListButton {...externalProps} />
                        <BlockquoteButton {...externalProps} />
                        <CodeBlockButton {...externalProps} />
                        <VideoAdd editorState={this.props.editorState}
                            onChange={this.props.onChange} modifier={videoPlugin.addVideo}></VideoAdd>
                        <ImageAdd
                            editorState={this.props.editorState}
                            onChange={this.props.onChange}
                            modifier={imagePlugin.addImage}
                        />
                    </div>
                )
            }
        </Toolbar>);
    }
}