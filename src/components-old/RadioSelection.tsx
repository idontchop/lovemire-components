import React from 'react'
import { Selections} from './RadioSelection.types'

/**
 * @todo Still produces a unique key error in some cases, numbers as name?
 * @param props 
 * @returns 
 */
const Rs = (props: {selections: Array<Selections>, select: any}) => {

    if(!props?.selections || !props?.select) {
        return <div>Error: Check RadioSelection</div>
    }

    return (
        <div className='lm-radio-selection'>
            {props.selections.map( (e: Selections) => <div 
                className={`${e.selected ? 'lm-radio-selection--selected' : ''}`}
                key={e.name}
                onClick={() => props.select(e.name)}>
                <p>{e.title}</p>
            </div>)}
        </div>

    )
}

export default Rs;
