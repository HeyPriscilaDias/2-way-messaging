import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgErrands = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M11.25 12V1.5m0 0-3 3m3-3 3 3m3 7.5A7.72 7.72 0 0 1 21 18.623V22.5M7.5 8.25H6a.75.75 0 0 0-.75.75v9.75m9.838 3.75-2.087-3.187a1.875 1.875 0 0 1 3.248-1.875l1.001 1.529V9a.75.75 0 0 0-.75-.75H15" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgErrands.displayName = "SvgErrands";
export default SvgErrands;
