import { css } from '@emotion/core';

export default {

    classes: css`
.WeFigure{
    width: 100%;
    padding: 0;
    margin-block-start: 0;
    margin-block-end: 0;
    margin-inline-start: 0;
    margin-inline-end: 0;
    margin-top: 2.5em;
    margin-bottom: 2.5em;
}

.WeBlockquote {
  position: relative;
  padding-left: 1em;
  border-left: 0.2em solid #4d4d4d;
  font-family: 'Roboto', serif;
  font-size: 1.5em;
  font-weight: 100;
}


.WePlainText{ 
    font-size: 21px;
    margin-bottom: 29px;
    line-height: 1.58;
    letter-spacing: -.003em;
}

.WeSubTitle{
    font-family: 'Roboto', sans-serif;
    display: block;
    font-size: 34px;
    margin-top: 56px;
    margin-bottom: 0.4em;
}

.WeCode{
    margin: 0.5em 2px;
   }

pre:not(.WeCode){
    background: #280058;
    color: white;
    padding: 1em;
    border-radius: 5px;
    overflow: scroll;
    overflow-y: hidden;
    overflow-x: auto;
}`

}