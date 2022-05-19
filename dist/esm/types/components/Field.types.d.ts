declare type FieldProps = {
    value: string;
    type?: string;
    select: any;
    onComplete?: any;
};
declare type TextAreaProps = FieldProps & {
    children: any;
    onChange: any;
};
