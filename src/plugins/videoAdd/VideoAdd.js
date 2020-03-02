import React, { Component } from 'react';
import styles from './addVideo.module.css';
import Video from '../../icons/video'

export default class VideoAdd extends Component {
    // Start the popover closed
    state = {
        url: '',
        open: false,
    };

    // When the popover is open and users click anywhere on the page,
    // the popover should close
    componentDidMount() {
        document.addEventListener('click', this.closePopover);
    }

    componentWillUnmount() {
        document.removeEventListener('click', this.closePopover);
    }

    // Note: make sure whenever a click happens within the popover it is not closed
    onPopoverClick = () => {
        this.preventNextClose = true;
    };

    openPopover = () => {
        if (!this.state.open) {
            this.preventNextClose = true;
            this.setState({
                open: true,
            });
            let url = window.prompt('url');
            debugger;
            if (url) {
                this.setState({ url: url });
                this.addVideo();
            }
        }
    };

    closePopover = () => {
        if (!this.preventNextClose && this.state.open) {
            this.setState({
                open: false,
            });
        }

        this.preventNextClose = false;
    };

    addVideo = () => {
        const { editorState, onChange } = this.props;
        onChange(this.props.modifier(editorState, { src: this.state.url }));
    };

    changeUrl = (evt) => {
        this.setState({ url: evt.target.value });
    };

    render() {
        const popoverClassName = this.state.open ?
            styles.addVideoPopover :
            styles.addVideoClosedPopover;
        const buttonClassName = this.state.open ?
            styles.addVideoPressedButton :
            styles.addVideoButton;

        return (
            <div className={styles.addVideo} >
                <button
                    className={buttonClassName}
                    onMouseUp={this.openPopover}
                    type="button"
                >
                    <Video></Video>
                </button>
            </div>
        );
    }
}