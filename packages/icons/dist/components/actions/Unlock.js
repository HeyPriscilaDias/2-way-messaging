import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgUnlock = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8.5 9.75v-3A3.75 3.75 0 0 1 12.25 3c1.814 0 3.402 1.288 3.75 3M4.75 9.75h15a.75.75 0 0 1 .75.75V21a.75.75 0 0 1-.75.75h-15A.75.75 0 0 1 4 21V10.5a.75.75 0 0 1 .75-.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgUnlock.displayName = "SvgUnlock";
export default SvgUnlock;
