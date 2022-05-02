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

export { Rs as RadioSelection, Switch };
