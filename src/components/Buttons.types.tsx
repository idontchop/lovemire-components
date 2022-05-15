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

type selectButtonProps = {
    selected: boolean,
    children: string,
    onClick: any,
    className?: string,
    noCheckBox?: boolean,
    noCheckMark?: boolean
}

type styledSelectButtonProps = {
    selected: boolean
}