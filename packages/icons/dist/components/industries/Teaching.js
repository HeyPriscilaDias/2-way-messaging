import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgTeaching = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M16.9 16.5h1.5v-9h-12V9m6.75 4.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0m-7.745 6a5.25 5.25 0 0 1 9.49 0h5.755a.75.75 0 0 0 .75-.75V5.25a.75.75 0 0 0-.75-.75H4.15a.75.75 0 0 0-.75.75v13.5a.75.75 0 0 0 .75.75z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgTeaching.displayName = "SvgTeaching";
export default SvgTeaching;
