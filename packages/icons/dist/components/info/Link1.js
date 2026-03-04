import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgLink1 = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m9 15 6-6m-4.5-1.865 2.818-2.812a4.5 4.5 0 0 1 6.364 6.364L16.864 13.5m-9.729-3-2.812 2.818a4.5 4.5 0 0 0 6.364 6.364l2.813-2.818" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgLink1.displayName = "SvgLink1";
export default SvgLink1;
