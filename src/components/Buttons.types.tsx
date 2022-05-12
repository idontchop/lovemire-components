type buttonProps = {
    onClick?: any,
    /* no argument method */


}

type bigButtonProps = {
    onClick: any,
    children: string | number | JSX.Element | JSX.Element[],
    /* requires an onClick method and children
    */
    className?: string
}