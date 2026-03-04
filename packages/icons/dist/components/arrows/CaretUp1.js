import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react'; // We've added the optional 'color' prop to this interface for type safety.
const SvgCaretUp1 = React.forwardRef(({ size = 24, color = 'currentColor', ...props }, ref) => React.cloneElement(_jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: "1em", height: "1em", fill: "none", viewBox: "0 0 24 24", ...props, children: _jsx("path", { fill: "currentColor", d: "M18.405 14.882 12.69 9.168a.57.57 0 0 0-.808 0l-5.714 5.714a.572.572 0 0 0 .404.976H18a.572.572 0 0 0 .404-.976" }) }), {
    ...props,
    ref,
    width: size,
    height: size,
    style: {
        ...props.style,
        color: color
    }
}));
SvgCaretUp1.displayName = "SvgCaretUp1";
export default SvgCaretUp1;
