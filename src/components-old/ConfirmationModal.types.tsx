type ConfirmationModalProps = {
    onConfirm: any,
    onCancel: any,
    okButtonText?: string,
    /* Default: ok */
    cancelButtonText?: string,
    /* Default: cancel */
    message?: string | JSX.Element | JSX.Element[],
    /* Goes under the buttons */
    children: string | JSX.Element | JSX.Element[]
    /* Goes above the buttons */
}