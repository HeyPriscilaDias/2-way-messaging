import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgPlant = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m5.25 12 6 6m7.5-9.75-5.742 5.742a6 6 0 0 0-1.758 4.243V21m1.738-6.988c-2.992-4.989.998-9.976 9.477-9.477.504 8.48-4.488 12.47-9.477 9.477m-4.694 1.032c2.138-3.562-.712-7.125-6.77-6.77-.356 6.058 3.208 8.908 6.77 6.77" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgPlant.displayName = "SvgPlant";
export default SvgPlant;
