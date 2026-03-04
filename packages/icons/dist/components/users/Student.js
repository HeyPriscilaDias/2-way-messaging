import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgStudent = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { stroke: "currentColor", strokeLinecap: "round", strokeLinejoin: "round", strokeWidth: 1.5, d: "M3 6v7.5M3 6l9 3 9-3-9-3zm2.25 14.25C6.722 17.992 9.104 16.5 12 16.5m0 0c2.896 0 5.278 1.492 6.75 3.75M12 16.5a5.25 5.25 0 0 0 3.876-8.792M12 16.5a5.25 5.25 0 0 1-3.876-8.792" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgStudent.displayName = "SvgStudent";
export default SvgStudent;
