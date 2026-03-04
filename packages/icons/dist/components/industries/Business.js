import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgBusiness = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m14.8 17.25 3 3.75m-9-3.75L5.8 21m3-9.75v2.25m3-3.75v3.75m3-5.25v5.25m-3-9V2.25M3.55 4.5h16.5a.75.75 0 0 1 .75.75V16.5a.75.75 0 0 1-.75.75H3.55a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgBusiness.displayName = "SvgBusiness";
export default SvgBusiness;
