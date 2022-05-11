/// <reference types="react" />
declare type Selections = {
    name: string | number;
    selected: boolean;
    title: string;
    value?: string | number;
};

declare const Rs: (props: {
    selections: Array<Selections>;
    select: any;
}) => JSX.Element;

declare const Switch: (props: any) => JSX.Element;

declare const Field: (props: {
    value: string;
    select: any;
}) => JSX.Element;

declare const Select: (props: {
    selections: Array<Selections>;
    select: any;
}) => JSX.Element;

declare const NavButton: (props: navButtonProps) => JSX.Element;

/**
 * Buttons from lovemire/styles/Buttons.js
 *
 * @param props
 * @returns
 */
declare const RightArrowButton: (props: buttonProps) => JSX.Element;
declare const DownArrowButton: (props: buttonProps) => JSX.Element;
declare const LeftArrowButton: (props: buttonProps) => JSX.Element;

declare const CollaspableMenu: (props: {
    title?: string | undefined;
    children?: any;
    expanded?: boolean | undefined;
}) => JSX.Element;

export { CollaspableMenu, DownArrowButton, Field, LeftArrowButton, NavButton, Rs as RadioSelection, RightArrowButton, Select, Switch };
