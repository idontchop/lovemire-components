import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import {Field} from "./Field";
import { Standard } from "./RadioSelection.stories";
import { ThemeProvider } from "styled-components";

export default {
  title: "Field",
  component: Field,
} as ComponentMeta<typeof Field>;

const Template: ComponentStory<typeof Field> = (args) => <Field {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  value: "Nathan Dunn",
  select: (e: any) => console.log("clicked",e)
};

export const Input = () => {

  const [value,setValue] = React.useState("User")
  return <ThemeProvider theme={Standard}>
    <Field value={value} select={(e: string) => {console.log("clicked",e); setValue(e);}} />
  </ThemeProvider>
}