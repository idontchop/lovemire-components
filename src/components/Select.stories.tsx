import React from 'react'
import { Select } from './Select'
import { ComponentStory, ComponentMeta } from "@storybook/react";
import styled from 'styled-components'

export default {
    title: 'Select',
    component: Select
}

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const SelectPlain = Template.bind({})
SelectPlain.args = {
  selections: [
      {selected: false, title: 'All', name: 'all', value: 0},
      {selected: false, title: 'New', name: 'new', value: 1},
      {selected: false, title: 'None', name: 'none', value: 2}

    ],
  select: (e: any) => console.log("clicked", e)
};

