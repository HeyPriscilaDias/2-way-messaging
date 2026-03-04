import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgCaretRight1 = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "M15.69 11.882 9.976 6.168A.571.571 0 0 0 9 6.572V18a.572.572 0 0 0 .976.404l5.714-5.715a.57.57 0 0 0 0-.808" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgCaretRight1.displayName = "SvgCaretRight1";
export default SvgCaretRight1;
