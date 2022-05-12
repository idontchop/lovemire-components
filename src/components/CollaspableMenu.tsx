import React from 'react'
import styled, {useTheme} from 'styled-components'
import { LeftArrowButton, DownArrowButton } from './Buttons'

const StyledExpandableWrapper = styled.div`
    width: 100%;
    padding: 2%;
    box-sizing: border-box;
    cursor: pointer;

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

const StyledContentWrapper = styled.div<ContentDivProps>`
    box-sizing: border-box;
    border: 0;
    background-color: inherit;
    border-radius: 5px;
    width: 100%;
    overflow: hidden;
    transform-origin: top;
    transition:transform 0.3s ease-out;
    ${props => props.expanded ? `transform: scaleY(1);`
    : `transform: scaleY(0);` }
`
const StyledContentBorder = styled.div`
    box-sizing: border-box;
    border-radius: 5px;
    border: ${props => props.theme?.borders?.expandableMenu ? props.theme.borders.expandableMenu : '2px #303030 solid'};
    background-color: ${props => props.theme?.colors?.secondaryBackground ? props.theme.colors.secondaryBackground : '#e0e0e0'};
    width: 100%;
    overflow: hidden;

`

/**
 * TODO: animation... problem is we don't know the width so we'd have to look at the children
 * and calculate in order to have a fluid transition. scaleY is a quick hack
 * 
 * @param props 
 * @returns 
 */
export const CollaspableMenu = (props: CallaspableMenuProps) => {

    const [expanded, setExpanded] = React.useState(false)

    const theme = useTheme()

    return (
        <StyledExpandableWrapper className={props.className ? props.className : ""}
            onClick={ () => setExpanded(!expanded)}>
            <StyledBar>
                <h2>{props.title ? props.title : 'Menu Item'}</h2>
                { expanded && <DownArrowButton  /> }
                { !expanded && <LeftArrowButton /> }
            </StyledBar>
            <StyledContentBorder>
                {props.children && expanded ? 
                    <StyledContentWrapper expanded={expanded}>
                        {props.children}
                    </StyledContentWrapper>
                : <StyledContentWrapper> </StyledContentWrapper>}
            </StyledContentBorder>


        </StyledExpandableWrapper>
    )

}