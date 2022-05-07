import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {NavButton} from "./NavButton";
import { Standard } from "./RadioSelection.stories";
import { ThemeProvider } from "styled-components";

export default {
  title: "NavButton",
  component: NavButton,
} as ComponentMeta<typeof NavButton>;

const Template: ComponentStory<typeof NavButton> = (args) => <NavButton {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  selected: false,
  children: "Flirt on the big title"
};

export const Switcher = () => {

  const [value,setValue] = React.useState(false)
  return <ThemeProvider theme={Standard}>
      <div style={{width: '120px'}}>
    <NavButton notifications={[59,22233333322]} selected={value} onClick={() => setValue(!value)} >Flirt</NavButton>
    <NavButton  notifications={[5,22233333322]} selected={!value} onClick={() => setValue(!value)} >Flirt on the big title</NavButton>
    </div>

  </ThemeProvider>
}