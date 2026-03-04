import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgMediaAndArts = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m6.547 7.055 4.48 2.587m1.042-4.044 4.48 2.586M3.95 11.5h16.5v8.25a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75zm.04 0L19.7 7.353l-.765-2.813a.74.74 0 0 0-.905-.515L3.748 7.793a.727.727 0 0 0-.523.894z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgMediaAndArts.displayName = "SvgMediaAndArts";
export default SvgMediaAndArts;
