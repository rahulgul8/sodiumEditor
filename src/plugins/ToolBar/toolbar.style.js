import { css } from '@emotion/core'

export default {

  style: {
    toolbar: 'InlineToolbar-toolbar',
  },

  classes: css`
  .InlineToolbar-toolbar {
    left: 50%;
    transform: translate(-50%) scale(0);
    position: absolute;
    border: 1px solid #111;
    background: #333;
    border-radius: 4px;
    box-shadow: 0px 1px 3px 0px rgba(220,220,220,1);
    z-index: 2;
    box-sizing: border-box;
  }
  
  .InlineToolbar-toolbar:after, .InlineToolbar-toolbar:before {
    top: 100%;
    left: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;
    position: absolute;
    pointer-events: none;
  }
  
  .InlineToolbar-toolbar:after {
    border-color: rgba(255, 255, 255, 0);
    border-top-color: #333;
    border-width: 4px;
    margin-left: -4px;
  }
  
  .InlineToolbar-toolbar:before {
    border-color: rgba(221, 221, 221, 0);
    border-top-color: #111;
    border-width: 6px;
    margin-left: -6px;
  }
`
}