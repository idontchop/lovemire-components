import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CollaspableMenu } from "./CollaspableMenu";
import {ThemeProvider} from 'styled-components'
import {Standard} from './RadioSelection.stories'

export default {
    title: "CollaspableMenu",
    component: CollaspableMenu,
  } as ComponentMeta<typeof CollaspableMenu>;

export const Collaspable = () => {

    return <ThemeProvider theme={Standard}>
    <CollaspableMenu title="Collaspable Menu" expanded={false}>
        <div><h1>Some Menu</h1><p>Content</p></div>
    </CollaspableMenu>
  </ThemeProvider>


}

