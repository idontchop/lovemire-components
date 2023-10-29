import React from 'react'

/**
 * Buttons from lovemire/styles/Buttons.js
 * 
 * @param props 
 * @returns 
 */
export const RightArrowButton = (props: buttonProps) => {
    return <button className='lm-common-arrow lm-common-arrow--right'
    onClick={(e) => props.onClick(e)}><div /></button>
}

export const DownArrowButton = (props: buttonProps) => {
    return <button className='lm-common-arrow lm-common-arrow--down'
         onClick={(e) => props.onClick(e)}><div /></button>
}

export const LeftArrowButton = (props: buttonProps) => {
    return <button className='lm-common-arrow lm-common-arrow--left'
        onClick={(e) => props.onClick(e)}><div /></button>
}

export const ReloadButton = (props: bigButtonProps) => {
    return <button 
        className={`lm-common-button lm-reload-button ${props.className? props.className : ""}`}
        onClick={() => props.onClick()}>
            {props.children}
        </button>
}

export const SelectButton = (props: selectButtonProps) => {

    return <button 
        className={`lm-common-button lm-select-button ${props.selected ? 'lm-select-button--selected' : ''}`}
        type={ props.type || "button" }
        onClick={props.onClick}>
        <div style={{display: "flex"}}>
            <p style={{fontSize: '1.2em'}}>{props.children}</p>
            
            {props.selected ? !props.noCheckMark && <span>✔</span> : 
                !props.noCheckBox && <span><input type="checkbox" /></span>}

        </div>
    </button>
}