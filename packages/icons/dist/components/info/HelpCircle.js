import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgHelpCircle = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { fill: "currentColor", d: "M12 18a1.125 1.125 0 1 0 0-2.25A1.125 1.125 0 0 0 12 18" }), _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 13.5v-.75c1.657 0 3-1.176 3-2.625S13.657 7.5 12 7.5s-3 1.176-3 2.625v.375M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgHelpCircle.displayName = "SvgHelpCircle";
export default SvgHelpCircle;
