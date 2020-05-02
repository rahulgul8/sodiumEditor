import React, { Component } from 'react';
import styles from './imageAdd.style';
import { mscPrompt } from 'medium-style-confirm'
import Image from '../../icons/image'
/** @jsx jsx */
import { jsx } from '@emotion/core'

export default class ImageAdd extends Component {

    constructor() {
        super();
        this.state = {
            showModal: false,
            url: '',
            open: false
        };

        this.handleOpenModal = this.handleOpenModal.bind(this);
    }

    handleOpenModal() {
        // this.setState({ showModal: true });
        mscPrompt({
            title: '',

            subtitle: 'Enter the URL to add Image',  // default: ''

            okText: 'Add',    // default: OK

            cancelText: 'Cancel', // default: Cancel,

            placeholder: 'Image url', // default: empty, placeholder for input text box

            onOk: (val) => {
                this.setState({ url: val });
                this.addImage();
            },

        });
    }

    addImage = () => {
        const { editorState, onChange } = this.props;
        onChange(this.props.modifier(editorState, this.state.url));
    };


    render() {
        return (
            <button
                onClick={this.handleOpenModal} css={styles.button}
            ><Image css={styles.icon} /></button>
        );
    }
}