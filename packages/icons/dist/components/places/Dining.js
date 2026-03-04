import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgDining = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.5 3.75v4.5m0 3.75v9m0-9a3.75 3.75 0 0 1-3.75-3.75l.75-4.5m3 8.25a3.75 3.75 0 0 0 3.75-3.75l-.75-4.5m9 12h-5.25s0-9.75 5.25-12V21" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgDining.displayName = "SvgDining";
export default SvgDining;
