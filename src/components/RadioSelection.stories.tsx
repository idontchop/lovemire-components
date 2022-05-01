import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import RadioSelection from "./RadioSelection";

let choice = false

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: "ReactComponentLibrary/RadioSelection",
  component: RadioSelection,
} as ComponentMeta<typeof RadioSelection>;

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template: ComponentStory<typeof RadioSelection> = (args) => <RadioSelection {...args} />;

export const HelloWorld = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
HelloWorld.args = {
  selections: [{selected: false, title: 'hello world', name: 'helloWorld'}],
  select: () => console.log("clicked")
};

export const ClickMe = Template.bind({});
ClickMe.args = {
  selections: [{selected: choice, title: 'hello world', name: 'helloWorld'},
  {selected: !choice, title: 'Choose me', name: 'choice'}
],
  select: (e: string) => console.log("changed")
};