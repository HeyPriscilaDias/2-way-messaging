import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgCareers = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M15.75 6V4.5a1.5 1.5 0 0 0-1.5-1.5h-4.5a1.5 1.5 0 0 0-1.5 1.5V6M21 11.092a17.9 17.9 0 0 1-9 2.408 17.9 17.9 0 0 1-9-2.408m7.5-.592h3M3.75 6h16.5a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75v-12A.75.75 0 0 1 3.75 6" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgCareers.displayName = "SvgCareers";
export default SvgCareers;
