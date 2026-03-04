import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgInfo = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M11.25 11.25A.75.75 0 0 1 12 12v3.75a.75.75 0 0 0 .75.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" }), _jsx("path", { fill: "currentColor", d: "M11.625 9a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgInfo.displayName = "SvgInfo";
export default SvgInfo;
