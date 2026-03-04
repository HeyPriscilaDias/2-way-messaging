import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgBrain = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M8.25 12.75A3.75 3.75 0 1 1 4.5 16.5v-.63m11.25-3.12a3.75 3.75 0 1 0 3.75 3.75v-.63m-12.75.255H6a4.5 4.5 0 0 1-1.5-8.744V6.75a3.75 3.75 0 0 1 7.5 0m0 0v9.75m0-9.75a3.75 3.75 0 0 1 7.5 0v.63a4.5 4.5 0 0 1-1.5 8.745h-.75m1.5-5.625h-.375a2.625 2.625 0 0 1-2.625-2.625V7.5m-10.5 3h.375A2.625 2.625 0 0 0 8.25 7.875V7.5" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgBrain.displayName = "SvgBrain";
export default SvgBrain;
