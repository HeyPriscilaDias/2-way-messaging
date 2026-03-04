import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgManufacturing = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M7.7 17.5h2.625m3.75 0H16.7m3.75-3.75h-4.5l-6-4.5v4.5l-6-4.5v12m16.5-7.5-1.406-9.856a.75.75 0 0 0-.745-.644h-1.698a.75.75 0 0 0-.745.644l-1.26 8.84m5.854 1.016v7.5m-18 0h19.5" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgManufacturing.displayName = "SvgManufacturing";
export default SvgManufacturing;
