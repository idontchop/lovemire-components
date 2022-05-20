
type FieldProps = {
    value: string,
    type?: string,
    /* css input types */
    select: any,
    /* onChange - sends current value */
    onComplete?: any
    /* Sends same data as select but fires on completion events:
        onBlur
        on Enter press */
}

type TextAreaProps = {
    children: any,
    onChange: any,
    /* Same as select */
    onComplete?: any
}