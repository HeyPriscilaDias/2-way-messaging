import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgAlertTriangle = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 13.5V9.75m1.351-5.98 8.2 14.238c.574 1.004-.168 2.242-1.351 2.242H3.8c-1.182 0-1.925-1.238-1.35-2.242l8.2-14.237c.59-1.028 2.11-1.028 2.701 0" }), _jsx("path", { fill: "currentColor", d: "M12 18a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 12 18" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgAlertTriangle.displayName = "SvgAlertTriangle";
export default SvgAlertTriangle;
