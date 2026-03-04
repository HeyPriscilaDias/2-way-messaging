import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgBellOff = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4.5 3.75 15 16.5M9 18a3 3 0 0 0 6 0M8.67 3.877A6.75 6.75 0 0 1 18.75 9.75c0 2.728.514 5.021 1.038 6.356M17.454 18H4.5a.75.75 0 0 1-.645-1.125c.618-1.069 1.395-3.768 1.395-7.125A6.7 6.7 0 0 1 6.455 5.9" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgBellOff.displayName = "SvgBellOff";
export default SvgBellOff;
