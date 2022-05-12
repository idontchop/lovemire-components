type ConfigurableButtonProps = {
    className?: string,
    style?: any,
    /* allows for styling with styled-components */
    selected?: boolean,
    /* sets status of button */
    onKeyDown?: () => void,
    /* a method to be called when button is pressed but not selected
     * For example, when the button must be held for a second, this
     * is fired when pressed
     * can be ommitted if selectedBy is omitted */
    onSelected: (arg?: boolean) => void,
    /* fired when button's conditions are satisifed. For a simple button
     * it would be fired on click. For a hold button, it is fired after
     * total hold length, passes boolean in parameter */
    onUnSelect?: () => void,
    /* fired when unselected, not required as onSelected passes boolean */
    selectedBy?: { hold?: number, 
        doubleClick?: boolean,
        unSelectedable?: boolean,
        blinkDuration?: number},
    /* Conditions that allow selecting, if this is ommitted or empty, the
     * button will fire with a simple click,
     * unSelectable allows unselect via the same settings
     *  NOTE: unSelectable is false by default, but if selectedBy
     *  is not provided, click events will unselect 
     * blinkDuration: Sets the animation length. If this does not exists, will = hold */
    children: JSX.Element | JSX.Element[] | string,
    /* children must be passed, can be updated when events are fired,
     * but easier to use specific children */
    keyDownChildren?: JSX.Element | JSX.Element[] | string,
    onSelectedChildren?: JSX.Element | JSX.Element[] | string,
    /* Will replace children when events are triggered if exists. Can also
     * change children on status change */
    
}