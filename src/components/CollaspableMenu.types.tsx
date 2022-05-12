
type CallaspableMenuProps = {
    title?: string,
    /* Displayed on the bar */
    children?: any,
    /* Displayed inside the content div */
    className?: string,
    /* to allow custom styled-components */
    expanded?: boolean
    /* If menu should be expanded on load. This value is only read
       on the intial load. Whether the menu is expanded should not
       affect any upstream properties */
}

type ContentDivProps = {
    expanded?: boolean
}