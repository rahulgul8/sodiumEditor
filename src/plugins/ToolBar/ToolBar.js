import 'draft-js-inline-toolbar-plugin/lib/plugin.css';

import React, { Component } from 'react';

import {
    ItalicButton,
    BoldButton,
    HeadlineTwoButton,
    UnorderedListButton,
    OrderedListButton,
    BlockquoteButton,
    CodeBlockButton,
} from 'draft-js-buttons';
import createInlineToolbarPlugin, { Separator } from 'draft-js-inline-toolbar-plugin';

import styles from './buttonStyle.style';
import toolbarStyles from './toolbar.style';
import { linkPlugin } from '../exporter'
/** @jsx jsx */
import { Global, css, jsx } from '@emotion/core'
export const inlineToolbarPlugin = createInlineToolbarPlugin({ theme: { buttonStyles: styles.buttonStyles, toolbarStyles: toolbarStyles.style } });


export const { InlineToolbar } = inlineToolbarPlugin;

inlineToolbarPlugin.blockStyleFn = (contentBlock) => {
    const type = contentBlock.getType();
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
            <React.Fragment>
                <Global styles={styles.classes} />
                <Global styles={toolbarStyles.classes} />
                <InlineToolbar>
                    {
                        // may be use React.Fragment instead of div to improve perfomance after React 16
                        (externalProps) => (
                            <div>
                                <BoldButton {...externalProps} />
                                <ItalicButton {...externalProps} />
                                <linkPlugin.LinkButton {...externalProps} />
                                <HeadlineTwoButton {...externalProps} />
                                <CodeBlockButton {...externalProps} />
                                <UnorderedListButton {...externalProps} />
                                <OrderedListButton {...externalProps} />
                                <BlockquoteButton {...externalProps} />
                            </div>
                        )
                    }
                </InlineToolbar>
            </React.Fragment>
        );
    }
}