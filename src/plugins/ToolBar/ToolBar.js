import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

import React, { Component } from 'react';

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
import editorStyles from './editorStyle.module.css';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';

import buttonStyles from './buttonStyle.module.css';
import toolbarStyles from './toolbarStyle.module.css';
import { linkPlugin } from '../exporter'

export const inlineToolbarPlugin = createInlineToolbarPlugin({ theme: { buttonStyles, toolbarStyles } });


export const { InlineToolbar } = inlineToolbarPlugin;

inlineToolbarPlugin.blockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
    console.log("type is " + type);
    if (type === 'blockquote') {
        return 'WeBlockquote';
    }
    if (type === 'atomic') {
        return 'WeFigure';
    }
    if (type === 'unstyled') {
        return 'WePlainText'
    }
    if (type === 'header-three' || type === 'header-two') {
        return 'WeSubTitle';
    }
    if (type === 'code-block') {
        return 'WeCode';
    }
};

export default class CustomInlineToolbarEditor extends Component {

    render() {
        return (
            <InlineToolbar>
                {
                    // may be use React.Fragment instead of div to improve perfomance after React 16
                    (externalProps) => (
                        <div>
                            <BoldButton {...externalProps} />
                            <ItalicButton {...externalProps} />
                            {/* <UnderlineButton {...externalProps} /> */}
                            <linkPlugin.LinkButton {...externalProps} />
                            <Separator {...externalProps} />
                            <HeadlineTwoButton {...externalProps} />
                            <CodeBlockButton {...externalProps} />
                            <UnorderedListButton {...externalProps} />
                            <OrderedListButton {...externalProps} />
                            <BlockquoteButton {...externalProps} />
                        </div>
                    )
                }
            </InlineToolbar>
        );
    }
}