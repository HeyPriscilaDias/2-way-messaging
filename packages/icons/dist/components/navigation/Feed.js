import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgFeed = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M12 4.5v15m-9-12h18m-18 9h18M7.5 4.5v3m9-3v3m-9 9v3m9-3v3M3.75 4.5h16.5a.75.75 0 0 1 .75.75v13.5a.75.75 0 0 1-.75.75H3.75a.75.75 0 0 1-.75-.75V5.25a.75.75 0 0 1 .75-.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgFeed.displayName = "SvgFeed";
export default SvgFeed;
