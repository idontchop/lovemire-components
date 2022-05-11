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