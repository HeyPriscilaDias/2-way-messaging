import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgSchoolSizeSmall = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M.959 18.75a8.25 8.25 0 0 1 13.832 0m8.25 0A8.24 8.24 0 0 0 16.125 15a4.874 4.874 0 1 0-1.81-9.403m-1.565 4.528a4.875 4.875 0 1 1-9.75 0 4.875 4.875 0 0 1 9.75 0" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgSchoolSizeSmall.displayName = "SvgSchoolSizeSmall";
export default SvgSchoolSizeSmall;
