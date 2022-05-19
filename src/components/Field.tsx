import React from 'react'
import styled from 'styled-components'

const StyledInput = styled.input`
    height: 30px;
    width: 90%;
    margin: 0;
    border: ${props => props?.theme?.colors?.p ? props.theme.colors.p : "blue"} 1px solid;
    padding: 5px;
    background-color: ${props => props?.theme?.colors?.primary ? props.theme.colors.primary : "lightblue"};
    color: ${props => props?.theme?.colors?.p ? props.theme.colors.p : "black"};
    border-radius: 5px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);
    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);
    -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);
`

const StyledTextArea = styled.textarea`
    height: 40px;
    width: 90%;
    resize: vertical;
    margin: 0;
    border: ${props => props?.theme?.colors?.p ? props.theme.colors.p : "blue"} 1px solid;
    padding: 5px;
    background-color: ${props => props?.theme?.colors?.primary ? props.theme.colors.primary : "lightblue"};
    color: ${props => props?.theme?.colors?.p ? props.theme.colors.p : "black"};
    border-radius: 5px;
    box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);
    -webkit-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);
    -moz-box-shadow: 0 0 2px 0 rgba(0,0,0,0.75);
`

export const Field = (props: {value: string, type?: string, select: any}) => {

    return <StyledInput 
        type={ props.type ? props.type : "text"}
        onChange={ (e) => props.select(e.target.value) }
        value={props.value ? props.value : ""} />


}

/**
 * @todo Make expandable.
 * 
 * @param props 
 */
export const TextArea = (props: {children: string, onBlur?: any, onChange: any}) => {

    return <StyledTextArea
            onBlur={e => props.onBlur(e)}
            onChange={ (e) => props.onChange(e.target.value)}>
            {props.children}
        </StyledTextArea>
}