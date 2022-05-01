import React from 'react'
import styled from 'styled-components'
import { Selections, SelectDivProps } from './RadioSelection.types'

const WrapperDiv = styled.div`
    display: flex;
    align-items: flex-start;
    text-align: center;
    padding: 5px;
    border: #86888B 1px solid;
    background-color: #ebe6e6;
    border-radius: 5px;
`

const SelectDiv = styled.div<SelectDivProps>`
    background-color: ${props => props.selected ? '#CAB5B5' : 'inherit'};
    color: black; 
    padding: 5px;
    border-radius: 5px;
    font-size: 0.8em;
    min-width: 40%;

    p {
        margin: 5px;
        padding: 0;
        color: #282c34;
        font-size: 1em;
        font-weight: lighter;
        font-family: 'Roboto', serif;
    }

`

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
