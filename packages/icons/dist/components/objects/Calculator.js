import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgCalculator = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeWidth: 2, d: "M15 6v2H9V6z" }), _jsx("rect", { width: 16, height: 20, x: 4, y: 2, stroke: "currentColor", strokeLinejoin: "round", strokeWidth: 1.5, rx: 3 })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgCalculator.displayName = "SvgCalculator";
export default SvgCalculator;
