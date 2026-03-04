import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgFarming = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M13.526 10.474c-2.351-3.92.784-7.839 7.447-7.447.392 6.663-3.527 9.798-7.447 7.447m0 0L9.75 14.25m-4.5 0h13.5m-1.5 0-1.37 6.163a.75.75 0 0 1-.732.587H8.852a.75.75 0 0 1-.732-.587L6.75 14.25m2.436-3.564 2.064 2.064m-2.063-2.062c1.71-2.851-.57-5.701-5.416-5.416-.286 4.844 2.564 7.124 5.416 5.416" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgFarming.displayName = "SvgFarming";
export default SvgFarming;
