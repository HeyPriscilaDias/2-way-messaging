import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgThumbsUp = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.25 10.5h-4.5a.75.75 0 0 0-.75.75v8.25a.75.75 0 0 0 .75.75h4.5m0-9.75v9.75m0-9.75L11 3a3 3 0 0 1 3 3v2.25h6a1.5 1.5 0 0 1 1.488 1.688l-1.125 9a1.5 1.5 0 0 1-1.488 1.312H7.25" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgThumbsUp.displayName = "SvgThumbsUp";
export default SvgThumbsUp;
