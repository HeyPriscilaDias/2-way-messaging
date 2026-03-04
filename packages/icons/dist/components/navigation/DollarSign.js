import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgDollarSign = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 2.25v19.5m5.25-13.5A3.75 3.75 0 0 0 13.5 4.5h-3a3.75 3.75 0 0 0 0 7.5h3.75a3.75 3.75 0 0 1 0 7.5h-4.5A3.75 3.75 0 0 1 6 15.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgDollarSign.displayName = "SvgDollarSign";
export default SvgDollarSign;
