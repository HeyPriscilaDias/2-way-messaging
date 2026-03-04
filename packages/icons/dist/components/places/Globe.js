import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgGlobe = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 12h18M3 12a9 9 0 0 0 9 9m-9-9a9 9 0 0 1 9-9m9 9a9 9 0 0 1-9 9m9-9a9 9 0 0 0-9-9m0 18s3.75-3 3.75-9S12 3 12 3m0 18s-3.75-3-3.75-9S12 3 12 3" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgGlobe.displayName = "SvgGlobe";
export default SvgGlobe;
