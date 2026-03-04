import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgTransportation = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16.25 6.5h3.992a.75.75 0 0 1 .695.469l1.313 3.281m0 0h-6m6 0v6a.75.75 0 0 1-.75.75h-2.25m-18-4.5h15m3 4.5a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m0 0h-6m0 0a2.25 2.25 0 0 1-4.5 0m4.5 0a2.25 2.25 0 0 0-4.5 0m0 0H2a.75.75 0 0 1-.75-.75V5.75A.75.75 0 0 1 2 5h14.25v9.878" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgTransportation.displayName = "SvgTransportation";
export default SvgTransportation;
