import React from 'react'
import styled from 'styled-components'
import { Selections } from './RadioSelection.types'

const StyledSelect = styled.select `
    outline: none;
    border: none;
    border-bottom: 2px solid ${props => props?.theme?.colors?.p ? props.theme.colors.p : 'blue'};  
    text-align: center;
    cursor: pointer;
    background-color: inherit;
    color: ${props => props?.theme?.colors?.p ? props.theme.colors.p : 'blue'};
    font-family: ${props => props?.theme?.fonts?.p ? props.theme.fonts.p : "serif"};

`
export const Select = (props: {selections: Array<Selections>, select: any}) => {

    const onchanged = (e: any) => {

        if(props.select) {
            props.select(e.target.value);
        }

    }

    return <StyledSelect onChange={onchanged} >
        { props.selections && props.selections.map ( (e: Selections) => <option key={e.name} 
            value={e.value ? e.value : e.name}>{e.title}</option>)}
    </StyledSelect>
}