import React from 'react'
import styled, {useTheme} from 'styled-components'
import { LeftArrowButton, DownArrowButton } from './Buttons'

const StyledExpandableWrapper = styled.div`
    width: 100%;


`

const StyledBar = styled.div`
    width: 100%;
    font-family: ${props => props.theme?.fonts?.subtitle ? props.theme.fonts.subtitle : 'serif'};
    text-align: left;
    background-color: inherit;
    padding: 0; margin: 0; overflow: none;
    display: flex;
    align-items: center;
    user-select: none;
    flex-grow: 0;

    h2 {
        color: ${props => props.theme?.colors?.title ? props.theme.colors.title : '#707070'};
        font-size: 1.2em;
        font-weight: normal;
        font-family: ${props => props.theme?.fonts?.titleScript ? props.theme.fonts.titleScript : 'serif'};
        display: inline-block;
        margin: auto auto auto 15px;
        flex-grow: 1;
        padding: 10px 2px;

    }

    p {
    }

`

const StyledContentWrapper = styled.div`
    box-sizing: border-box;
    border: ${props => props.theme?.borders?.expandableMenu ? props.theme.borders.expandableMenu : '2px #303030 solid'};
    background-color: ${props => props.theme?.colors?.secondaryBackground ? props.theme.colors.secondaryBackground : '#e0e0e0'};
    border-radius: 5px;
    min-height: 1px;
    width: 100%;
    overflow: hidden;
`

export const CollaspableMenu = (props: {title?: string, children?: any, expanded?: boolean}) => {

    const [expanded, setExpanded] = React.useState(false)

    const theme = useTheme()


    console.log(theme)
    return (
        <StyledExpandableWrapper>
            <StyledBar>
                <h2>{props.title ? props.title : 'Menu Item'}</h2>
                { expanded && <DownArrowButton onClick={() => setExpanded(false)} /> }
                { !expanded && <LeftArrowButton onClick={() => setExpanded(true)} /> }
            </StyledBar>
            {props.children && expanded ? 
                <StyledContentWrapper>
                    {props.children}
                </StyledContentWrapper>
            : <StyledContentWrapper> </StyledContentWrapper>}


        </StyledExpandableWrapper>
    )

}