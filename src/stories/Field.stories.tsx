import React from "react";
import { StoryFn } from "@storybook/react";
import {Field, TextArea} from "../components/Field";
import '../theme/style';

export default {
  title: "Field",
  component: Field,
};

const Template: StoryFn<typeof Field> = (args) => <Field {...args} />;

export const HelloWorld = Template.bind({});
HelloWorld.args = {
  value: "Nathan Dunn",
  select: (e: any) => console.log("clicked",e)
};

export const Input = () => {

  const [value,setValue] = React.useState("User")
  return <Field value={value} select={(e: string) => {console.log("clicked",e); setValue(e);}} />
}

export const BigInput = () => {

  const [value, setvalue] = React.useState("TextArea")

    return <>
      <div style={{backgroundColor: 'aqua', overflow: 'none'}}>
      <p>Text Before</p>
      <button onClick={ () => setvalue("Message 1")}>Big</button>
      <button onClick={ () => setvalue("2")}>2</button>
      <button onClick={ () => setvalue("")}>clear</button>
      <TextArea onChange={ (e:any) => setvalue(e)} value={value}>{value}</TextArea>
      <p>TextAfter, expandable over?</p>
      </div>
    </>
}