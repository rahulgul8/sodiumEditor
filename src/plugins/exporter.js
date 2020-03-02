import { composeDecorators } from 'draft-js-plugins-editor';

import createImagePlugin from 'draft-js-image-plugin';

import createVideoPlugin from 'draft-js-video-plugin';

import createToolbarPlugin from 'draft-js-static-toolbar-plugin';

import buttonStyles from './ToolBar/buttonStyle.module.css';
import toolbarStyles from './ToolBar/toolbarStyle.module.css';

import createSideToolbarPlugin from 'draft-js-side-toolbar-plugin';

import sideBarButtonStyles from './SideBar/buttonStyle.module.css';
import sideBarToolbarStyles from './SideBar/toolbarStyle.module.css';
import sideBarBlockTypeSelectStyles from './SideBar/blockTypeStyle.module.css';
import imageAddStyles from './imageAdd/imageFormat.module.css';
import { inlineToolbarPlugin } from './ToolBar/ToolBar';
import createLinkPlugin from 'draft-js-anchor-plugin';
import createHashtagPlugin from 'draft-js-hashtag-plugin';
import createLinkifyPlugin from 'draft-js-linkify-plugin';

export const linkPlugin = createLinkPlugin({
    placeholder: 'http://…'
});

export const hashtagPlugin = createHashtagPlugin();
export const linkifyPlugin = createLinkifyPlugin();

// Setting the side Toolbar at right position(default is left) and styling with custom theme
const sideToolbarPlugin = createSideToolbarPlugin({
    theme: { buttonStyles: sideBarButtonStyles, toolbarStyles: sideBarToolbarStyles, blockTypeSelectStyles: sideBarBlockTypeSelectStyles }
});
export const { SideToolbar } = sideToolbarPlugin;


export const imagePlugin = createImagePlugin({
    theme: {
        image: imageAddStyles
    }
});
export const videoPlugin = createVideoPlugin();


export default [
    imagePlugin,
    videoPlugin,
    inlineToolbarPlugin,
    sideToolbarPlugin,
    linkPlugin,
    hashtagPlugin,
    linkifyPlugin
];


export const initialState = { "blocks": [{ "key": "9gm3s", "text": "A Guide to System.exit()", "type": "header-three", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }, { "key": "9ks34", "text": "1. Overview", "type": "header-two", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }, { "key": "2vc3l", "text": "In this tutorial, we’ll have a look at what System.exit means in Java.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 44, "length": 11, "style": "ITALIC" }], "entityRanges": [], "data": {} }, { "key": "8p10k", "text": "We’ll see its purposes, where to use and how to use it. We’ll also see what’s the difference in invoking it with different status codes.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }, { "key": "e4lot", "text": " ", "type": "atomic", "depth": 0, "inlineStyleRanges": [], "entityRanges": [{ "offset": 0, "length": 1, "key": 0 }], "data": {} }, { "key": "2khjr", "text": "2. What Is System.exit?", "type": "header-two", "depth": 0, "inlineStyleRanges": [], "entityRanges": [], "data": {} }, { "key": "eunfb", "text": "System.exit is a void method. It takes an exit code, which it passes on to the calling script or program.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 11, "style": "ITALIC" }, { "offset": 17, "length": 4, "style": "ITALIC" }], "entityRanges": [], "data": {} }, { "key": "7c81u", "text": "Exiting with a code of zero means a normal exit:", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 23, "length": 25, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "bfaqg", "text": "System.exit(0);", "type": "code-block", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 15, "style": "CODE" }], "entityRanges": [], "data": {} }, { "key": "fcp6i", "text": "We can pass any integer as an argument to the method. A non-zero status code is considered as an abnormal exit.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 54, "length": 57, "style": "BOLD" }], "entityRanges": [], "data": {} }, { "key": "85f8n", "text": "Calling the System.exit method terminates the currently running JVM and exits the program. This method does not return normally.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 12, "length": 12, "style": "ITALIC" }], "entityRanges": [], "data": {} }, { "key": "deagt", "text": "This means that the subsequent code after the System.exit is effectively unreachable and yet, the compiler does not know about it.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 16, "length": 68, "style": "BOLD" }, { "offset": 85, "length": 45, "style": "BOLD" }, { "offset": 46, "length": 11, "style": "ITALIC" }], "entityRanges": [], "data": {} }, { "key": "b6qnr", "text": "System.exit(0);", "type": "code-block", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 15, "style": "CODE" }], "entityRanges": [], "data": {} }, { "key": "3sjct", "text": "System.out.println(\"This line is unreachable\");", "type": "code-block", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 47, "style": "CODE" }], "entityRanges": [], "data": {} }, { "key": "17u7u", "text": "It’s not a good idea to shut down a program with System.exit(0). It gives us the same result of exiting from the mainmethod and also stops the subsequent lines from executing, also the thread invoking System.exit blocks until the JVM terminates. If a shutdown hook submits a task to this thread, it leads to a deadlock.", "type": "unstyled", "depth": 0, "inlineStyleRanges": [{ "offset": 0, "length": 63, "style": "BOLD" }, { "offset": 176, "length": 143, "style": "BOLD" }, { "offset": 49, "length": 14, "style": "ITALIC" }, { "offset": 113, "length": 4, "style": "ITALIC" }, { "offset": 201, "length": 11, "style": "ITALIC" }], "entityRanges": [], "data": {} }], "entityMap": { "0": { "type": "IMAGE", "mutability": "IMMUTABLE", "data": { "src": "https://hbr.org/resources/images/article_assets/2020/01/Jan20_24_-200524359.jpg" } } } };