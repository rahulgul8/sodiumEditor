import { css } from '@emotion/core';

export default {

  editor: css`
    cursor: text;
    background: #fefefe;
    min-height: 140px;
  `,

  titleEditor: css`
    cursor: text;
    background: #fefefe;
    div {
      text-align: center;
    }
  `,

  titleClassName: 'WeEditor-Public-Title',

  titleClass: css`
    .WeEditor-Public-Title{
      font-size: 2em;
      font-family: inherit;
      margin-top: 1em;
      margin-bottom: 1em;
      font-weight: bold;
    }

    .WeEditor-Public-Title:focus{
        outline: none;
    }
`
}