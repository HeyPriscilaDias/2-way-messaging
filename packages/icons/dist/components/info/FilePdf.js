import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgFilePdf = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M20.25 14.25h-3v5.25m2.25-2.25h-2.25M4.5 18H6a1.875 1.875 0 1 0 0-3.75H4.5v5.25m0-9V3.75A.75.75 0 0 1 5.25 3h9m0 0 5.25 5.25M14.25 3v5.25h5.25m0 0v2.25m-9 3.75v5.25H12a2.625 2.625 0 0 0 0-5.25z" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgFilePdf.displayName = "SvgFilePdf";
export default SvgFilePdf;
