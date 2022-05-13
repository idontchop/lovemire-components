import React, {useState, useEffect, useRef} from 'react'
import styled, {keyframes, css} from 'styled-components'

const holdFrames = (props: any) => keyframes`
    from {
        background-color: none;
    }
    to {
        background-color: ${props.theme?.colors?.selectedHighlight ?
            props.theme.colors.selectedHighlight : 'blue'};
    }
`

const findDuration = (props: any) => {
    
    if (props.duration && props.duration > 0 && props.duration < 100) {
        let durationString = props.duration.toString() + 's'
        return durationString
    } else {
        return '1s'
    }
}

const StyledButton = styled.button<{hold?: boolean, duration?: number}>`
    user-select: none;
    background-color: inherit;
    ${props => props.hold && css`animation: ${findDuration} ${holdFrames} infinite alternate;`}

`

export const ConfigurableButton = (props: ConfigurableButtonProps) => {

    let doubleClickInterval = 250   // millis

    const [hold, setHold] = useState(0)
    const [isHeld, setHeld] = useState(false)
    const [doubleClick, setDoubleClick] = useState(false)
    const [selected, setSelected] = useState(false)
    const [unSelectable, setUnselectable] = useState(true)  // defaults to true, default
                                                            // false if selectedBy exists

    const timeout:any = useRef()
    const doubleClickDetector: any = useRef()

    const onKeyDown = (e:any) => {

        e.preventDefault()

        // If hold is set, a long key press will trigger
        // selection
        if (hold > 0 && (!selected || unSelectable) ) {  
            setHeld(true)
            timeout.current = setTimeout( () => {
                onSelected()
            }, hold * 1000 )
        }

    }
    
    const onKeyUp = () => {
        setHeld(false)
        timeout.current && clearTimeout(timeout.current)
    }

    const onClick = () => {

        if ( !props.selectedBy?.hold && !props.selectedBy?.doubleClick) {
            // no configurations set, so single click will select and unselect
            onSelected()
        } else if(doubleClickDetector.current) {
            // detects double clicks
            onDoubleClick()
            clearTimeout(doubleClickDetector.current)
            doubleClickDetector.current = null

        } else {

            doubleClickDetector.current = setTimeout( () => {
                doubleClickDetector.current = null
            },doubleClickInterval)

        }
    }

    const onDoubleClick = () => {

        if (doubleClick) {
            onSelected()
        }
    }

    const onSelected = () => {

        // Cannot be unselected via this method, is this what we want?
        if (!selected) {
            setSelected(true)
            setHeld(false)
            props.onSelected()
        } else {

            if (unSelectable) {
                setSelected(false)
                setHeld(false)

                if (props.onUnSelect) props.onUnSelect()
                else props.onSelected(false)

            }
        }
    }


    /**
     * USE EFFECTS
     */

    /**
     * Validates props
     */
    useEffect( () => {

        if ( props.selected ) {
            setSelected(true)
        } else {
            setSelected(false)
        }

        if ( props.selectedBy ) {

            // selectedBy.hold must be between 0 and 10 seconds
            if (props.selectedBy.hold && props.selectedBy.hold > 0 &&
                props.selectedBy.hold <= 10) {
                    setHold(props.selectedBy.hold)
            } else {
                setHold(0)
            }

            // double click to select
            setDoubleClick(props.selectedBy.doubleClick ? true : false)

            // unselectedable allows a hold or double click to unselect
            setUnselectable(props.selectedBy.unSelectedable ? true : false)

        }
        
    },[props])

    return <StyledButton className={props.className && props.className}
        style={props.style && props.style}
        hold={isHeld}
        duration={props.selectedBy?.blinkDuration ? 
            props.selectedBy.blinkDuration : props.selectedBy?.hold ? props.selectedBy.hold :
            1 }
        onTouchStart={onKeyDown}
        onMouseDown={onKeyDown}
        onMouseUp={onKeyUp}
        onMouseLeave={onKeyUp}
        onTouchEnd={onKeyUp}
        onClick={onClick}
        >
        { ((!selected || !props.onSelectedChildren)&& // props children if not selected or no other children
            (!isHeld || !props.keyDownChildren) ) && props.children }
        { (isHeld && props.keyDownChildren) && props.keyDownChildren}
        { (selected && props.onSelectedChildren) && !(isHeld && props.keyDownChildren)
             && props.onSelectedChildren}
    </StyledButton>

}