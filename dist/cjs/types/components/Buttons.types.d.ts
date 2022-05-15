/// <reference types="react" />
declare type buttonProps = {
    onClick?: any;
};
declare type bigButtonProps = {
    onClick: any;
    children: string | number | JSX.Element | JSX.Element[];
    className?: string;
};
declare type selectButtonProps = {
    selected: boolean;
    children: string;
    onClick: any;
    className?: string;
};
declare type styledSelectButtonProps = {
    selected: boolean;
};
