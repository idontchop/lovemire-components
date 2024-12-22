import React, {useState, useRef} from 'react'
import '../theme/style';

export const ConfigurableButton = (props: ConfigurableButtonProps) => {

    let doubleClickInterval = 250   // millis

    const hold = (props.selectedBy?.hold && props.selectedBy.hold > 0 && props.selectedBy.hold <= 10) ? props.selectedBy.hold : 0;
    const [isHeld, setHeld] = useState(false)
    const selected = () => props.selected
    const timeout:any = useRef()
    const doubleClickDetector: any = useRef()

    const onKeyDown = (e:any) => {
        e.preventDefault()
        if (hold > 0 && (!selected() || props.selectedBy?.unSelectable) ) {  
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

    const onDoubleClick = () => props.selectedBy?.doubleClick && onSelected()

    const onSelected = () => {

        // Cannot be unselected via this method, is this what we want?
        if (!selected()) {
            setHeld(false)
            props.onSelected()
        } else if (props.selectedBy?.unSelectable) {
            setHeld(false)
            if (props.onUnSelect) props.onUnSelect()
            else props.onSelected(false)
        }        
    }

    let animationStyle = isHeld ? `hold-button ${props.selectedBy?.blinkDuration ? 
        props.selectedBy.blinkDuration : props.selectedBy?.hold ? props.selectedBy.hold :
        '1'}s infinite alternate` : ''

    return (
    <button className={props.className && props.className}
        style={{animation: animationStyle,
            userSelect: 'none',
            backgroundColor: 'inherit',...(props.style && props.style)}}
        onTouchStart={onKeyDown}
        onMouseDown={onKeyDown}
        onMouseUp={onKeyUp}
        onMouseLeave={onKeyUp}
        onTouchEnd={onKeyUp}
        onClick={onClick}
        >
        { ((!selected() || !props.onSelectedChildren) && // props children if not selected or no other children
            (!isHeld || !props.keyDownChildren) ) && props.children }
        { (isHeld && props.keyDownChildren) && props.keyDownChildren}
        { (selected() && props.onSelectedChildren) && !(isHeld && props.keyDownChildren)
             && props.onSelectedChildren}
    </button>)

}