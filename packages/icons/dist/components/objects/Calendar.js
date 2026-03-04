import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgCalendar = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16.5 2.25v3m-9-3v3m-3.75 3h16.5M4.5 3.75h15a.75.75 0 0 1 .75.75v15a.75.75 0 0 1-.75.75h-15a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75" }), _jsx("path", { fill: "currentColor", d: "M12 13.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M16.125 13.5a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M7.875 17.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25M12 17.25A1.125 1.125 0 1 0 12 15a1.125 1.125 0 0 0 0 2.25M16.125 17.25a1.125 1.125 0 1 0 0-2.25 1.125 1.125 0 0 0 0 2.25" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgCalendar.displayName = "SvgCalendar";
export default SvgCalendar;
