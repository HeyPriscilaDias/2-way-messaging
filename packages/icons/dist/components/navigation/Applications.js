import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgApplications = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M18.75 16.5V6a2.25 2.25 0 0 0-2.25-2.25H3.75m0 0A2.25 2.25 0 0 0 1.5 6c0 .938.75 1.5.75 1.5m1.5-3.75A2.25 2.25 0 0 1 6 6v12a2.25 2.25 0 0 0 2.25 2.25m1.5-10.5h6m-6 3h6m-7.5 7.5A2.25 2.25 0 0 0 10.5 18c0-.937-.75-1.5-.75-1.5h10.5s.75.563.75 1.5a2.25 2.25 0 0 1-2.25 2.25z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgApplications.displayName = "SvgApplications";
export default SvgApplications;
