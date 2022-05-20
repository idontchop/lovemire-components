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

export const StyledSelectButton = styled.button<styledSelectButtonProps>`
    outline: none;
    border-radius: 5px;
    border: ${props => props.theme.borders.button};
    padding: 5px;
    margin: 0px 3px;
    font-size: 0.6em;
    font-family: 'Roboto', serif;
    background-color: ${props => props.selected ? 
        '#a2dbc6' : props.theme.colors.button};
    color: black;
    ${props => !props.selected && `box-shadow: 1px 3px 1px #707070;`}

    input {
        height: 13px;
        width: 13px;
    }

    @media (max-width: 600px) {
        font-size: 0.8em;
    }

    p {
        font-family: 'Roboto', serif;
        display: inline-block;
        flex: 1 0 75%;
    }

    span {
        font-size: 1.8em;
        padding: 0 2px;
        margin: auto;
        flex: 0 1 25%;
    }



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

export const SelectButton = (props: selectButtonProps) => {

    return <StyledSelectButton 
        type={ props.type || "button" }
        selected={props.selected}
        onClick={props.onClick}>
        <div style={{display: "flex"}}>
            <p style={{fontSize: '1.2em'}}>{props.children}</p>
            
            {props.selected ? !props.noCheckMark && <span>✔</span> : 
                !props.noCheckBox && <span><input type="checkbox" /></span>}

        </div>
    </StyledSelectButton>
}