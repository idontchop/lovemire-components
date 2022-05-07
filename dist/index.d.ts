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

export { Field, NavButton, Rs as RadioSelection, Select, Switch };
