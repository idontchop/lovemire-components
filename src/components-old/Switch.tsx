import React from 'react'
import { SwitchProps } from './Switch.types'


export const Switch = ({className, style, onClick, selected}: SwitchProps
    ) => {

        return <div style={style} className={`lm-switch ${className ? className : ''}`}
            onClick={() => onClick && onClick()}>
            <span className={`lm-switch-bar ${selected ? 'lm-switch-bar--selected' : ''}`}>
                <span className={`lm-switch-tab ${selected ? 'lm-switch-tab--selected' : ''}`} />
            </span>
        </div>
}