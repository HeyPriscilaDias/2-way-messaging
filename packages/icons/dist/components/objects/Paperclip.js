import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgPaperclip = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m15 7.5-7.81 7.94a1.5 1.5 0 0 0 2.121 2.12l9.31-9.438a3 3 0 1 0-4.243-4.244l-9.31 9.44a4.5 4.5 0 0 0 6.364 6.364L19.125 12" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgPaperclip.displayName = "SvgPaperclip";
export default SvgPaperclip;
