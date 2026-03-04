import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSocialGoogle = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsxs("g", { fill: "currentColor", clipPath: "url(#a)", children: [_jsx("path", { d: "M12 4.75c1.77 0 3.355.61 4.605 1.8l3.425-3.425C17.95 1.19 15.235 0 12 0 7.31 0 3.255 2.69 1.28 6.61l3.99 3.095C6.215 6.86 8.87 4.75 12 4.75M23.49 12.275c0-.785-.075-1.545-.19-2.275H12v4.51h6.47a5.58 5.58 0 0 1-2.39 3.59l3.865 3c2.255-2.09 3.545-5.18 3.545-8.825M5.265 14.295A7.3 7.3 0 0 1 4.885 12c0-.8.135-1.57.38-2.295L1.275 6.61A11.96 11.96 0 0 0 0 12c0 1.94.46 3.77 1.28 5.39z" }), _jsx("path", { d: "M12 24c3.24 0 5.965-1.065 7.945-2.905l-3.865-3c-1.075.725-2.46 1.15-4.08 1.15-3.13 0-5.785-2.11-6.735-4.955l-3.99 3.095C3.255 21.31 7.31 24 12 24" })] }), _jsx("defs", { children: _jsx("clipPath", { id: "a", children: _jsx("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSocialGoogle.displayName = "SvgSocialGoogle";
export default SvgSocialGoogle;
