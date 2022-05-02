import React from 'react'
import styled from 'styled-components'
import { Selections, SelectDivProps } from './RadioSelection.types'

const WrapperDiv = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: center;
    padding: 5px;
    border: color: ${props => props.theme?.borders?.secondary ? 
        props.theme.borders.secondary : 'blue'};
    background-color: ${props => props.theme?.colors?.primary ? props.theme.colors.primary : '#ebe6e6'};
    border-radius: 5px;
`

const SelectDiv = styled.div<SelectDivProps>`
    background-color: ${props => props.selected ? '#CAB5B5' : 'inherit'};
    color: ${props => props?.theme?.colors?.p ? props.theme.colors.p : 'blue'}; 
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8em;
    min-width: 40%;
    ${props => !props.selected && 'cursor: pointer;'}

    p {
        margin: 5px;
        padding: 0;
        color: ${props => props?.theme?.colors?.p ? props.theme.colors.p : 'blue'};
        font-size: 1em;
        font-weight: lighter;
        font-family: ${props => props.theme?.fonts?.p ? props.theme.fonts.p : "'Roboto', serif"};
    }

`

// TODO: selection should take text or JSX
const Rs = (props: {selections: Array<Selections>, select: any}) => {

    if(!props?.selections || !props?.select) {
        return <div>Error: Check RadioSelection</div>
    }

    return (
        <WrapperDiv>
            {props.selections.map( (e: Selections) => <SelectDiv 
                selected={e.selected}
                onClick={() => props.select(e.name)}>
                <p>{e.title}</p>
            </SelectDiv>)}
        </WrapperDiv>

    )
}

export default Rs;
