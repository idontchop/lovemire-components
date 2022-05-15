import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { SelectButton } from "./Buttons";
import {ThemeProvider} from 'styled-components'
import {EmptyTheme, Standard} from './RadioSelection.stories'
import styled from "styled-components";
import { ReloadButton } from "./Buttons";

export default {
    title: "Buttons",
    component: SelectButton,
  } as ComponentMeta<typeof SelectButton>;


export const SelectMe = () => {

    const [value, setvalue] = React.useState(false)

    return <ThemeProvider theme={Standard}>
     <SelectButton 
        onClick={ () => setvalue(!value)}
        selected={value}><p>Click me!</p></SelectButton>
  </ThemeProvider>


}