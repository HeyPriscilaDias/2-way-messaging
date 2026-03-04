import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSafety = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8.25 12.75 10.5 15l5.25-5.25m4.5.75V5.25a.75.75 0 0 0-.75-.75h-15a.75.75 0 0 0-.75.75v5.25c0 9 8.25 11.25 8.25 11.25s8.25-2.25 8.25-11.25" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSafety.displayName = "SvgSafety";
export default SvgSafety;
