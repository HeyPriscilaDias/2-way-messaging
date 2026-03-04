import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSchoolSizeMedium = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M22.5 13.5a5.62 5.62 0 0 0-4.5-2.25 3 3 0 1 0-2.906-3.75M1.5 13.5A5.62 5.62 0 0 1 6 11.25 3 3 0 1 1 8.906 7.5M12 17.25a3.75 3.75 0 1 0 0-7.5 3.75 3.75 0 0 0 0 7.5m0 0a6.09 6.09 0 0 0-5.25 3m5.25-3a6.09 6.09 0 0 1 5.25 3" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSchoolSizeMedium.displayName = "SvgSchoolSizeMedium";
export default SvgSchoolSizeMedium;
