import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgGradeLevel = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M1.5 18.75h5.25v-4.5H12v-4.5h5.25v-4.5h5.25" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgGradeLevel.displayName = "SvgGradeLevel";
export default SvgGradeLevel;
