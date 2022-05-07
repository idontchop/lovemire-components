
type navButtonProps = {
    selected?: boolean,
    onClick?: any,
    /* no argument method */
    notifications?: number[],
    /* Array of numbers that will be arranged by the component across background
       Current supports 0-2, arranged:   1  XTitleX 2 */
    children?: any,
    /* Usually a string that is title, centered by component */
    showNotificationsOnSelected?: boolean
    /* if given, hides notifications if selected, default false */
}