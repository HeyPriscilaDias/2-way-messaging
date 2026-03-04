import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgHospitality = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2.05 17.5h19.5m-19.5 3h19.5M11.8 7V4m0 3a8.25 8.25 0 0 0-8.25 8.25v2.25M11.8 7a8.25 8.25 0 0 1 8.25 8.25v2.25M9.55 4h4.5" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgHospitality.displayName = "SvgHospitality";
export default SvgHospitality;
