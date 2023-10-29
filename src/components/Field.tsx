import React from 'react'
import styled from 'styled-components'

const enterPressed = (event: any) => {
    return event.keyCode === 13 
}

export const Field = (props: FieldProps) => {

    return <input
        className='lm-common-inputs lm-common-input' 
        onKeyDown={ (e) => enterPressed(e) && props.onComplete && props.onComplete() }
        type={ props.type ? props.type : "text"}
        onChange={ (e) => props.select(e.target.value) }
        value={props.value ? props.value : ""} />

}

/**
 * @todo Make expandable.
 * 
 * @param props 
 */
export const TextArea = (props: TextAreaProps) => {

    return <textarea
            className='lm-common-inputs lm-common-textarea'
            onBlur={ (e) => props.onComplete && props.onComplete(e.target.value)}
            value={props.value}
            onChange={ (e) => {
                props.onChange && props.onChange(e.target.value)
            }} />
            
}