/// <reference types="react" />
declare type ConfirmationModalProps = {
    onConfirm: any;
    onCancel: any;
    okButtonText?: string;
    cancelButtonText?: string;
    message?: string | JSX.Element | JSX.Element[];
    children: string | JSX.Element | JSX.Element[];
};
