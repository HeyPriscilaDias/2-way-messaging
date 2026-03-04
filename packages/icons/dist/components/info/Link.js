import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgLink = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m13.255 6.064 1.03-1.031a4.372 4.372 0 1 1 6.183 6.181l-3.255 3.255a4.37 4.37 0 0 1-6.188-.004 4.36 4.36 0 0 1-1.275-3.21m.996 6.681-1.032 1.032a4.373 4.373 0 0 1-7.462-3.095 4.37 4.37 0 0 1 1.28-3.087L6.789 9.53a4.37 4.37 0 0 1 6.182 0 4.35 4.35 0 0 1 1.28 3.213" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgLink.displayName = "SvgLink";
export default SvgLink;
