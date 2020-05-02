import { css } from '@emotion/core'

export default {

  sidebar: css`
  position: relative;
`,
  sidebarMenu: css`
  float: left;
  left: -65px;
  position: absolute;
`,
  button: css`
  border-radius: 50%;
  border: none;
  font-size: 30px;
  height: 1.25em;
  width: 1.25em;
  outline: none;
  color: white;
  background: #333333;
`,
  buttonOpen: css`
  transform: rotate(45deg);
  `,

  items: css`
  margin-top: 0.75em;
  padding: 0.25em;
  text-align: center;
  background: #333333;
  width: 2em;
  border-radius: 5px;
  position: relative;
  padding-top: 0.5em;
  padding-bottom: 0.5em;

  & :after{
    content: "";
    position: absolute;
    top: -10px;
    right: 10px;
    border-top: none;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
    border-bottom: 10px solid #333333;
    margin: 0 auto;
  } 
  `,

  hidden: css` display: none; `,

  child: css`
    background: #333333;
    margin-top: 0.25em;
    margin-bottom: 0.25em;
  `,

}               
