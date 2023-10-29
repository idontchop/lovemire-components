import React from 'react'
import {Switch} from '../components/Switch'
import { StoryFn, Meta } from '@storybook/react';

export default {
    title: 'Switch',
    component: Switch
} as Meta<typeof Switch>;

const Template: StoryFn<typeof Switch> = (args) => <Switch {...args} />;

export const SwitchStoryLoad = () => {

    const [selected, setSelected] = React.useState(false)

    return <Switch style={{width: '80px', height: '60px'}} selected={selected} onClick={() => {console.log("clicked", selected); setSelected(!selected);}} />
}