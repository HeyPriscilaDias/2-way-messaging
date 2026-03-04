import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgStarFill = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "m21.965 10.767-4.22 3.64 1.286 5.445a1.538 1.538 0 0 1-2.297 1.67L12 18.61l-4.737 2.913a1.538 1.538 0 0 1-2.294-1.67l1.29-5.444-4.22-3.64a1.543 1.543 0 0 1 .875-2.705l5.53-.447 2.135-5.163a1.534 1.534 0 0 1 2.837 0l2.133 5.163 5.532.447a1.543 1.543 0 0 1 .878 2.705z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgStarFill.displayName = "SvgStarFill";
export default SvgStarFill;
