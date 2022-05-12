import React from 'react'
import styled from 'styled-components'

let ArrowDown = styled.div`
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;
    cursor: pointer;

    border-top: 10px solid #CAB5B5;
`;

let ArrowRight = styled.div`
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent;

    border-left: 10px solid #CAB5B5;
`;

let ArrowLeft = styled.div`
    width: 0; 
    height: 0; 
    border-top: 10px solid transparent;
    border-bottom: 10px solid transparent; 
    cursor: pointer;

    border-right:10px solid #CAB5B5; 
`;

const StyledReloadButton = styled.button`
    width: 250px;
    border-radius: 5px;
    display: block;
    margin: 0 auto;
    font-size: 1.2em;
    font-family: ${props => props.theme?.fonts?.titleScript ? props.theme.fonts.titleScript : 'serif'};
    padding: 10px 25px;
    border: ${props => props.theme?.borders?.expandableMenu ? props.theme.borders.expandableMenu : '2px #303030 solid'};
    background-color: ${props => props.theme?.colors?.primary ? props.theme.colors.primary : 'darkseagreen'};
    color: ${props => props.theme?.colors?.secondary ? props.theme.colors.secondary : '#707070'};
    cursor: pointer;
`

/**
 * Buttons from lovemire/styles/Buttons.js
 * 
 * @param props 
 * @returns 
 */
export const RightArrowButton = (props: buttonProps) => {
    return <button onClick={(e) => props.onClick(e)}><ArrowRight /></button>
}

export const DownArrowButton = (props: buttonProps) => {
    return <button  style={{border: "none", background: "none"}}
         onClick={(e) => props.onClick(e)}><ArrowDown /></button>
}

export const LeftArrowButton = (props: buttonProps) => {
    return <button style={{border: "none", background: "none"}}
        onClick={(e) => props.onClick(e)}><ArrowLeft /></button>
}

export const ReloadButton = (props: bigButtonProps) => {
    return <StyledReloadButton 
        className={props.className? props.className : ""}
        onClick={() => props.onClick()}>
            {props.children}
        </StyledReloadButton>
}