import React from 'react';
import { Selections } from './RadioSelection.types';
/**
 * @todo Still produces a unique key error in some cases, numbers as name?
 * @param props
 * @returns
 */
declare const Rs: (props: {
    selections: Array<Selections>;
    select: any;
}) => React.JSX.Element;
export default Rs;
