import React, { Component } from 'react';

import {
    HeadlineOneButton,
    HeadlineTwoButton,
    BlockquoteButton,
    CodeBlockButton,
} from 'draft-js-buttons';
import ReactDOM from "react-dom";
import ImageAdd from '../imageAdd/imageAdd'
import sidebarCss from './sidebar.module.css'
import classNames from "classnames";


let cx = classNames.bind(sidebarCss);

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

        const buttonClass = classNames(
            sidebarCss.button,
            { [sidebarCss.buttonOpen]: this.state.open }
        );

        const listClass = classNames(sidebarCss.items, { [sidebarCss.hidden]: !this.state.open });
        return (
            <div
                ref={el => {
                    this.containerEl = el;
                }}
                className={sidebarCss.sidebar}
            >
                <div style={{ top: `${this.state.top}px` }} className={sidebarCss.sidebarMenu}>
                    <button className={buttonClass} onClick={this.toggleOpen} >+</button>
                    <div className={listClass}> {this.props.children}</div>
                </div>

            </div>
        );
    }
}