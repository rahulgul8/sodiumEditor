import { css } from '@emotion/core'

export default {

  buttonStyles: {
    buttonWrapper: 'InlineToolbar-buttonWrapper',
    button: 'InlineToolbar-button',
    active: 'InlineToolbar-active'
  },

  classes: css`
  .InlineToolbar-buttonWrapper {
    display: inline-block;
  }
  
  .InlineToolbar-button {
    background: #333;
    color: #ddd;
    font-size: 18px;
    border: 0;
    padding-top: 5px;
    vertical-align: bottom;
    height: 34px;
    width: 36px;
    border-radius: 4px;
  }
  
  .InlineToolbar-button svg {
    fill: #ddd;
  }
  
  .InlineToolbar-button:hover, .InlineToolbar-button:focus {
    background: #444;
    outline: 0; /* reset for :focus */
  }
  
  .InlineToolbar-active {
    color: #6a9cc9;
  }
  
  .InlineToolbar-active svg {
    fill: #6a9cc9;
  }
`
}