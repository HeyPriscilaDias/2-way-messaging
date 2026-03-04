import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgNotes = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M9 9h6m-6 3h6m-6 3h3m8.183 0H15v5.182m-.31.068H4.5a.75.75 0 0 1-.75-.75v-15a.75.75 0 0 1 .75-.75h15a.75.75 0 0 1 .75.75v10.19a.75.75 0 0 1-.22.53l-4.81 4.81a.75.75 0 0 1-.53.22" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgNotes.displayName = "SvgNotes";
export default SvgNotes;
