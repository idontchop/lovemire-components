import React from 'react'
import {Switch} from './Switch'
import styled from 'styled-components'

const WithCss = styled(Switch)`
    width: 100px;
    height: 50px;
    display: inline-block;
`

export default {
    title: 'Switch',
    component: Switch
}

export const SwitchStory = () => <Switch />

export const SwitchStoryWithCss = () => <WithCss selected />

export const SwitchStoryLoad = () => {

    const [selected, setSelected] = React.useState(false)

    return <Switch selected={selected} onClick={() => {console.log("clicked", selected); setSelected(!selected);}} />
}