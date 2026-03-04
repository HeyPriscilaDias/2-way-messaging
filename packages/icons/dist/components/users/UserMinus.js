import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgUserMinus = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18.75 12.75h4.5M10.125 15a5.625 5.625 0 1 0 0-11.25 5.625 5.625 0 0 0 0 11.25m0 0c-3.229 0-5.948 1.458-7.875 3.75M10.125 15c3.229 0 5.948 1.458 7.875 3.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgUserMinus.displayName = "SvgUserMinus";
export default SvgUserMinus;
