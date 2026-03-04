import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSchoolSizeBig = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.5 18.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0A5.63 5.63 0 0 0 3 21m4.5-2.25A5.63 5.63 0 0 1 12 21a5.63 5.63 0 0 1 4.5-2.25M7.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0A5.63 5.63 0 0 0 3 11.25M7.5 9a5.63 5.63 0 0 1 4.5 2.25A5.63 5.63 0 0 1 16.5 9m0 9.75a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0A5.63 5.63 0 0 1 21 21M16.5 9a3 3 0 1 0 0-6 3 3 0 0 0 0 6m0 0a5.63 5.63 0 0 1 4.5 2.25" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSchoolSizeBig.displayName = "SvgSchoolSizeBig";
export default SvgSchoolSizeBig;
