import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSocialYoutube = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsxs("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: [_jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m15 12-4.5-3v6z" }), _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M2.25 12c0 2.804.288 4.448.507 5.294a1.5 1.5 0 0 0 .9 1.027C6.798 19.533 12 19.5 12 19.5s5.201.033 8.344-1.18a1.5 1.5 0 0 0 .903-1.026c.219-.844.507-2.49.507-5.294s-.288-4.448-.507-5.294a1.5 1.5 0 0 0-.903-1.031C17.2 4.467 12 4.5 12 4.5s-5.201-.033-8.344 1.18a1.5 1.5 0 0 0-.903 1.03c-.215.84-.503 2.486-.503 5.29" })] }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSocialYoutube.displayName = "SvgSocialYoutube";
export default SvgSocialYoutube;
