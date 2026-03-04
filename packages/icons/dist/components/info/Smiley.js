import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSmiley = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 20 20", ...props, children: [_jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13.125 11.875c-.648 1.121-1.737 1.875-3.125 1.875s-2.477-.754-3.125-1.875M17.5 10a7.5 7.5 0 1 1-15 0 7.5 7.5 0 0 1 15 0" }), _jsx("path", { fill: "currentColor", d: "M7.188 9.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875M12.813 9.375a.937.937 0 1 0 0-1.875.937.937 0 0 0 0 1.875" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSmiley.displayName = "SvgSmiley";
export default SvgSmiley;
