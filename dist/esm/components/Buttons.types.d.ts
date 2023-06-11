/// <reference types="react" />
type buttonProps = {
    onClick?: any;
};
type bigButtonProps = {
    onClick: any;
    children: string | number | JSX.Element | JSX.Element[];
    className?: string;
};
type selectButtonProps = {
    selected: boolean;
    type?: "button" | "submit" | "reset" | undefined;
    children: string;
    onClick: any;
    className?: string;
    noCheckBox?: boolean;
    noCheckMark?: boolean;
};
type styledSelectButtonProps = {
    selected: boolean;
};
