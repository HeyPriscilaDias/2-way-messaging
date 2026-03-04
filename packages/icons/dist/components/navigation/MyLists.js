import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgMyLists = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3.75 6h16.5m-16.5 6h6m-6 6h7.5M18 13.5a2.25 2.25 0 0 1 4.5 0c0 3-4.5 5.25-4.5 5.25s-4.5-2.25-4.5-5.25a2.25 2.25 0 0 1 4.5 0" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgMyLists.displayName = "SvgMyLists";
export default SvgMyLists;
