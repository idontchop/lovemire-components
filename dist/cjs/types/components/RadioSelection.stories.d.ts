/// <reference types="react" />
import { ComponentStory, ComponentMeta } from "@storybook/react";
export declare const Standard: {
    colors: {
        primary: string;
        background: string;
        button: string;
        buttonSelected: string;
        p: string;
        selected: string;
        unselected: string;
        selectedHighlight: string;
        unselectedHighlight: string;
    };
    borders: {
        primary: string;
        secondary: string;
        navButton: string;
        button: string;
    };
    fonts: {
        title: string;
        subtitle: string;
        bio: string;
        button: string;
        p: string;
    };
};
declare const _default: ComponentMeta<(props: {
    selections: import("./RadioSelection.types").Selections[];
    select: any;
}) => JSX.Element>;
export default _default;
export declare const HelloWorld: ComponentStory<(props: {
    selections: import("./RadioSelection.types").Selections[];
    select: any;
}) => JSX.Element>;
export declare const ClickMe: ComponentStory<(props: {
    selections: import("./RadioSelection.types").Selections[];
    select: any;
}) => JSX.Element>;
export declare const RadioLoaded: () => JSX.Element;
