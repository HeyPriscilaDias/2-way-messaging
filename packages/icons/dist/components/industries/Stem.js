import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgStem = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3.4 21.25h18M7.15 17.5h6m0-9.75a7.5 7.5 0 0 1 4.5 13.5m-9.75-18h4.5a.75.75 0 0 1 .75.75v9.75a.75.75 0 0 1-.75.75H7.9a.75.75 0 0 1-.75-.75V4a.75.75 0 0 1 .75-.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgStem.displayName = "SvgStem";
export default SvgStem;
