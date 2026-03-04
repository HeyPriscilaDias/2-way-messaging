import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgExternalLink = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20.25 9.75v-6h-6m-1.5 7.5 7.5-7.5m-3 9v6.75a.75.75 0 0 1-.75.75h-12a.75.75 0 0 1-.75-.75v-12a.75.75 0 0 1 .75-.75h6.75" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgExternalLink.displayName = "SvgExternalLink";
export default SvgExternalLink;
