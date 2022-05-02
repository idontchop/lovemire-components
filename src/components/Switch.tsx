import React from 'react'
import styled from 'styled-components'
import { SelectDivProps } from './RadioSelection.types'

const Wrapper = styled.div`
    height: 20px;
    width: 40px;
    display: inline-block;
`

const Bar = styled.span<SelectDivProps>`
    width: 100%;
    height: 80%;
    background-color: ${props => props.selected ? 
        props.theme?.selected ? props.theme.selected : '#cab5b5' :
        props.theme?.unselected ? props.theme.unselected : '#707070'};;
    border-radius: 500px;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    display: inline-block;
    margin: 0; padding: 0;
    transition: left 1s, right 1s, background-color 0.5s, border-color 0.5s, transform 0.5s;
`

const Tab = styled.span<SelectDivProps>`
    width: 50%;
    height: 120%;
    border-radius: 50%;
    border: 2px solid ${props => props.selected ? 
        props.theme?.selected ? props.theme.selected : '#cab5b5' :
        props.theme?.unselected ? props.theme.unselected : '#707070'};
    background-color: ${props => props.selected ? 
        props.theme?.selected ? props.theme.selectedHighlight : '#c9a5a5' :
        props.theme?.selected ? props.theme.unselectedHighlight : 'white'};
    position: absolute;
    top: 50%; 
    transform: translateY(-50%);
    margin: 0; padding: 0;
    ${props => props.selected ? 'right: 0;' : 'left : 0;'}
    transition: left 3s, right 3s, background-color 0.5s, border-color 0.5s, transform 0.5s;
`

export const Switch = (props: any) => {


    if ( props.className ) {
        return <div className={props.className}
            onClick={() => props.onClick && props.onClick()}>
            <Bar selected={props.selected}>
                <Tab selected={props.selected}/>
            </Bar>
        </div>
    } else return <Wrapper onClick={() => props.onClick()}>
            <Bar selected={props.selected}>
                <Tab selected={props.selected}/>
            </Bar>
        </Wrapper>
}