
type CallaspableMenuProps = {
    title?: string,
    children?: any,
    className?: string,
    /** If menu should be expanded on load. This value is only read
     on the intial load. */
    expanded?: boolean,
    expandedCallBack?: any
}

type ContentDivProps = {
    expanded?: boolean
}