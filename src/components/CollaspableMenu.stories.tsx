import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CollaspableMenu } from "./CollaspableMenu";
import {ThemeProvider} from 'styled-components'
import {EmptyTheme, Standard} from './RadioSelection.stories'
import styled from "styled-components";
import { ReloadButton } from "./Buttons";

export default {
    title: "CollaspableMenu",
    component: CollaspableMenu,
  } as ComponentMeta<typeof CollaspableMenu>;

  // test passing class
const StyledCollaspableMenu = styled(CollaspableMenu)`
  background-color: green;
`

export const Collaspable = () => {

    return <ThemeProvider theme={Standard}>
    <CollaspableMenu title="Collaspable Menu" expanded={false}>
        <div><h1>Some Menu</h1><ReloadButton onClick={() => console.log("Reload Clicked")}>Reload</ReloadButton></div>
    </CollaspableMenu>
  </ThemeProvider>


}

