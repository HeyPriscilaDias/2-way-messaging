import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgFileText = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M14.25 3h-9a.75.75 0 0 0-.75.75v16.5a.75.75 0 0 0 .75.75h13.5a.75.75 0 0 0 .75-.75v-12M14.25 3l5.25 5.25M14.25 3v5.25h5.25M9 12.75h6m-6 3h6" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgFileText.displayName = "SvgFileText";
export default SvgFileText;
