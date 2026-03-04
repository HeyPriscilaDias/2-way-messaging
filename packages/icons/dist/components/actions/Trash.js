import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgTrash = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 16 16", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13.5 3.5h-11m4 3v4m3-4v4m3-7V13a.5.5 0 0 1-.5.5H4a.5.5 0 0 1-.5-.5V3.5m7 0v-1a1 1 0 0 0-1-1h-3a1 1 0 0 0-1 1v1" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgTrash.displayName = "SvgTrash";
export default SvgTrash;
