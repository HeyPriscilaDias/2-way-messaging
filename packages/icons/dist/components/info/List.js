import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgList = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8.25 6h12m-12 6h12m-12 6h12" }), _jsx("path", { fill: "currentColor", d: "M4.125 7.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M4.125 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M4.125 19.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgList.displayName = "SvgList";
export default SvgList;
