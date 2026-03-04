import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgButterfly = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 5.25v11.625m0 0A3.385 3.385 0 1 1 8.25 13.5M12 16.875a3.374 3.374 0 1 0 3.75-3.375m1.853.744c.754.045 2.765-.12 3.502-3.021.758-2.988 1.416-6.723-1.518-6.723C16.654 4.5 12 8.981 12 11.97 12 8.98 7.346 4.5 4.413 4.5c-2.934 0-2.276 3.735-1.518 6.723.737 2.9 2.748 3.066 3.503 3.021" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgButterfly.displayName = "SvgButterfly";
export default SvgButterfly;
