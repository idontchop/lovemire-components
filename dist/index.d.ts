/// <reference types="react" />
declare type Selections = {
    name: string | number;
    selected: boolean;
    title: string;
    value?: string | number;
};

/**
 * @todo Still produces a unique key error in some cases, numbers as name?
 * @param props
 * @returns
 */
declare const Rs: (props: {
    selections: Array<Selections>;
    select: any;
}) => JSX.Element;

declare const Switch: (props: any) => JSX.Element;

declare const Field: (props: FieldProps) => JSX.Element;
/**
 * @todo Make expandable.
 *
 * @param props
 */
declare const TextArea: (props: TextAreaProps) => JSX.Element;

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
declare const ReloadButton: (props: bigButtonProps) => JSX.Element;
declare const SelectButton: (props: selectButtonProps) => JSX.Element;

/**
 * TODO: animation... problem is we don't know the width so we'd have to look at the children
 * and calculate in order to have a fluid transition. scaleY is a quick hack
 *
 * @param props
 * @returns
 */
declare const CollaspableMenu: (props: CallaspableMenuProps) => JSX.Element;

declare const ConfigurableButton: (props: ConfigurableButtonProps) => JSX.Element;

declare const ConfirmationModal: (props: ConfirmationModalProps) => JSX.Element;

export { CollaspableMenu, ConfigurableButton, ConfirmationModal, DownArrowButton, Field, LeftArrowButton, NavButton, Rs as RadioSelection, ReloadButton, RightArrowButton, Select, SelectButton, Switch, TextArea };
