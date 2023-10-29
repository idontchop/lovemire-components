import React from 'react'
import styled from 'styled-components'
import { LeftArrowButton, DownArrowButton } from './Buttons'

/**
 *  * 
 * @param props 
 * @returns 
 */
export const CollaspableMenu = (props: CallaspableMenuProps) => {

    const [expanded, setExpanded] = React.useState(false)

    const expand = () => {
        let newExpanded = !expanded;

        setExpanded(newExpanded)
        if (props.expandedCallBack) {
            props.expandedCallBack(newExpanded)
        }
    }

    return (
        <div className={`lm-collapsible-menu ${expanded ? 'lm-collapsible-menu--expanded' : ''} ${props.className ? props.className : ""}`}>
            <div onClick={ () => expand()}>
                <h2>{props.title ? props.title : 'Menu Item'}</h2>
                { expanded && <DownArrowButton  /> }
                { !expanded && <LeftArrowButton /> }
            </div>
            <div>
                {props.children && 
                    <div>
                        {expanded && props.children}
                    </div>
                }
            </div>
        </div>
    )

}