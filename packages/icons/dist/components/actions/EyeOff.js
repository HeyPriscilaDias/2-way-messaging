import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgEyeOff = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "m4.5 3.75 15 16.5m-4.977-5.475a3.75 3.75 0 1 1-5.046-5.55m3.229-.908a3.75 3.75 0 0 1 3.028 3.33m3.823 4.206C21.601 14.023 22.5 12 22.5 12s-3-6.75-10.5-6.75q-.976 0-1.939.157M6.938 6.432C3.115 8.366 1.5 12 1.5 12s3 6.75 10.5 6.75a11.1 11.1 0 0 0 5.063-1.181" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgEyeOff.displayName = "SvgEyeOff";
export default SvgEyeOff;
