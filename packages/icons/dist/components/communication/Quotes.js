import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgQuotes = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M10.125 13.125H3.75a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75h5.625a.75.75 0 0 1 .75.75v8.25a3.75 3.75 0 0 1-3.75 3.75m14.875-5.25h-6.375a.75.75 0 0 1-.75-.75v-6a.75.75 0 0 1 .75-.75H20.5a.75.75 0 0 1 .75.75v8.25a3.75 3.75 0 0 1-3.75 3.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgQuotes.displayName = "SvgQuotes";
export default SvgQuotes;
