/// <reference types="react" />
declare type ConfigurableButtonProps = {
    className?: string;
    style?: any;
    selected?: boolean;
    onKeyDown?: () => void;
    onSelected: (arg?: boolean) => void;
    onUnSelect?: () => void;
    selectedBy?: {
        hold?: number;
        doubleClick?: boolean;
        unSelectedable?: boolean;
        blinkDuration?: number;
    };
    children: JSX.Element | JSX.Element[] | string;
    keyDownChildren?: JSX.Element | JSX.Element[] | string;
    onSelectedChildren?: JSX.Element | JSX.Element[] | string;
};
