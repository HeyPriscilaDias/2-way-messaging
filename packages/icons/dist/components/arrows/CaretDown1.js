import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgCaretDown1 = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "M18.528 9.353A.57.57 0 0 0 18.001 9H6.57a.571.571 0 0 0-.403.976l5.714 5.714a.57.57 0 0 0 .809 0l5.714-5.714a.57.57 0 0 0 .123-.623" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgCaretDown1.displayName = "SvgCaretDown1";
export default SvgCaretDown1;
