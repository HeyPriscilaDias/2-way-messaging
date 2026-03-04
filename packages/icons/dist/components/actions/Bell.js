import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgBell = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 18a3 3 0 0 0 6 0M5.25 9.75a6.75 6.75 0 0 1 13.5 0c0 3.358.778 6.056 1.397 7.125A.75.75 0 0 1 19.5 18h-15a.75.75 0 0 1-.645-1.125c.618-1.069 1.395-3.768 1.395-7.125" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgBell.displayName = "SvgBell";
export default SvgBell;
