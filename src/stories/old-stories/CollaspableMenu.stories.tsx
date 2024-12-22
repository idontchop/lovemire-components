import React from "react";
import { Meta } from "@storybook/react";
import { CollaspableMenu } from "../../components-old/CollaspableMenu";
import { ReloadButton } from "../../components-old/Buttons";

export default {
  title: "Old/CollaspableMenu",
  component: CollaspableMenu,
} as Meta<typeof CollaspableMenu>;

export const Collaspable = () => {
  return (
    <CollaspableMenu title="Collaspable Menu" expanded={false}>
      <div>
        <h1>Some Menu</h1>
        <ReloadButton onClick={() => console.log("Reload Clicked")}>
          Reload
        </ReloadButton>
      </div>
    </CollaspableMenu>
  );
};
