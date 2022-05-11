import React from "react";
import { ComponentStory, ComponentMeta } from "@storybook/react";
import { CollaspableMenu } from "./CollaspableMenu";
import {ThemeProvider} from 'styled-components'
import {EmptyTheme, Standard} from './RadioSelection.stories'

export default {
    title: "CollaspableMenu",
    component: CollaspableMenu,
  } as ComponentMeta<typeof CollaspableMenu>;

export const Collaspable = () => {

    return <ThemeProvider theme={EmptyTheme}>
    <CollaspableMenu title="Collaspable Menu" expanded={false}>
        <div><h1>Some Menu</h1><p>Content</p></div>
    </CollaspableMenu>
  </ThemeProvider>


}

