import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgPersonalityType = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "M7.5 9.75a.75.75 0 0 0 0 1.5zm9 1.5a.75.75 0 0 0 0-1.5zm-2.124 6.416a.75.75 0 1 0 1.248-.832zm-6-.832a.75.75 0 1 0 1.248.832zM12.75 10.5a.75.75 0 0 0-1.5 0zM21 12h-.75A8.25 8.25 0 0 1 12 20.25v1.5c5.385 0 9.75-4.365 9.75-9.75zm-9 9v-.75A8.25 8.25 0 0 1 3.75 12h-1.5c0 5.385 4.365 9.75 9.75 9.75zm-9-9h.75A8.25 8.25 0 0 1 12 3.75v-1.5c-5.385 0-9.75 4.365-9.75 9.75zm9-9v.75A8.25 8.25 0 0 1 20.25 12h1.5c0-5.385-4.365-9.75-9.75-9.75zm1.5 4.5h-.75a.75.75 0 0 1-.75.75v1.5a2.25 2.25 0 0 0 2.25-2.25zM12 9v-.75a.75.75 0 0 1-.75-.75h-1.5A2.25 2.25 0 0 0 12 9.75zm-1.5-1.5h.75a.75.75 0 0 1 .75-.75v-1.5A2.25 2.25 0 0 0 9.75 7.5zM12 6v.75a.75.75 0 0 1 .75.75h1.5A2.25 2.25 0 0 0 12 5.25zm-4.5 4.5v.75h9v-1.5h-9zm7.5 6.75.624-.416-3-4.5-.624.416-.624.416 3 4.5zm-3-4.5-.624-.416-3 4.5.624.416.624.416 3-4.5zm0-2.25h-.75v2.25h1.5V10.5z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgPersonalityType.displayName = "SvgPersonalityType";
export default SvgPersonalityType;
