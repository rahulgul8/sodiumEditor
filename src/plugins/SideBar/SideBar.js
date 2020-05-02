import React, { Component } from 'react';

import ReactDOM from "react-dom";
import sidebarCss from './sidebar.style.js'
/** @jsx jsx */
import { css, jsx } from '@emotion/core'

export default class SideBar extends Component {

    constructor(props) {
        super(props);
        this.state = { top: 0, open: false };
        this.onChange = this.onChange.bind(this);
        this.toggleOpen = this.toggleOpen.bind(this);
    }

    componentDidUpdate() {
        if (this.updatingPosition) {
            clearImmediate(this.updatingPosition);
        }
        this.updatingPosition = null;
        this.updatingPosition = setImmediate(() => {
            return this.setBarPosition();
        });
    }

    getSelectedBlockElement(range) {
        let node = range.startContainer;
        do {
            try {
                const nodeIsDataBlock = node.getAttribute
                    ? node.getAttribute("data-block")
                    : null;
                if (nodeIsDataBlock) {
                    return node;
                }
                node = node.parentNode;
            } catch (error) {
                return null;
            }
        } while (node !== null);
        return null;
    }

    onChange(editorState) {
        this.props.onChange(editorState);
    }

    setBarPosition() {
        const container = ReactDOM.findDOMNode(this.containerEl);
        const editor = container ? container.parentElement : null;
        const selection = window.getSelection();
        if (selection.rangeCount === 0) {
            return null;
        }
        const element = this.getSelectedBlockElement(selection.getRangeAt(0));

        if (!element || !container || !editor || !editor.contains(element)) {
            return;
        }

        const containerTop =
            container.getBoundingClientRect().top -
            document.documentElement.clientTop;
        let top = element.getBoundingClientRect().top - 4 - containerTop;
        top = Math.max(0, Math.floor(top));

        if (this.state.top !== top) {
            this.setState({
                top: top
            });
        }
    }


    toggleOpen() {
        this.setState({ open: !this.state.open })
    }
    render() {

        const buttonClass = this.state.open ? css(sidebarCss.button, sidebarCss.buttonOpen) : css(sidebarCss.button);

        const listClass = !this.state.open ? css(sidebarCss.items, sidebarCss.hidden) : css(sidebarCss.items);
        // classNames(sidebarCss.items, { [sidebarCss.hidden]: !this.state.open });
        return (
            <div
                ref={el => {
                    this.containerEl = el;
                }}
                css={sidebarCss.sidebar}
            >
                <div style={{ top: `${this.state.top}px` }} css={sidebarCss.sidebarMenu}>
                    <button css={buttonClass} onClick={this.toggleOpen} >+</button>
                    <div css={listClass}> {this.props.children}</div>
                </div>

            </div>
        );
    }
}