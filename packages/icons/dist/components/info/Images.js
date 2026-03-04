import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgImages = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M17.25 17.25v2.25a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 .75-.75h2.25m2.315 10.5 7.28-7.28a.75.75 0 0 1 1.06 0l2.845 2.845M7.5 3.75h12a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 .75-.75m5.25 4.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgImages.displayName = "SvgImages";
export default SvgImages;
