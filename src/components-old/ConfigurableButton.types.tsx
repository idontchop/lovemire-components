type ConfigurableButtonProps = {
    className?: string,
    style?: any,
    selected?: boolean,
    onKeyDown?: () => void,
    /** fired when button's conditions are satisifed. For a simple button
     * it would be fired on click. For a hold button, it is fired after
     * total hold length, passes boolean in parameter */
    onSelected: (arg?: boolean) => void,
    onUnSelect?: () => void,
    /** Conditions that allow selecting, if this is ommitted or empty, the
     * button will fire with a simple click,
     * unSelectable allows unselect via the same settings
     *  NOTE: unSelectable is false by default, but if selectedBy
     *  is not provided, click events will unselect 
     * blinkDuration: Sets the animation length. If this does not exists, will = hold */
    selectedBy?: { hold?: number, 
        doubleClick?: boolean,
        unSelectable?: boolean,
        blinkDuration?: number},

    children: JSX.Element | JSX.Element[] | string,
    keyDownChildren?: JSX.Element | JSX.Element[] | string,
    /** Will replace children when events are triggered if exists. Can also
    * change children on status change */
    onSelectedChildren?: JSX.Element | JSX.Element[] | string,

    
}