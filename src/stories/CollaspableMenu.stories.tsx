import React from "react";
import { Meta } from "@storybook/react";
import { CollaspableMenu } from "../components/CollaspableMenu";
import { ReloadButton } from "../components/Buttons";

export default {
    title: "CollaspableMenu",
    component: CollaspableMenu,
  } as Meta<typeof CollaspableMenu>;

export const Collaspable = () => {

    return <CollaspableMenu title="Collaspable Menu" expanded={false}>
        <div><h1>Some Menu</h1><ReloadButton onClick={() => console.log("Reload Clicked")}>Reload</ReloadButton></div>
    </CollaspableMenu>



}

