import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgPark = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2.25 18.75h19.5m-16.5-6v6m5.25-6v6m-6.75-3H12m-8.25-3H12m6 6V15m0-12 3 12h-6zm-5.25 3.375a1.875 1.875 0 1 1-3.75 0 1.875 1.875 0 0 1 3.75 0" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgPark.displayName = "SvgPark";
export default SvgPark;
