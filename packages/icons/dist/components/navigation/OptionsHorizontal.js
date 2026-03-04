import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgOptionsHorizontal = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "M12 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M18.375 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M5.625 13.125a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgOptionsHorizontal.displayName = "SvgOptionsHorizontal";
export default SvgOptionsHorizontal;
