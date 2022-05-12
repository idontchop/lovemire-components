import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { ConfigurableButton } from "./ConfigurableButton";
import {ThemeProvider} from 'styled-components'
import {EmptyTheme, Standard} from './RadioSelection.stories'
import styled from "styled-components";
import { ReloadButton } from "./Buttons";

export default {
    title: "ConfigurableButton",
    component: ConfigurableButton,
  } as ComponentMeta<typeof ConfigurableButton>;

  // test passing class
const StyledConfigurableButton = styled(ConfigurableButton)`
  background-color: green;
`

export const Collaspable = () => {

    const onSelected = (arg: boolean =  true) => {
        console.log("Selected", arg)
    }

    return <ThemeProvider theme={Standard}>
    <ConfigurableButton
        onSelected={ onSelected }
        selectedBy={{hold: 3, doubleClick: false, unSelectedable: true}}
        onSelectedChildren={<div><h1>T</h1></div>}
        //keyDownChildren={<div><h1>O</h1></div>}
        >

        <div><h1>X</h1></div>
    </ConfigurableButton>
  </ThemeProvider>


}

const LoveMire = styled(ConfigurableButton)`
    outline: none;
    border: none;
    position: relative;

    &:after {
        content: '';
        position: absolute;
        right: 0;
        top: 20%;
        bottom: 20%;
        border-right: 2px ${props => props.theme?.colors?.primary || 'blue'} solid;
    
    }
`

export const LoveMireLikes = () => {

    const onSelected = (arg: boolean =  true) => {
        console.log("Selected", arg)
    }

    return <ThemeProvider theme={Standard}>
    <LoveMire
        onSelected={ onSelected }
        selectedBy={{hold: 1, doubleClick: false, unSelectedable: true}}
        onSelectedChildren={<div><h1>T</h1></div>}
        //keyDownChildren={<div><h1>O</h1></div>}
        >

        <div><h1>X</h1></div>
    </LoveMire>
  </ThemeProvider>


}