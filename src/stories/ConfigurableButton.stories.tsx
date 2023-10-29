import React from "react";
import { Meta } from "@storybook/react";
import { ConfigurableButton } from "../components/ConfigurableButton";

export default {
    title: "ConfigurableButton",
    component: ConfigurableButton,
  } as Meta<typeof ConfigurableButton>;

export const Collaspable = () => {

    const onSelected = (arg: boolean =  true) => {
        console.log("Selected", arg)
    }

    return (
    <ConfigurableButton
        onSelected={ onSelected }
        selectedBy={{hold: 3, doubleClick: true, unSelectable: false}}
        onSelectedChildren={<div><h1>T</h1></div>}
        //keyDownChildren={<div><h1>O</h1></div>}
        >

        <div><h1>X</h1></div>
    </ConfigurableButton>)
}

export const LoveMireLikes = () => {

    const [selected, setSelected] = React.useState(false);

    const onSelected = (arg: boolean =  true) => {
        console.log("Selected", arg)
        setSelected(arg)
    }

    return (
    <ConfigurableButton
        onSelected={ onSelected }
        selected={selected}
        selectedBy={{hold: 1, doubleClick: true, unSelectable: true}}
        onSelectedChildren={<div><h1>T</h1></div>}
        keyDownChildren={<div><h1>O</h1></div>}
        >
        <div><h1>X</h1></div>
    </ConfigurableButton>)


}