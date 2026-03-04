import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgPublicService = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("g", { clipPath: "url(#a)", children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M1.85 6.75V18m19.5-11.25V18M11.6 6.75v6m-11.25-6h22.5m-21 6h19.5m-15.75-3h2.25m7.5 0h2.25" }) }), _jsx("defs", { children: _jsx("clipPath", { id: "a", children: _jsx("path", { fill: "currentColor", d: "M0 0h24v24H0z" }) }) })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgPublicService.displayName = "SvgPublicService";
export default SvgPublicService;
