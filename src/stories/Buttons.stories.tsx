import React from "react";
import { Meta } from "@storybook/react";
import { DownArrowButton, LeftArrowButton, ReloadButton, RightArrowButton, SelectButton } from "../components/Buttons";
import { ConfigurableButton } from "../components";
import '../theme/style'

export default {
    title: "Buttons",
    component: SelectButton,
  } as Meta<typeof SelectButton>;


export const SelectMe = () => {

    const [value, setvalue] = React.useState(false)

    return <SelectButton 
        onClick={ () => setvalue(!value)}
        selected={value}>Click me!</SelectButton>

}

export const Reload =  () => {

  return <ReloadButton onClick={() => console.log("yes")}>
    Reload!
    </ReloadButton>
}

export const Arrows = () => {

  return <>
    <LeftArrowButton />
    <DownArrowButton />
    <RightArrowButton />
  </>
}