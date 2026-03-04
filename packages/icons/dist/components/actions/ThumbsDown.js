import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgThumbsDown = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.25 3h-4.5a.75.75 0 0 0-.75.75V12a.75.75 0 0 0 .75.75h4.5m0-9.75v9.75m0-9.75h11.625a1.5 1.5 0 0 1 1.488 1.313l1.125 9A1.5 1.5 0 0 1 20 15h-6v2.25a3 3 0 0 1-3 3l-3.75-7.5" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgThumbsDown.displayName = "SvgThumbsDown";
export default SvgThumbsDown;
