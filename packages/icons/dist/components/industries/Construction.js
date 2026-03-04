import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgConstruction = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M10.1 16V4.75a.75.75 0 0 1 .75-.75h3a.75.75 0 0 1 .75.75V16m6 0v-2.25a8.25 8.25 0 0 0-6-7.94M4.1 16v-2.25a8.25 8.25 0 0 1 6-7.94M3.35 16h18a.75.75 0 0 1 .75.75V19a.75.75 0 0 1-.75.75h-18A.75.75 0 0 1 2.6 19v-2.25a.75.75 0 0 1 .75-.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgConstruction.displayName = "SvgConstruction";
export default SvgConstruction;
